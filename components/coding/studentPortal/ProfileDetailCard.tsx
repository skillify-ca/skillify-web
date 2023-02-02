import { CodingBadge } from "../../../graphql/fetchUserProfileCard";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";
import React from "react";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: string;
  badges: number;
  currentBadge: CodingBadge;
  completedDate: string;
  completedGoal: string;
  totalBadgeCount: number;
};

function ProfileDetailCard({
  avatar,
  name,
  joinDate,
  badges,
  totalBadgeCount,
  currentBadge,
  completedGoal,
  completedDate,
}: ProfileDetailCard) {
  return (
    <div className="grid grid-cols-4 h-full w-full text-sm border-2 bg-slate-50 text-slate-800 border-slate-800 hover:bg-violet-100">
      <div className="flex ml-3 place-items-center col-span-4 mt-4">
        <img
          className="col-span-1 w-20 h-20 my-3 border-3 rounded-full border-slate-800 "
          src={avatar}
        />
        <div className="col-span-3 ml-2 items-center gap-1">
          <p className="font-bold"> {name}</p>

          <JoinedDateComponent
            user={name}
            textSize={"small"}
            createdAt={joinDate}
          />
          <BadgesDisplayedComponent
            earnedBadges={badges}
            textSize={"small"}
            totalBadges={totalBadgeCount}
          />
        </div>
      </div>
      <div className="ml-4 col-span-4 mb-4">
        <p className="font-bold">Current Focus</p>
        <div className="flex items-center p-1 gap-5">
          <img
            src={currentBadge?.image}
            className="col-span-1 items-center w-16 h-16 rounded-full"
          />
          <p className="col-span-3"> {currentBadge?.title}</p>
        </div>
        <p className="ml-2 font-bold">Last Goal</p>
        <div className="flex items-center p-1 gap-5">
          <div className="col-span-1 items-center">
            <svg
              className="rounded-full h-16 w-16 text-slate-100"
              fill="bg-slate-900"
              viewBox="0 0 24 24"
              stroke="currentColor"
              shapeRendering="geometricPrecision"
            >
              <circle cx="12" cy="12" r="16" strokeWidth="4" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontFamily="Poppins"
                fontSize="5"
                shapeRendering="geometricPrecision"
                textRendering="optimizeLegibility"
                imageRendering="optimizeQuality"
                fontWeight="100"
              >
                {completedDate}
              </text>
            </svg>
          </div>
          <p> {completedGoal}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
