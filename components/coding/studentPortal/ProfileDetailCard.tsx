import React from "react";
import { Button } from "../../ui/Button";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  joinDate: string;
  badges: number;
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
      <a href="profile">
        <div className="flex flex-col grow items-center gap-4  hover:border-2 hover:rounded-md">
          <img
            className="rounded-full h-full border-2 w-20 flex "
            src={avatar}
          />
          <p className=" font-bold "> {name}</p>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-charmander"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clip-rule="evenodd"
              />
            </svg>

            <p className=" ">join date: {joinDate}</p>
          </div>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-rattata"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25a4.49 4.49 0 00-3.397 1.549 4.49 4.49 0 00-3.497 1.307 4.49 4.49 0 00-1.307 3.497A4.49 4.49 0 002.25 12c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 001.307 3.498A4.49 4.49 0 008.603 20.2 4.49 4.49 0 0012 21.75a4.49 4.49 0 003.397-1.549 4.491 4.491 0 003.497-1.307 4.491 4.491 0 001.307-3.497A4.49 4.49 0 0021.75 12a4.49 4.49 0 00-1.548-3.397 4.491 4.491 0 00-1.307-3.497 4.49 4.49 0 00-3.498-1.307A4.49 4.49 0 0012 2.25zm3.059 8.062a.75.75 0 10-.993-1.124 12.785 12.785 0 00-3.209 4.358L9.53 12.22a.75.75 0 00-1.06 1.06l2.135 2.136a.75.75 0 001.24-.289 11.264 11.264 0 013.214-4.815z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="">badges: {badges}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="underline ">current focus: {currentFocus}</p>
          <p className="underline">next goal: {nextGoal}</p>
        </div>
      </a>

    </div>
  );
}

export default ProfileDetailCard;
