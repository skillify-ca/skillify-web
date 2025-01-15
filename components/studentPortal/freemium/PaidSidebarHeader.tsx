import React from "react";
import { useAuth } from "../../../lib/authContext";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/Avatar";

export default function PaidSidebarHeader({ userProfileImage, userRole }) {
  const { user } = useAuth();
  return (
    <div className="w-full border-b-2 bg-backgroundPrimary text-textPrimary">
      {user && (
        <div className="flex flex-col w-full p-4 md:flex-row">
          <Avatar className="w-16 h-16 bg-slate-200">
            <AvatarImage src={userProfileImage} alt="user avatar" />
            <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="px-4">
            <p className="text-lg font-bold">{user.displayName}</p>
            <p className="font-medium text-gray-500 capitalize">{userRole}</p>
          </div>
        </div>
      )}
    </div>
  );
}
