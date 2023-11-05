import React from "react";
import { UserProfileData } from "../../../graphql/studentPortal/profile/fetchUserProfile";

import Link from "next/link";
import BadgesDisplayedComponent from "./BadgesDisplayedComponent";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
  isEditable: boolean;
};

export default function UserProfileSection({
  userProfileData,
  userBadgeCount,
  totalBadgeCount,
  isEditable,
}: UserProfileSectionProps) {
  return (
    <div className="grid items-center grid-cols-4 col-span-5 p-4 bg-backgroundSecondary rounded-xl md:grid-cols-8">
      <Link href="/studentPortal/profile/edit">
        <div className={`relative ${isEditable ? "cursor-pointer group" : ""}`}>
          {isEditable && (
            <div className="absolute z-10 flex items-center justify-center w-32 h-32 rounded-full opacity-0 bg-black-500 bg-opacity-40 group-hover:opacity-100">
              <p className="font-bold text-white">EDIT</p>
            </div>
          )}
          <img
            className="z-0 mr-2 rounded-full shadow border-brandPrimary w-36 h-36 group-hover:opacity-40"
            src={
              userProfileData.profileImage ?? "/images/profile/user-avatar.png"
            }
          />
        </div>
      </Link>
      <div className="col-span-3 ml-2">
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
