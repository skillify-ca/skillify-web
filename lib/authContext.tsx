import { signIn, signOut, useSession } from "next-auth/react";
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
  const { status, data: session } = useSession();

  const userSync = async (user) => {
      const nickname = user.displayName ?? "";
      const email = user.email;

      // Check if user already exists
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .maybeSingle();

      if (fetchError) {
        console.error("Error fetching user:", fetchError);
        return;
      }

      if (existingUser) {
        // User exists - just update last_seen
        const { error: updateError } = await supabase
          .from("users")
          .update({
            last_seen: new Date().toISOString(),
          })
          .eq("id", existingUser.id);

        if (updateError) {
          console.error("Error updating user:", updateError);
          return;
        }
      } else {
        // User doesn't exist - create new user
        const userId = uuidv4();
        const { error: insertError } = await supabase
          .from("users")
          .insert({
            id: userId,
            name: nickname,
            email: email,
            last_seen: new Date().toISOString(),
          });

        if (insertError) {
          console.error("Error inserting user:", insertError);
          return;
        }

         setUser({
          uid: userId,
          email: session?.user?.email,
          displayName: session?.user?.name,
          photoURL: session?.user?.image,
        });
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
