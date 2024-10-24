import React, { useEffect, useState } from "react";
import { CodingBadge } from "../../../graphql/studentPortal/admin/fetchUserProfileCard";
import { fetchProfilePicture } from "../../../pages/api/studentPortal/profile/profilePicturesClient";
import BadgesDisplayedComponent from "../profile/BadgesDisplayedComponent";
import JoinedDateComponent from "../profile/JoinedDateComponent";

type ProfileDetailCard = {
  userId: string;
  name: string;
  link: string;
  joinDate: Date;
  badges: number;
  totalBadgeCount: number;
  currentBadge: CodingBadge;
  completedDate: string;
  completedGoal: string;
};

function ProfileDetailCard({
  userId,
  name,
  joinDate,
  badges,
  currentBadge,
  totalBadgeCount,
  completedGoal,
  completedDate,
}: ProfileDetailCard) {
  const [avatar, setAvatar] = useState("../../images/logo-2.png");

  useEffect(() => {
    fetchProfilePicture(userId)
      .then((url) => {
        if (url) {
          setAvatar(url);
        } else {
          setAvatar("../../images/logo-2.png");
        }
      })
      .catch((_) => {
        setAvatar("../../images/logo-2.png");
      });
  }, [userId]);

  return (
    <div className="grid w-full h-full grid-cols-4 text-sm border-2 bg-slate-50 text-slate-800 border-slate-800 hover:bg-violet-100 ">
      <div className="flex col-span-4 m-4 place-items-center">
        <img
          className="w-20 h-20 col-span-1 rounded-full border-3 border-slate-800 "
          src={avatar}
        />
        <div className="items-center col-span-3 gap-1 ml-2">
          <p className="font-bold"> {name}</p>

          <JoinedDateComponent textSize={"small"} createdAt={joinDate} />
          <BadgesDisplayedComponent
            earnedBadges={badges}
            textSize={"small"}
            totalBadges={totalBadgeCount}
          />
        </div>
      </div>
      <div className="col-span-4 my-3 ml-2 space-x-4 space-y-2">
        <p className="font-bold">Current Focus</p>
        <div className="flex items-center space-x-4">
          <img
            src={currentBadge?.image}
            className="items-center w-16 h-16 rounded-full shadow-xl border-3"
          />
          <p> {currentBadge?.title}</p>
        </div>
        <p className="font-bold">Last Goal</p>
        <div className="flex items-center space-x-4">
          <div className="items-center">
            <svg
              className="w-16 h-16 rounded-full text-slate-200"
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
