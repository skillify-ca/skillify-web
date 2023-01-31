import { useSelector } from "react-redux";
import { CodingBadge } from "../../../graphql/fetchUserProfileCard";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";
import React from "react";
import { profileSelector } from "../../../redux/profileSlice";
import { userGoalsSelector } from "../../../redux/userGoalsSlice";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: string;
  badges: number;
  currentBadge: CodingBadge;
  completedDate: string;
  completedGoal: string;
};

function ProfileDetailCard({
  avatar,
  name,
  joinDate,
  badges,
  currentBadge,
  completedGoal,
  completedDate,
}: ProfileDetailCard) {
  const { totalBadgeCount } = useSelector(profileSelector);
  const { userGoals } = useSelector(userGoalsSelector);

  return (
    <div
      className="grid grid-cols-4 h-full w-full text-sm border-2 bg-slate-50 text-slate-800 border-slate-800 hover:bg-violet-100"
      style={{ height: "320px", objectFit: "contain" }}
    >
      <div className="flex ml-3 place-items-center col-span-4 mt-4">
        <img
          className="col-span-1 w-20 my-3 border-3 rounded-full border-slate-800 "
          src={avatar}
        />
        <div className="col-span-3 items-center gap-1 mx-4">
          <p className="font-bold mb-1"> {name}</p>

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
      <div className="ml-4 col-span-4 p-1 mb-4">
        <p className="font-bold">Current Focus:</p>
        <div className="flex items-center p-2 ">
          <img
            src={currentBadge?.image}
            className="col-span-1 flex items-center w-16 mr-4 rounded-full"
          />
          <p className="col-span-3 align-middle"> {currentBadge?.title}</p>
        </div>
        <p className="font-bold">Last Goal:</p>
        <div className="flex items-center p-1 pl-5 ">
          <div className="col-span-1 mr-9">{completedDate} </div>
          <p className="col-span-3 underline"> {completedGoal}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
