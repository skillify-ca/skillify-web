import React from "react";

export default function Welcome() {
  return (
    <div className="md:space-y-10 space-y-2">
      <h1 className="md:text-3xl text-lg font-bold text-center mt-4 text-murkrow">
        Welcome to Skillify Coding Academy!
      </h1>
      <div className="flex flex-col md:flex-row h-80 md:h-full items-center">
        <div className="flex flex-col space-y-4 md:space-y-8 text-sm md:text-base text-murkrow bg-mewtwo p-6 rounded-lg md:mt-0 mt-4">
          <p>
            Your free trial includes access to lessons, quizzes, and assignments
            from our beginner and advanced coding courses.
          </p>
          <p>
            <span className="font-bold text-murkrow">BONUS:</span> Submit one
            intro assignment and get personalized feedback from a Skillify
            coaches.
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
