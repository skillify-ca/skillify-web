import { getRedirectResult } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuth } from "../lib/authContext";
import { useMagic } from "../lib/magicContext";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export default function SignInPage() {
  const { signIn, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  // const magic = new Magic("YOUR_LIVE_PUBLISHABLE_API_KEY");
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

    signIn(email);
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
              {" "}
              <p className="text-xl font-bold">
                {" "}
                Skillify makes online learning fun and engaging.{" "}
              </p>{" "}
              <p className="text-center text-md">
                Feel more confident with code and get hired in tech
              </p>
            </div>
            <form>
              <Input
                value={email}
                setValue={setEmail}
                placeholder="Enter Email"
              />
              <Button label="Log In" onClick={handleLogin} />
            </form>
            <button
              onClick={() => signIn()}
              className="flex items-center justify-between w-64 p-4 bg-white border border-black shadow-lg rounded-2xl hover:bg-gray-100"
            >
              Sign in with Google
              <img className="w-8" src="/images/googleLogo.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
