import React from "react";
import { elapsedDays } from "../../../pages/api/studentPortal/freemium/elapsedDays";
import { trialDaysRemaining } from "../../../pages/api/studentPortal/freemium/trialDaysRemaining";
import { Theme } from "../../../redux/themeSlice";
import { Button } from "../../ui/Button";
import ProgressComponent from "../../ui/ProgressComponent";

export type FreemiumHeaderProps = {
  handleMenuIconClick: () => void;
  handleToggleClick: () => void;
  theme: Theme;
  createdAt: Date;
};
export const FreemiumHeader = ({
  handleToggleClick,
  theme = Theme.DEFAULT,
  createdAt,
}: FreemiumHeaderProps) => {
  const TOTAL_TRIAL_DAYS = 30;

  return (
    <div className="grid w-full h-16 grid-cols-6 border-b-2 bg-backgroundPrimary">
      <div className="col-span-2 flex items-center pl-4">
        {theme === Theme.DEFAULT ? (
          <img className="w-48 h-8 " src="/images/logo.svg" />
        ) : theme === Theme.DRACULA ? (
          <img className="w-48 h-8" src="/images/logo-dark.svg" />
        ) : null}
      </div>
      <div className="col-span-3 flex items-center justify-end space-x-6 pr-2">
        <div className="hidden lg:block">
          <p className="font-bold text-textPrimary">
            Enjoying the Skillify Experience?
          </p>
          <ProgressComponent
            currentValue={elapsedDays(createdAt, TOTAL_TRIAL_DAYS)}
            totalValue={TOTAL_TRIAL_DAYS}
          />
          <p className="text-xs mt-1 text-gray-500">
            {trialDaysRemaining(createdAt, TOTAL_TRIAL_DAYS)}/{TOTAL_TRIAL_DAYS}{" "}
            days remaining
          </p>
        </div>
        <a href="https://www.joinskillify.com/call">
          <Button
            label="Apply Now!"
            onClick={(e) =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          />
        </a>
      </div>
      <div
        onClick={handleToggleClick}
        className="flex items-center justify-end pr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-textPrimary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
    </div>
  );
};
