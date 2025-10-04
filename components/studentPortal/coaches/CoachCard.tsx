import React from "react";
import { Coach } from "../../../graphql/studentPortal/coaches/fetchCoaches";
import { Button } from "../../ui/Button";

type CoachCardProps = {
  coach: Coach;
  disabled: boolean;
};

export default function CoachCard({ coach, disabled }: CoachCardProps) {
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
        <p className="w-full text-center">
          <span className="mr-2 font-bold">I can help with:</span>
          {coach.competencies}
        </p>
      </div>
      <div className="flex items-center justify-center p-4 mt-4">
        <a href={coach.link} target="_blank" rel="noreferrer">
          <Button label="Book Time" disabled={disabled} />
        </a>
      </div>
    </div>
  );
}
