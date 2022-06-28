import React, { useState } from "react";

import { useAuth } from "../lib/authContext";

import ProfileGoalsSection from "../components/coding/ProfileGoalsSection";
import UserProfileSection from "../components/coding/UserProfileSection";

export default function Profile(props) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <UserProfileSection user={user} />

      <h2 className="mt-14 mb-9 font-bold text-lg">Goals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 mb-16">
        <ProfileGoalsSection user={user} />
      </div>

      <h2 className="font-bold text-lg mb-9">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 1 - HTML
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 2 - CSS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 3 - JS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
    </div>
  );
}

Profile.auth = true;
