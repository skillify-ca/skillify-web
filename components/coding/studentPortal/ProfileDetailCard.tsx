import Link from "next/link";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: string;
  badges: number;
  currentFocus: string;
  nextGoal: string;
};

function ProfileDetailCard({
  avatar,
  name,
  link,
  joinDate,
  badges,
  currentFocus,
  nextGoal,
}: ProfileDetailCard) {
  return (
    <div className="flex flex-col  gap-4  bg-slate-50 text-slate-800 text-sm h-full border-2 border-slate-800 hover:bg-violet-100">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full  border-2 w-20 mt-4 items-center border-slate-800 "
          src={avatar}
        />
        <p className=" font-bold "> {name}</p>
      </div>
      <div className="flex flex-col ml-4 gap-4 items-start">
        <JoinedDateComponent user={name} createdAt={joinDate} />

        <BadgesDisplayedComponent earnedBadges={badges} totalBadges={50} />
        <p className="underline ">current focus: {currentFocus}</p>
        <p className="underline">next goal: {nextGoal}</p>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
