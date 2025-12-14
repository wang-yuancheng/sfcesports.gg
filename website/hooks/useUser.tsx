"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

// Define the shape of the profile data
export type UserProfile = {
  username: string | null;
  avatar_url: string | null;
};

type UserContextType = {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const sessionUser = session?.user ?? null;
      
      // Only update if user changed to avoid loops
      if (sessionUser?.id !== user?.id) {
        setUser(sessionUser);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [user, supabase]);

  // Client-side fetch fallback (e.g. if user logs in without refreshing)
  useEffect(() => {
    const fetchProfile = async () => {
      if (user && !profile) {
        const { data } = await supabase
          .from("profiles")
          .select("username, avatar_url")
          .eq("id", user.id)
          .single();
        if (data) setProfile(data);
      } else if (!user && profile) {
        setProfile(null);
      }
    };

    fetchProfile();
  }, [user, profile, supabase]);

  return (
    <UserContext.Provider value={{ user, profile, isLoading }}>
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