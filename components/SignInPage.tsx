import Link from "next/link";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/client";
import DiagnosticNavbar from "./DiagnosticNavbar";

export default function SignInPage() {
  const [session, loading] = useSession();

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mb-4 items-center gap-4 mt-8">
          <img
            className="h-16 w-16"
            src="/images/logo.png"
            alt="Math Champ Logo"
          />
          <p className="font-bold text-4xl"> Welcome to Math Champ</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 mt-12">
          <div className="flex flex-col  items-center gap-y-8 justify-between w-1/3">
            <div className="">
              <p className="text-center text-md">
                {" "}
                <p className="text-xl font-bold">
                  {" "}
                  Math Champ makes math fun and engaging.{" "}
                </p>{" "}
                Help your students feel more confident with numbers and
                questions aligned to the Canadian curriculum{" "}
              </p>
            </div>
            <button
              onClick={() => signIn("google")}
              className="bg-white border border-black rounded-2xl p-4 w-64 hover:bg-gray-100 shadow-lg"
            >
              Sign in with Google
            </button>
          </div>
          <div className="w-1/2">
            <img className="" src="/images/signIn.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
