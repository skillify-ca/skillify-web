import React from "react";
import { useAuth } from "../../../lib/authContext";
import {
  calculateRemainingTrialDays,
  elapsedDays,
  TOTAL_TRIAL_DAYS,
} from "../../../pages/api/studentPortal/freemium/helpers";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/Avatar";
import ProgressComponent from "../../ui/ProgressComponent";

export type UserProfileSectionProps = {
  createdAt: Date;
};

export default function UserProfileSection({
  createdAt,
}: UserProfileSectionProps) {
  const { user } = useAuth();
  return (
    //Full width then restrict in page
    <div className="flex flex-col w-full bg-backgroundPrimary text-textPrimary">
      <div className="grid">
        {user && (
          <div className="flex items-center p-4">
            <Avatar className="bg-slate-200">
              <AvatarImage src={user.photoURL} alt="user avatar" />
              <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="w-full ml-4">
              <p className="text-lg font-bold">{user.displayName}</p>
              <p className="font-medium text-gray-500 capitalize">
                {"Prospective Student"}{" "}
              </p>
              <ProgressComponent
                currentValue={elapsedDays(createdAt)}
                totalValue={TOTAL_TRIAL_DAYS}
              />
              <p className="mt-1 text-xs text-gray-500">
                {calculateRemainingTrialDays(createdAt)}/{TOTAL_TRIAL_DAYS} days
                remaining
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
