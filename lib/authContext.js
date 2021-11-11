import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/router";
import { upsertUserQuery } from "../graphql/initializeUser";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
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
    await signInWithRedirect(auth, provider);
    setLoading(false);
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
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
