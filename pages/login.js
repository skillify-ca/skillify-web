import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";
import SocialLogins from "../components/social-logins";

const Login = () => {
  const [user] = useContext(UserContext);

  // Redirec to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push("/profile");
  }, [user]);

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
    <div className="flex flex-col overflow-auto bg-scroll  heropattern-architect-blue-50 bg-blue-100 h-screen">
      <div className="p-4 flex flex-col items-center justify-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-8">
              <img
                className="h-16 w-16"
                src="/images/logo.png"
                alt="Math Champ Logo"
              />
              <p className="font-bold text-4xl text-center">
                {" "}
                Welcome to Math Champ
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 mt-12">
              <div className="w-1/2">
                <img className="" src="/images/signIn.png" />
              </div>
              <div className="flex flex-col items-center gap-y-8 justify-between">
                <div className="">
                  <p className="text-center text-md">
                    {" "}
                    <p className="text-xl font-bold">
                      {" "}
                      Math Champ makes math fun and engaging.{" "}
                    </p>{" "}
                    <p>
                      Help your students feel more confident with numbers and
                      questions aligned to the Canadian curriculum{" "}
                    </p>
                  </p>
                </div>
                <SocialLogins onSubmit={handleLoginWithSocial} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
