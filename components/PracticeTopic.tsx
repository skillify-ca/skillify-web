import Link from "next/link";
import React, { useState } from "react";
import TopicItem from "./stories/TopicItem";

export type PracticeTopicProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link?: string;
  rating?: number;
};

export const PracticeTopic: React.FC<PracticeTopicProps> = ({
  title,
  image,
  disabled,
}: PracticeTopicProps) => {
  const lockedTopic = (
    <TopicItem disabled={true} image={image} title={title} rating={0} />
  );
  const unlockedTopic = (
    <div className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-110">
      <Link href={`${title.toLocaleLowerCase()}TopicOverview`}>
        <TopicItem disabled={disabled} image={image} title={title} rating={0} />
      </Link>
    </div>
  );

  return disabled ? lockedTopic : unlockedTopic;
};

export default PracticeTopic;
