import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import React, { useState } from "react";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../graphql/fetchUserBadgesCount";

import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
  UserProfileData,
} from "../../graphql/fetchUserProfile";

export type UserProfileSectionProps = {
  user: any;
};

export default function UserProfileSection({ user }: UserProfileSectionProps) {
  const [userProfileData, setUserProfileData] =
    useState<UserProfileData>(Object);

  const [userBadgeCount, setUserBadgeCount] = useState<number>(0);

  const { loading: userProfileLoading } =
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        if (data.users.length > 0) {
          setUserProfileData({
            typeName: data.users[0].__typename,
            createdAt: data.users[0].created_at,
            email: data.users[0].email,
            lastSeen: data.users[0].last_seen,
            name: data.users[0].name,
            profileImage: data.users[0].profile_image,
          });
        }
      },
    });
  const { loading: userBadgeCountLoading } =
    useQuery<FetchUserBadgesCountResponse>(FETCH_USER_BADGES_COUNT, {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          setUserBadgeCount(data.user_coding_badges_aggregate.aggregate.count);
        }
      },
    });

  return (
    <>
      <div className="flex items-center justify-between">
        {userProfileData && (
          <h1 className="text-3xl font-bold">{userProfileData.name}</h1>
        )}
      </div>
      {userProfileLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-8">
          <img
            className="w-32 rounded-full"
            src={userProfileData.profileImage}
          />
          <div className="col-span-2 mt-2 ml-2">
            <div className="flex mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-charmander"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="ml-2 text-lg">
                {userProfileData.createdAt
                  ? "Joined " +
                    format(new Date(userProfileData.createdAt), "MMMM yyyy")
                  : userProfileData.createdAt}
              </span>
            </div>
            <p className="flex text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-rattata"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a4.49 4.49 0 00-3.397 1.549 4.49 4.49 0 00-3.497 1.307 4.49 4.49 0 00-1.307 3.497A4.49 4.49 0 002.25 12c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 001.307 3.498A4.49 4.49 0 008.603 20.2 4.49 4.49 0 0012 21.75a4.49 4.49 0 003.397-1.549 4.491 4.491 0 003.497-1.307 4.491 4.491 0 001.307-3.497A4.49 4.49 0 0021.75 12a4.49 4.49 0 00-1.548-3.397 4.491 4.491 0 00-1.307-3.497 4.49 4.49 0 00-3.498-1.307A4.49 4.49 0 0012 2.25zm3.059 8.062a.75.75 0 10-.993-1.124 12.785 12.785 0 00-3.209 4.358L9.53 12.22a.75.75 0 00-1.06 1.06l2.135 2.136a.75.75 0 001.24-.289 11.264 11.264 0 013.214-4.815z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="ml-2">{userBadgeCount} Unlocked Badges</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
