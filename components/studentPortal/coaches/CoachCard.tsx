import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../../lib/authContext";
import { logToSlack } from "../../../pages/api/slack/slackLogger";
import { Button } from "../../ui/Button";

export interface Coach {
  id: string;
  name: string;
  bio: string;
  profile_image: string;
  user_id: string;
  link: string;
  competencies: string[];
  image_url: string;
  user: {
    id: string;
    profile_image: string;
    name: string;
    bio: string;
  };
}

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
        <Link href={"/studentPortal/coaches/booking"}>
        <Button label="Book Time" onClick={handleClick} />
        </Link>
      </div>
    </div>
  );
}
