import Link from "next/link";
import React, { useState } from "react";
import TopicItem from "./stories/TopicItem";

export type SkillCardProps = {
  title: string;
  image?: string;
  disabled?: boolean;
  link?: string;
  rating?: number;
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "16px",
    borderRadius: "8px",
  },
};
export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  image,
  disabled,
  link,
  rating,
}: SkillCardProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [level, setLevel] = React.useState("1");
  return (
    <div className="">
      <Link href={`${title.toLocaleLowerCase()}TopicOverview`}>
        <TopicItem
          disabled={disabled}
          image={image}
          title={title}
          rating={rating}
        />
      </Link>
    </div>
  );
};

export default SkillCard;
