import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk"
import { OAuthExtension } from "@magic-ext/oauth";

export const MagicContext = createContext(null);

export const useMagic = () => {
  return useContext(MagicContext);
};

export const MagicProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  let magic;

  const signIn = async () => {
    setLoading(true);
    const email = new FormData(e.target).get('email');
    if (email) {
      try {
        const user = await magic.auth.loginWithMagicLink({ email });
        console.log("user", user);
        setUser(email)
        router.push("/studentPortal/intro")
      } catch (err) {
        setUser(null)
        throw new Error("Email login failed")
      }
    }
    setLoading(false);
  };

  const signOut = async () => {
    await magic.user.logout();
    setUser(null);
    router.push("/");
  };

  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser(email);
        getToken();
      }
    } catch (err) {
      throw new Error("User is not logged in");
    }
  };
  
  const getToken = async () => {
    try {
      return await magic.user.getIdToken();
    } catch (err) {
      throw new Error("Authenticate current session failed");
    }
  };

  const oauthLogin = async (e) => {
    e.preventDefault();

    // Start the Google OAuth 2.0 flow!
    await magic.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: `${window.location.origin}/oauth`,
    });
  };

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY);
    magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY, {
      extensions: [new OAuthExtension()],
    });

    const render = async () => {
      console.log("A");
      if (window.location.pathname === "/oauth") {
      console.log("B");

        try {
          const result = await magic.oauth.getRedirectResult();
          const profile = JSON.stringify(result.oauth.userInfo, undefined, 2);
          if (profile.email) {
            setUser(profile.email);
            router.push("/");
          }
        } catch {
          window.location.href = window.location.origin;
          throw new Error("Oauth login failed");
        }
      }
      console.log("C");

      checkUserLoggedIn();
      console.log("D");

    };
    render();
  }, []);


  const value = {
    user,
    magic,
    loading,
    signIn,
    signOut,
    oauthLogin
  };

  return (
    <MagicContext.Provider value={value}>
      {!loading && children}
    </MagicContext.Provider>
  );
};
