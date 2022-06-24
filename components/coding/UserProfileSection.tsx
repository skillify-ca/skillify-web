import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import React, { useState } from "react";

import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
  UserProfileData,
} from "../../graphql/fetchUserProfile";

export type UserProfileSectionProps = {
  user: any;
};

export default function UserProfileSection({ user }: UserProfileSectionProps) {
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

  const [userProfileData, setUserProfileData] =
    useState<UserProfileData>(Object);

  return (
    <>
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
    </>
  );
}
