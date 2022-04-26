import { getRedirectResult } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export default function SignInPage() {
  const { signIn, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const magic = new Magic("YOUR_LIVE_PUBLISHABLE_API_KEY");
  useEffect(() => {
    async function checkAuth() {
      const result = await getRedirectResult(auth);
      if (result) {
        router.push("/studentPortal/intro");
      }
    }
    checkAuth();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = new FormData(e.target).get("email");

    const redirectURI = `${window.location.origin}/callback`; // 👈 This will be our callback URI

    if (email) {
      /* One-liner login 🤯 */

      await magic.auth.loginWithMagicLink({ email, redirectURI }); // 👈 Notice the additional parameter!
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <img
            className="w-16 h-16"
            src="/images/logo.svg"
            alt="Skillify Logo"
          />
          <p className="text-4xl font-bold text-center"> Welcome to Skillify</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-12 lg:flex-row-reverse">
          <div className="w-1/2">
            <img className="" src="/images/signIn.png" />
          </div>
          <div className="flex flex-col items-center justify-between gap-y-8">
            <div className="">
              <p className="text-center text-md">
                {" "}
                <p className="text-xl font-bold">
                  {" "}
                  Skillify makes online learning fun and engaging.{" "}
                </p>{" "}
                <p>Feel more confident with code and get hired in tech</p>
              </p>
            </div>
            <Input value={email} setValue={setEmail} />
            <Button label="Log In" />
          </div>
        </div>
      </div>
    </div>
  );
}
