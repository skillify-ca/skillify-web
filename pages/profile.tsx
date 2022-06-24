import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
  UserProfileData,
} from "../graphql/fetchUserProfile";
import { useAuth } from "../lib/authContext";
import { format } from "date-fns";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
  UserGoalsData,
} from "../graphql/fetchUserGoals";
import GoalsSection from "../components/coding/GoalsSection";

export default function Profile(props) {
  const { user } = useAuth();

  const { loading: userProfileLoading } =
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        setUserProfileData({
          typeName: data.users[0].__typename,
          createdAt: data.users[0].created_at,
          email: data.users[0].email,
          lastSeen: data.users[0].last_seen,
          name: data.users[0].name,
          profileImage: data.users[0].profile_image,
        });
      },
    });

  const { loading: userGoalsLoading } = useQuery<FetchUserGoalsDataResponse>(
    FETCH_USER_GOALS,
    {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data: FetchUserGoalsDataResponse) => {
        setUserGoals(
          data.user_goals.map((it) => {
            return {
              __typename: it.__typename,
              createdAt: it.createdAt,
              goalName: it.goalName,
              id: it.id,
              isActive: it.isActive,
              updatedAt: it.updatedAt,
              userId: it.userId,
            };
          })
        );
      },
    }
  );

  const [userProfileData, setUserProfileData] =
    useState<UserProfileData>(Object);

  const [userGoals, setUserGoals] = useState<UserGoalsData[]>([]);

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div className="flex items-center justify-between">
        {userProfileData && (
          <h1 className="text-3xl font-bold">{userProfileData.name}</h1>
        )}
        <div className="w-32 text-center sm:justify-end px-2 py-1 text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 hover:border-charmander hover:text-charmander dark:hover:bg-gray-800">
          Edit
        </div>
      </div>
      {userProfileLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-8">
          <img
            className="w-32 rounded-full"
            src={userProfileData.profileImage}
          />
          <div className="col-span-2 mt-2">
            <p className="text-lg font-bold"></p>
            <p className="text-base text-gray-400">{userProfileData.name}</p>
            <p className="text-base text-gray-400">{userProfileData.email}</p>
            <div className="mt-4">
              <img
                className="inline"
                src="/images/profile/clock-solid-1.svg"
              ></img>
              <span className="ml-2 text-base">
                {userProfileData.createdAt
                  ? "Joined " +
                    format(new Date(userProfileData.createdAt), "MMMM yyyy")
                  : userProfileData.createdAt}
              </span>
            </div>
          </div>
        </div>
      )}

      <h2 className="mt-14 mb-9 font-bold text-lg">Goals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 mb-16">
        {userGoalsLoading ? (
          <div>Loading...</div>
        ) : (
          userGoals.map((it) => {
            return (
              <div className="text-white bg-murkrow text-center rounded-full mx-5 py-2 mb-5">
                {it.goalName}
              </div>
            );
          })
        )}
      </div>
      <GoalsSection user={user} />
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
