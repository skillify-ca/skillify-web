import { useState } from "react";
import { getUserEmojiValue } from "../../../pages/api/practiceTracker/emojiHelper";
import { getEmoji } from "../../../pages/api/skill";
import { Button } from "../../ui/Button";
import Link from "next/link";

const SkillCard = ({ loading, userSkillData, skill }) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(userSkillData);

  return (
    <Link href={`/practice/${skill.id}`}>
      <div
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
        className={`${
          !skill.published
            ? "opacity-50"
            : " cursor-pointer transform transition duration-200 hover:bg-gray-200"
        } bg-gray-100 mb-4 grid grid-cols-12 items-center h-full rounded-xl shadow-lg`}
      >
        <div className="col-span-2 h-full rounded-l-lg ml-4">
          <img
            className="object-scale-down col-span-2 h-full rounded-l-lg"
            src={
              !skill.published || !skill.image
                ? "/images/skills/lock.png"
                : skill.image
            }
          />
        </div>
        <div className="col-span-8  h-full">
          <p className="h-full text-center p-4 flex col-span-8  items-center justify-center">
            {`I can ${skill.description}`}
          </p>
        </div>
        <div className="col-span-2 h-full rounded-r-lg">
          <p
            className={` col-span-2 justify-center rounded-r-lg text-center flex items-center h-full text-4xl mb-4 transform transition-all ease-in-out duration-200 ${
              isSelected ? "-rotate-45 scale-110" : ""
            }`}
          >
            {!loading &&
              userSkillData &&
              getEmoji(getUserEmojiValue(userSkillData, skill.id))}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
