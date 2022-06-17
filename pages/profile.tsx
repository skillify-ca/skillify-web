import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { FETCH_CODING_BADGES } from "../graphql/coding/profile/fetchCodingBadges";
import {
  badgesToInitialize,
  INIT_CODING_BADGES,
} from "../graphql/coding/profile/initCodingBadges";
import { FETCH_USERS } from "../graphql/fetchUsers";
import { useAuth } from "../lib/authContext";

export default function Profile(props) {
  const { user } = useAuth();

  // Fetch badge data for the user and whether the badge is locked or not
  const { data: badgeData } = useQuery(FETCH_CODING_BADGES, {
    variables: {
      userId: user.uid,
    },
  });

  const [initBadges, initBadgesMetadata] = useMutation(INIT_CODING_BADGES);

  useEffect(() => {
    // TODO is there a better way to initialize the user table instead of doing it every time this page is loaded?
    if (user) {
      // Initialize user with badge data.
      initBadges({
        variables: {
          objects: badgesToInitialize(user),
        },
        refetchQueries: [
          {
            query: FETCH_CODING_BADGES,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    }
  }, [user]);

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Account Overview</h1>
        <div className="w-32 px-2 py-1 text-center text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer sm:justify-end hover:bg-gray-50 hover:border-charmander hover:text-charmander dark:hover:bg-gray-800">
          Edit
        </div>
      </div>
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-8">
        <img
          className="w-32 rounded-full"
          src="https://avatar.skype.com/v1/avatars/live:645609fa725fb57c/public?size=l"
        />
        <div className="col-span-2 mt-2">
          <p className="text-lg font-bold">User's name</p>
          <p className="text-base text-gray-400">username</p>
          <p className="text-base text-gray-400">user@hotmail.com</p>
          <div className="mt-4">
            <img
              className="inline"
              src="/images/profile/clock-solid-1.svg"
            ></img>
            <span className="ml-2 text-base">Joined January 2022</span>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mt-14 mb-9">Goals</h2>
      <div className="grid grid-cols-1 mb-16 sm:grid-cols-3">
        <div className="py-2 mx-5 mb-5 text-center text-white rounded-full bg-murkrow">
          Get A Tech Job
        </div>
        <div className="py-2 mx-5 mb-5 text-center text-white rounded-full bg-murkrow">
          Learn A New Skill
        </div>
      </div>
      <h2 className="text-lg font-bold mb-9">Achievements</h2>
      {/* Map through badge data */}
      {badgeData.user_coding_badges.map((badge) => {
        return (
          <div>
            <p>{badge.coding_badge.title}</p>
            <p>{badge.coding_badge.description}</p>
            <p>{badge.coding_badge.unit}</p>
          </div>
        );
      })}
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
          Level 1 - HTML
        </div>
      </div>
      <div className="grid grid-cols-1 mb-16 sm:grid-cols-3 mt-7">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="mb-8 text-base sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="mb-8 text-base sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="mb-8 text-base sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
          Level 2 - CSS
        </div>
      </div>
      <div className="grid grid-cols-1 mb-16 sm:grid-cols-3 mt-7">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="mb-8 text-base sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="mb-8 text-base sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="mb-8 text-base sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="py-4 text-center text-gray-400 bg-gray-200 rounded-full">
          Level 3 - JS
        </div>
      </div>
      <div className="grid grid-cols-1 mb-16 sm:grid-cols-3 mt-7">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="mb-8 text-base sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="mb-8 text-base sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-8 bg-gray-200 rounded-full w-36 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="mb-8 text-base sm:mb-0">Assignment</p>
        </div>
      </div>
    </div>
  );
}
