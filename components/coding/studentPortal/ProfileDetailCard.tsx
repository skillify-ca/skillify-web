import Link from "next/link";
import { CodingBadge } from "../../../graphql/fetchUserProfileCard";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: string;
  badges: number;
  currentBadge: CodingBadge;
  nextGoal: string;
};

function ProfileDetailCard({
  avatar,
  name,
  link,
  joinDate,
  badges,
  currentBadge,
  nextGoal,
}: ProfileDetailCard) {
  return (
    <div className="flex flex-col h-full gap-4 text-sm border-2 bg-slate-50 text-slate-800 border-slate-800 hover:bg-violet-100">
      <div className="flex flex-col items-center">
        <img
          className="items-center w-20 mt-4 border-2 rounded-full border-slate-800 "
          src={avatar}
        />
        <p className="font-bold "> {name}</p>
      </div>
      <div className="flex flex-col items-start gap-4 mx-4 mb-4">
        <JoinedDateComponent
          user={name}
          textSize={"small"}
          createdAt={joinDate}
        />
        <BadgesDisplayedComponent
          earnedBadges={badges}
          textSize={"small"}
          totalBadges={50}
        />
        <p className="font-bold">Current Focus:</p>
        <div className="flex items-center p-2 ">
          <img src={currentBadge?.image} className="w-16 mr-4 rounded-full" />
          <p className="underline "> {currentBadge?.title}</p>
        </div>{" "}
        <p className="underline">Next Goal: {nextGoal}</p>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
