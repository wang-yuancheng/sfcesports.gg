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

export type UserProfile = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  phone_country_code: string | null;
  phone_number: string | null;
  membership_tier: string | null;
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
  const supabase = createClient();

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
      }

      if (error) {
        const errMsg = error.message || "";
        const isIgnorable =
          errMsg.includes("browsing context") ||
          errMsg.includes("AbortError") ||
          errMsg.includes("Failed to fetch");

        if (!isIgnorable && (error.message || error.code)) {
          console.error("Error fetching profile:", error.message || error);
        }
      }
    } catch (error: any) {
      if (isMounted.current) {
        const errMsg = error?.message || "";
        if (
          !errMsg.includes("browsing context") &&
          !errMsg.includes("AbortError")
        ) {
          console.error("Unexpected error:", error);
        }
      }
    }
  }, [user, supabase]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted.current) return;

      const sessionUser = session?.user ?? null;

      if (sessionUser?.id !== user?.id) {
        setUser(sessionUser);
      }

      if (_event === "SIGNED_OUT") {
        setProfile(null);
      }

      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [user, supabase]);

  useEffect(() => {
    if (user && !profile) {
      fetchProfile();
    } else if (!user && profile) {
      setProfile(null);
    }
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
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
