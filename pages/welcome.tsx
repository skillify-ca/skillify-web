import React, { useEffect, useRef, useState } from "react";
import SignInPage from "../components/SignInPage";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen overflow-auto bg-scroll">
      <div className="flex flex-col items-center justify-center">
        <SignInPage />
      </div>
    </div>
  );
};

export default Welcome;

Welcome.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
