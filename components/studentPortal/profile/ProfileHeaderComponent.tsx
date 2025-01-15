import React from "react";
import { UserProfileData } from "../../../graphql/studentPortal/profile/fetchUserProfile";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/Avatar";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  userProfileData: UserProfileData;
  isEditable: boolean;
};

export default function UserProfileSection({
  userProfileData,
  isEditable,
}: UserProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 bg-backgroundSecondary rounded-xl ">
      <div className="flex items-center ">
        {isEditable ? (
          <Link href="/studentPortal/profile/edit" legacyBehavior>
            <Avatar className="w-16 h-16 border-2 bg-slate-300">
              <AvatarImage src={userProfileData.profileImage} />
              <AvatarFallback>{userProfileData.name.charAt(0)}</AvatarFallback>
            </Avatar>
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
        </div>
      </div>
      {userProfileData.currentFocus && (
        <div className="flex flex-col">
          <p className="font-bold">🧠 Current Focus</p>
          <p>{userProfileData.currentFocus}</p>
        </div>
      )}
    </div>
  );
}
