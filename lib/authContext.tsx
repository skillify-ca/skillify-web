import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { upsertUserQuery } from "../graphql/studentPortal/users/initializeUser";

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
    const userId = user.uid;
    const nickname = user.displayName;
    const email = user.email;
    const url = "https://talented-duckling-40.hasura.app/v1/graphql";

    // TODO if user was already in the user table, then update the last seen column
    // If the user was newly added to the user table, then initialize their skills, and badges
    const graphqlReq = {
      query: upsertUserQuery,
      variables: { userId: userId, name: nickname, email: email },
    };

    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify(graphqlReq),
    });
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

  const signInSkillify = async () => {
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
