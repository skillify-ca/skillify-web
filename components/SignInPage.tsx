import { getRedirectResult } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuth } from "../lib/authContext";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function SignInPage() {
  const { signIn, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const result = await getRedirectResult(auth);
      if (result) {
        router.push("/studentPortal/intro");
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <div className="z-10 bg-white shadow-lg">
        <img src="/images/logo.svg" className="w-40 p-4" />
      </div>
      <div className="z-0 grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full h-0 px-16 pt-16 -mt-16 sm:pt-64 sm:h-screen bg-signInBackground">
          <h2 className="text-2xl font-bold text-white">
            Skillify is a coding bootcamp that specializes in mobile and web
            development.
          </h2>
        </div>
        <div className="flex flex-col gap-8 p-8 border-l-2 sm:p-24">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-charmander">
              Get started with Skillify
            </h2>
            <p className="">Let's start learning</p>
          </div>
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
  );
}
