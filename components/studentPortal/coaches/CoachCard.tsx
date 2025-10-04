import React, { useState } from "react";
import { Coach } from "../../../graphql/studentPortal/coaches/fetchCoaches";
import { useAuth } from "../../../lib/authContext";
import { logToSlack } from "../../../pages/api/slack/slackLogger";
import { Button } from "../../ui/Button";

type CoachCardProps = {
  coach: Coach;
};

export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="flex flex-col justify-between p-8 shadow-lg bg-backgroundSecondary">
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={coach.image_url}
          className="object-cover w-40 h-40 border-8 rounded-full border-brandPrimary"
        />
        <p className="text-lg font-bold text-center">{coach.user.name}</p>
      </div>
      <div className="flex items-center col-span-3 p-4">
        <p className="w-full text-center h-16">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-center p-4 mt-4">
        <a href={coach.link} target="_blank" rel="noreferrer">
          <Button label="Book Time" />
        </a>
      </div>
    </div>
  );
}

export function LockedCoachCard({ coach }: CoachCardProps) {
  return (
    <div className="flex flex-col justify-between p-8 shadow-lg bg-backgroundSecondary h-full">
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="w-40 h-40 border-8 rounded-full border-brandPrimary bg-gray-300 flex items-center justify-center">
          <p className="text-4xl font-bold text-center">?</p>
        </div>
      </div>
      <div className="flex items-center col-span-3 p-4">
        <p className="w-full text-center h-16">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-center p-4 mt-4">
        <Button label="Book Time" disabled />
      </div>
    </div>
  );
}

export function VithushanLockedCoachCard({ coach }: CoachCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const { user } = useAuth();


  const handleClick = () => {
    setIsClicked(true);
    logToSlack(`New Coach Request: ${coach.user.name} from ${user.email}`);
  };

  return (
    <div className="flex flex-col justify-between p-8 shadow-lg bg-backgroundSecondary h-full">
     <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={coach.image_url}
          className="object-cover w-40 h-40 border-8 rounded-full border-brandPrimary"
        />
        <p className="text-lg font-bold text-center">{coach.user.name}</p>
      </div>
      <div className="flex items-center col-span-3 p-4">
        <p className="w-full text-center h-16">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-center p-4 mt-4">
        {!isClicked ? (
          <Button
            label="Book Time"
            disabled={isClicked}
            onClick={handleClick}
          />
        ) : (
          <div className="flex items-center justify-center gap-2">
            <img src="/images/studentPortal/checkmark.svg" className="w-10 h-10" />
            <p className="text-bulbasaur-500">
              We will email you to find a time to meet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
