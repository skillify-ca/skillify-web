import { Coach } from "../../../../graphql/coding/coaches/fetchCoaches";
import { Button } from "../../../ui/Button";
import React from "react";

type CoachCardProps = {
  coach: Coach;
};
export default function CoachCard({ coach }: CoachCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-lg dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={coach.user.profile_image}
          className="object-cover w-40 h-40 rounded-full"
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
          <Button label="Book Time" />
        </a>
      </div>
    </div>
  );
}
