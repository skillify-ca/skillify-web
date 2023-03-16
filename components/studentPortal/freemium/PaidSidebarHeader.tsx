import React from "react";
import { useAuth } from "../../../lib/authContext";

export default function PaidSidebarHeader() {
  const { user } = useAuth();
  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full bg-backgroundPrimary text-textPrimary">
      <div className="grid">
        {user && (
          <div className="flex items-center p-4">
            <img
              className="rounded-full h-16 w-16 hidden md:block"
              src={user.photoURL}
              alt=""
            />
            <div className="w-full ml-4">
              <p className="font-bold text-lg">{user.displayName}</p>
              <p className="font-medium capitalize text-gray-500">
                {"Student"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
