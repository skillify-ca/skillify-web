import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "./supabase";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface SkillifyAuth {
  user: User;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
}
export const AuthContext = createContext<SkillifyAuth | undefined>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const { status, data: session } = useSession();

  const userSync = async (user) => {
    const userId = uuidv4();
    const nickname = user.displayName ?? "";
    const email = user.email;

    const { error } = await supabase
      .from("users")
      .upsert(
        {
          id: userId,
          name: nickname,
          email: email,
          last_seen: new Date().toISOString(),
        },
        {
          onConflict: "email", // Use email as the conflict target
          ignoreDuplicates: false, // Update on conflict
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Error syncing user:", error);
      return;
    }
  };

  useEffect(() => {
    if (session?.user) {
      setUser({
        uid: session?.uid,
        email: session?.user?.email,
        displayName: session?.user?.name,
        photoURL: session?.user?.image,
      });
      userSync(session?.user);
    }
  }, [session, status]);

  const signInSkillify = () => {
    signIn("google", { callbackUrl: "/studentPortal" });
  };

  const signOutSkillify = () => {
    setUser(undefined);
    signOut({ callbackUrl: "/welcome" });
  };

  const value = {
    user: user,
    loading: status === "loading",
    signIn: signInSkillify,
    signOut: signOutSkillify,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
