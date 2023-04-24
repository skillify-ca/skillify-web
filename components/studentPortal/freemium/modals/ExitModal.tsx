import router from "next/router";
import React from "react";
import { Button } from "../../../ui/Button";

const handlePlansSignUp = () => {
  router.push("/plans");
};

export default function ExitModal() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 h-full">
      <div className="text-white text-center text-lg md:text-3xl font-bold my-10 md:my-0">
        <h1>Sorry, your free trial has ended.</h1>
        <h1>Upgrade your plan to continue learning!</h1>
      </div>
      <div className="flex justify-center items-center">
        <Button onClick={handlePlansSignUp} label={"View Plans"} />
      </div>
    </div>
  );
}
