import React from "react";

export default function Welcome() {
  return (
    <div className="space-y-2 md:space-y-10">
      <h1 className="mt-4 text-lg font-bold text-center md:text-3xl text-murkrow">
        Welcome to Skillify Coding Academy!
      </h1>
      <div className="flex flex-col items-center md:flex-row h-80 md:h-full">
        <div className="flex flex-col p-6 mt-4 space-y-4 text-sm rounded-lg md:space-y-8 md:text-base text-murkrow bg-mewtwo md:mt-0">
          <p>
            Your free plan includes limited access to lessons, quizzes, and
            assignments from our beginner and advanced coding courses.
          </p>
          <p>
            <span className="font-bold text-murkrow">BONUS:</span> Complete your
            first website assignment and get personalized feedback from a
            Skillify coach.
          </p>
        </div>
        <img
          className="md:w-[475px] md:visible invisible"
          src="/images/freemium/welcomeModal.svg"
        ></img>
      </div>
    </div>
  );
}
