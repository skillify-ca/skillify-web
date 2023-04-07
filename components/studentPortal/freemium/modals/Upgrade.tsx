import React from "react";
import { Button } from "../../../ui/Button";

export default function Upgrade() {
  return (
    <div className="flex flex-col text-white items-center justify-center max-h-80 md:mt-20">
      <h1 className="flex font-bold text-base md:text-2xl max-w-xl text-center">
        Upgrade your plan at any time to unlock premium features.
      </h1>
      <img className="w-full" src="/images/freemium/gatedContentRow.svg" />
      <p className="max-w-xl md:text-lg text-xs">
        Locked features are part of the full (paid) package, which you can
        easily transition into at any point during your free trial. Simply book
        a call to apply!
      </p>
      <a className="p-8" href="https://www.joinskillify.com/call">
        <Button
          label="Apply Now!"
          onClick={(e) =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        />
      </a>
    </div>
  );
}
