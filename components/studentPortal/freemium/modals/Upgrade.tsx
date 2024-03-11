import React from "react";

export default function Upgrade() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 space-y-2 text-white max-h-80">
      <h1 className="flex max-w-xl text-base font-bold text-center md:text-3xl">
        Upgrade your plan at any time to unlock premium features.
      </h1>
      <img className="w-full" src="/images/freemium/gatedContentRow.svg" />
      <ul className="flex flex-col max-w-3xl p-2 text-xs rounded-lg md:text-lg bg-rattata/20">
        <li>
          Locked features are part of the premium plan. (eg. Community and
          Coaching)
        </li>
        <li>
          Upgrade your free trial to meet with our coaches and instructors.
        </li>
        <li>
          Click on the link below to schedule an introductory call to learn
          more.
        </li>
      </ul>
      <p className="text-xs font-bold md:text-lg hover:scale-110 hover:text-pikachu-500">
        <a
          target="_blank"
          href="http://www.joinskillify.com/call"
          rel="noreferrer"
        >
          www.joinskillify.com/call
        </a>
      </p>
    </div>
  );
}
