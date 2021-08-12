import Link from "next/link";
import React, { useState } from "react";
import TopicItem from "./stories/TopicItem";

export type UnitCardProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link?: string;
  rating?: number;
};

export const UnitCard: React.FC<UnitCardProps> = ({
  title,
  image,
  disabled,
}: UnitCardProps) => {
  const lockedTopic = (
    <TopicItem disabled={true} image={image} title={title} rating={0} />
  );
  const unlockedTopic = (
    <div className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`topic-overview/${title.toLocaleLowerCase()}`}>
        <TopicItem disabled={disabled} image={image} title={title} rating={0} />
      </Link>
    </div>
  );

  return disabled ? lockedTopic : unlockedTopic;
};

export default UnitCard;
