import React from "react";
export default function Welcome() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Skillify Coding Academy!
      </h1>
      <div className="flex">
        <div className="flex flex-col p-32 space-y-8">
          <p className="">
            Your free trial includes access to lessons, quizzes, and assignments
            from our beginner and advanced coding courses.
          </p>
          <p>
            <span className="font-bold">BONUS:</span> Submit one intro
            assignment and get personalized feedback from one of our coaches.
          </p>
        </div>
        <img src="/images/freemium/welcomeModal.svg"></img>
      </div>
    </div>
  );
}
