import { useQuery } from "@apollo/client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../../graphql/fetchUserBadgesCount";
import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
} from "../../../graphql/fetchUserProfile";
import {
  profileSelector,
  setUserBadgeCount,
  setUserProfile,
} from "../../../redux/profileSlice";
import BadgesDisplayedComponent from "./BadgesDisplayedComponent";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  userId: string;
};

export default function UserProfileSection({
  userId,
}: UserProfileSectionProps) {
  const dispatch = useDispatch();
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);

  const { loading: userProfileLoading } =
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.users.length > 0) {
          dispatch(
            setUserProfile({
              typeName: data.users[0].__typename,
              createdAt: data.users[0].created_at,
              email: data.users[0].email,
              lastSeen: data.users[0].last_seen,
              name: data.users[0].name,
              profileImage: data.users[0].profile_image,
            })
          );
        }
      },
    });
  const { loading: userBadgeCountLoading } =
    useQuery<FetchUserBadgesCountResponse>(FETCH_USER_BADGES_COUNT, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          dispatch(
            setUserBadgeCount(data.user_coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

  return (
    <>
      {userProfileLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid items-center  grid-cols-4 col-span-5  md:grid-cols-8">
          <img
            className="mt-6 mr-2 rounded-full w-36"
            src={userProfileData.profileImage}
          />
          <div className="col-span-3 mt-2 ml-2">
            <h1 className="mt-2 text-2xl font-bold md:text-3xl ">
              {userProfileData.name}
            </h1>
            <div className="flex ">
              <JoinedDateComponent
                createdAt={userProfileData.createdAt}
                textSize={"large"}
              />
            </div>
            <BadgesDisplayedComponent
              earnedBadges={userBadgeCount}
              totalBadges={totalBadgeCount}
              textSize={"large"}
            />
          </div>
        </div>
      )}
    </>
  );
}
