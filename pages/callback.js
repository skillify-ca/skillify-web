import { useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";

const Callback = () => {
  const [user, setUser] = useContext(UserContext);

  // The redirect contains a `provider` query param if the user is logging in with a social provider
  useEffect(() => {
    finishSocialLogin();
  }, []);

  // `getRedirectResult()` returns an object with user data from Magic and the social provider
  const finishSocialLogin = async () => {
    let result = await magic.oauth.getRedirectResult();
    authenticateWithServer(result.magic.idToken);
  };

  // Send token to server to validate
  const authenticateWithServer = async (didToken) => {
    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + didToken,
      },
    });

    if (res.status === 200) {
      // Set the UserContext to the now logged in user
      let userMetadata = await magic.user.getMetadata();
      await setUser(userMetadata);
      Router.push("/profile");
    }
  };

  return "Loading ...";
};

export default Callback;
