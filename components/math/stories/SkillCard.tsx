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
        className={`${"cursor-pointer transform transition duration-200 hover:bg-gray-200"} bg-gray-100 mb-4 grid grid-cols-12 items-center h-full rounded-xl shadow-lg`}
      >
        <div className="h-full col-span-2 ml-4 rounded-l-lg">
          <img
            className="object-scale-down h-full col-span-2 rounded-l-lg"
            src={!skill.image ? "/images/skills/lock.png" : skill.image}
          />
        </div>
        <div className="h-full col-span-8">
          <p className="flex items-center justify-center h-full col-span-8 p-4 text-center text-murkrow">
            {`I can ${skill.description}`}
          </p>
        </div>
        <div className="h-full col-span-2 rounded-r-lg">
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
