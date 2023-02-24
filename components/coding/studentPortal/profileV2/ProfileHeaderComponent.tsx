import React from "react";

import { UserProfileData } from "../../../../graphql/fetchUserProfile";
import BadgesDisplayedComponent from "./BadgesDisplayedComponent";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
};

export default function UserProfileSection({
  userProfileData,
  userBadgeCount,
  totalBadgeCount,
}: UserProfileSectionProps) {
  return (
    <div className="grid items-center grid-cols-4 col-span-5 md:grid-cols-8">
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
  );
}
