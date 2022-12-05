import React from "react";
import { Button } from "../../ui/Button";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  joinDate: string;
  badges: string;
  currentFocus: string;
  nextGoal: string;
};

function ProfileDetailCard({
  avatar,
  name,
  joinDate,
  badges,
  currentFocus,
  nextGoal,
}: ProfileDetailCard) {
  return (
    <div className="bg-gray-900 text-sm w-60 p-6 h-full space-y-8 rounded-md ">
      <div className="flex flex-col grow items-center text-center gap-4 font-bold  ">
        <img className="rounded-full border-2 w-20 " src={avatar} />
        <p className=" text-black"> {name}</p>
        <p className="">join date: {joinDate}</p>
        <p className="">badges {badges}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="underline-offset-8">current focus: {currentFocus}</p>
        <p>next goal: {nextGoal}</p>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
