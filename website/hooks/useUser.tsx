"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
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
  const supabase = createClient();

  const fetchProfile = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data as UserProfile);
      }
      if (error) {
        console.error("Error fetching profile:", error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }, [user, supabase]);

  // Auth Listener (Handles Login/Logout)
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const sessionUser = session?.user ?? null;

      // Update user state if it changed
      if (sessionUser?.id !== user?.id) {
        setUser(sessionUser);
      }

      // Clear profile on logout
      if (_event === "SIGNED_OUT") {
        setProfile(null);
      }

      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [user, supabase]);

  // Initial Fetch on Mount
  useEffect(() => {
    if (user && !profile) {
      fetchProfile();
    } else if (!user && profile) {
      setProfile(null);
    }
  }, [user, profile, fetchProfile]);

  // Revalidate on Focus
  useEffect(() => {
    if (!user) return;

    // This function runs whenever the user clicks back onto the tab/window
    const handleFocus = () => {
      // We perform a "soft" refresh to check for updates (like new membership status)
      fetchProfile();
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
