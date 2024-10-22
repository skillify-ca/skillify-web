import React from "react";
import { useAuth } from "../../../lib/authContext";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/Avatar";

export default function PaidSidebarHeader({ userProfileImage, userRole }) {
  const { user } = useAuth();
  return (
    <div className="flex p-4">
      <div className="flex flex-col w-full border-b-2 bg-backgroundPrimary text-textPrimary">
        <div className="grid">
          {user && (
            <div className="flex flex-col items-center w-full gap-4 p-4">
              <Avatar className="bg-slate-200">
                <AvatarImage src={user.photoURL} alt="user avatar" />
                <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="w-full ml-4">
                <p className="text-lg font-bold">{user.displayName}</p>
                <p className="font-medium text-gray-500 capitalize">
                  {userRole}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
