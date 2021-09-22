import React from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
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
            <button
              onClick={() =>
                signIn("google", { callbackUrl: "/practice" })
              }
              className="flex justify-between items-center bg-white border border-black rounded-2xl p-4 w-64 hover:bg-gray-100 shadow-lg"
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
