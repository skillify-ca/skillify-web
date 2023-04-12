import React from "react";
import { useAuth } from "../../../lib/authContext";
import {
  TOTAL_TRIAL_DAYS,
  elapsedDays,
  trialDaysRemaining,
} from "../../../pages/api/studentPortal/freemium/helpers";
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
            <img
              className="rounded-full h-16 w-16 hidden md:block"
              src={user.photoURL}
              alt=""
            />
            <div className="w-full ml-4">
              <p className="font-bold text-lg">{user.displayName}</p>
              <p className="font-medium capitalize text-gray-500">
                {"Prospective Student"}{" "}
              </p>
              <ProgressComponent
                currentValue={elapsedDays(createdAt, TOTAL_TRIAL_DAYS)}
                totalValue={TOTAL_TRIAL_DAYS}
              />
              <p className="text-xs mt-1 text-gray-500">
                {trialDaysRemaining(createdAt, TOTAL_TRIAL_DAYS)}/
                {TOTAL_TRIAL_DAYS} days remaining
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
