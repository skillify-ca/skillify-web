import React from "react";
import { UserProfileData } from "../../../graphql/studentPortal/profile/fetchUserProfile";

import Link from "next/link";
import BadgesDisplayedComponent from "./BadgesDisplayedComponent";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  isEditable: boolean;
};

export default function UserProfileSection({
  userProfileData,
  userBadgeCount,
  isEditable,
}: UserProfileSectionProps) {
  return (
    <div className="flex items-center p-4 bg-backgroundSecondary rounded-xl ">
      {isEditable ? (
        <Link href="/studentPortal/profile/edit">
          <div className="w-32 h-32 overflow-hidden cursor-pointer group">
            <img
              className="z-0 object-cover w-full h-full rounded-full shadow border-brandPrimary group-hover:opacity-40"
              src={
                userProfileData.profileImage ??
                "/images/profile/user-avatar.png"
              }
            />
          </div>
        </Link>
      ) : (
        <div>
          <div className="w-32 h-32 overflow-hidden">
            <img
              className="z-0 object-cover w-full h-full rounded-full shadow border-brandPrimary"
              src={
                userProfileData.profileImage ??
                "/images/profile/user-avatar.png"
              }
            />
          </div>
        </div>
      )}
      <div className="ml-2 ">
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
          textSize={"large"}
        />
      </div>
    </div>
  );
}
