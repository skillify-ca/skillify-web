import React from "react";
export default function PremiumFeatures() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Skillify Coding Academy!
      </h1>
      <div className="">
        <div className="flex flex-column">
          <p className="">
            Your free trial includes access to lessons, quizzes, and assignments
            from our beginner and advanced coding courses.
          </p>
          <p>
            BONUS: Submit one intro assignment and get personalized feedback
            from one of our coaches.
          </p>
        </div>
        <img src="/images/freemium/welcomeModal.svg"></img>
      </div>
    </div>
  );
}
