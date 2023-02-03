import { CodingBadge } from "../../../graphql/fetchUserProfileCard";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";
import React from "react";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: Date;
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
          className="col-span-1 w-20 h-20 border-3 rounded-full border-slate-800 "
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
      <div className="ml-2 col-span-4 my-3 space-x-4 space-y-2">
        <p className="font-bold">Current Focus</p>
        <div className="flex items-center space-x-4">
          <img
            src={currentBadge?.image}
            className="border-3 shadow-xl items-center w-16 h-16 rounded-full"
          />
          <p> {currentBadge?.title}</p>
        </div>
        <p className="font-bold">Last Goal</p>
        <div className="flex items-center space-x-4">
          <div className="items-center">
            <svg
              className="rounded-full h-16 w-16 text-slate-200"
              fill="bg-slate-900"
              viewBox="0 0 24 24"
              stroke="currentColor"
              shapeRendering="geometricPrecision"
            >
              <circle cx="12" cy="12" r="16" strokeWidth="2" />
              <text
                x="50%"
                y="50%"
                strokeWidth="0.4"
                dominantBaseline="central"
                textAnchor="middle"
                fontFamily="Arial"
                fontSize="5"
                shapeRendering="crispEdges"
                textRendering="auto"
                imageRendering="optimizeQuality"
                fontWeight="light"
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
