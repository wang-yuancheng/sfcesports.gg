"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { useCart, CartItem } from "@/hooks/useCart";

export type UserProfile = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  phone_country_code: string | null;
  phone_number: string | null;
  membership_tier: string;
  notifications: {
    tournaments: boolean;
    contents: boolean;
    mentions: boolean;
    marketing: boolean;
  } | null;
};

type UserContextType = {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  refreshProfile: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
  children,
  initialUser,
  initialProfile = null,
}: {
  children: React.ReactNode;
  initialUser: User | null;
  initialProfile?: UserProfile | null;
}) {
  const [user, setUser] = useState<User | null>(initialUser);
  const [profile, setProfile] = useState<UserProfile | null>(initialProfile);
  const [isLoading, setIsLoading] = useState(!initialUser && !initialProfile);

  const isMounted = useRef(false);
  const syncedUserRef = useRef<string | null>(null);
  const isFirstMount = useRef(true);

  const supabase = createClient();

  const mergeCart = useCart((state) => state.mergeCart);
  const disconnectCart = useCart((state) => state.disconnectCart);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchProfile = useCallback(async () => {
    if (!user) return;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (!isMounted.current) return;

      if (data) {
        setProfile(data as UserProfile);
      } else if (!data && !isLoading) {
        console.warn("Profile not found yet (trigger may be pending)");
      }
    } catch (error: any) {
      if (isMounted.current) console.error("Unexpected error:", error);
    }
  }, [user, supabase, isLoading]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      // EDGE CASE: Stop execution if running inside an OAuth popup
      if (typeof window !== "undefined" && window.opener) return;

      if (!isMounted.current) return;

      const sessionUser = session?.user ?? null;

      if (sessionUser?.id !== user?.id) {
        setUser(sessionUser);
      }

      if (event === "SIGNED_IN" && sessionUser) {
        if (syncedUserRef.current !== sessionUser.id) {
          // 1. Check for Pending Item (Fresh Login Flow)
          let pendingItem: CartItem | null = null;
          const storedItem = localStorage.getItem("sfc-pending-plan");
          if (storedItem) {
            try {
              pendingItem = JSON.parse(storedItem);
              localStorage.removeItem("sfc-pending-plan");
            } catch (e) {
              console.error("Failed to parse pending item", e);
            }
          }

          // 2. Determine Silence
          // If we have a pendingItem, user JUST acted, so we are NOT silent (Cases 1 & 2).
          // If no pendingItem, check if this is just a page refresh (Case 5).
          const isRestoringSession =
            isFirstMount.current && initialUser?.id === sessionUser.id;
          const shouldBeSilent = !pendingItem && isRestoringSession;

          await mergeCart(sessionUser.id, {
            silent: shouldBeSilent,
            pendingItem: pendingItem,
          });

          syncedUserRef.current = sessionUser.id;
        }
      }

      if (event === "SIGNED_OUT") {
        disconnectCart();
        setProfile(null);
        syncedUserRef.current = null;
      }

      isFirstMount.current = false;
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [user, supabase, mergeCart, disconnectCart, initialUser]);

  useEffect(() => {
    if (user && !profile) fetchProfile();
    else if (!user && profile) setProfile(null);
  }, [user, profile, fetchProfile]);

  useEffect(() => {
    if (!user) return;
    const handleFocus = () => {
      if (isMounted.current) fetchProfile();
    };
    window.addEventListener("focus", handleFocus);
    window.addEventListener("visibilitychange", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("visibilitychange", handleFocus);
    };
  }, [user, fetchProfile]);

  return (
    <UserContext.Provider
      value={{ user, profile, isLoading, refreshProfile: fetchProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");
  return context;
}
