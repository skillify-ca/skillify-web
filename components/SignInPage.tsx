import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/client";

export default function SignInPage() {
  const [session, loading] = useSession();

  return (
    <div className="flex flex-col gap-16 items-center justify-center">
      <img className="block h-16 w-16"
    src="/images/logo.png"
    alt="Math Champ Logo"
  />
     <button onClick={() => signIn("google")}>Sign in with Google</button>
</div>
  );
}
