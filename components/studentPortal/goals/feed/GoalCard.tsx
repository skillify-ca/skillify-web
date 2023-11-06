import React, { useEffect, useState } from "react";
import { fetchProfilePicture } from "../../../../pages/api/studentPortal/profile/profilePicturesClient";

type GoalCardProps = {
  userId: string;
  userName: string;
  description: string;
  completedOn: string;
};

export default function GoalCard({
  userId,
  userName,
  description,
  completedOn,
}: GoalCardProps) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchProfilePicture(userId).then((url) => {
      if (url) {
        setImageUrl(url);
      } else {
        setImageUrl("/images/profile/user-avatar.png");
      }
    });
  }, [userId]);

  return (
    <div
      key={description}
      className="p-2 mb-4 border-2 rounded bg-backgroundSecondary"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-bulbasaur-500">Completed</p>
      </div>
      <p>{description}</p>
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 rounded-full" src={imageUrl} />
        <div className="flex flex-col">
          <p className="font-bold">{userName} </p>
          <p>
            {new Date(completedOn).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
