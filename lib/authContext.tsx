import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { upsertUserQuery } from "../graphql/studentPortal/users/initializeUser";
import { auth } from "./firebase";

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface SkillifyAuth {
  user: User;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
  signInWithGoogle: (credentialResponse) => void;
}
export const AuthContext = createContext<SkillifyAuth>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

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

  const signIn = async () => {
    setLoading(true);

    //

    await signInWithRedirect(auth, provider);
    setLoading(false);
  };

  const signInWithGoogle = async (credentialResponse) => {
    setLoading(true);
    console.log(credentialResponse);
    await signInWithRedirect(auth, provider);
    // auth.signInWithCredential(credentialResponse);
  };

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        userSync(user);
        router.push("/studentPortal");
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signIn,
    signOut,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
