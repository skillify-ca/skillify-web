import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import SignInPage from "../components/SignInPage";
import { useAuth } from "../lib/authContext";

const Welcome = () => {
  return (
    <div className="flex flex-col overflow-auto bg-scroll  heropattern-architect-blue-50 bg-blue-100 h-screen">
      <div className="p-4 flex flex-col items-center justify-center">
        <SignInPage />
      </div>
    </div>
  );
};

export default Welcome;
