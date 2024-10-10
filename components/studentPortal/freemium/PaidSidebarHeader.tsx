import React from "react";
import { useAuth } from "../../../lib/authContext";

export default function PaidSidebarHeader({ userProfileImage, userRole }) {
  const { user } = useAuth();
  return (
    <div className="flex p-4">
      {user && (
        <img className="w-16 h-16 rounded-full" src={userProfileImage} alt="" />
      )}
      {user && (
        <div className="w-full">
          <p className="w-full ml-4 font-bold">{user.displayName}</p>
          <p className="ml-4 font-medium capitalize">{userRole}</p>
        </div>
      )}
    </div>
  );
}
