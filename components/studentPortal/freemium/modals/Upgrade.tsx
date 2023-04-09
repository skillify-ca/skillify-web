import React from "react";

export default function Upgrade() {
  return (
    <div className="flex flex-col text-white items-center justify-center max-h-80 space-y-2 md:mt-10 mt-8">
      <h1 className="flex font-bold text-base md:text-3xl max-w-xl text-center">
        Upgrade your plan at any time to unlock premium features.
      </h1>
      <img className="w-full" src="/images/freemium/gatedContentRow.svg" />
      <p className="max-w-3xl md:text-lg text-xs bg-rattata/20 rounded-lg p-6">
        Locked features are part of the premium plan, which you can easily
        upgrade to at any point in your free trial by clicking on the following
        link to book a call:{" "}
        <a href="http://www.joinskillify.com/call">
          {" "}
          www.joinskillify.com/call
        </a>
      </p>
    </div>
  );
}
