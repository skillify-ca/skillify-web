import { useState } from "react"
import { getUserEmojiValue } from "../../pages/api/practiceTracker/emojiHelper";
import { getEmoji } from "../../pages/api/skill";
import { Button } from "../ui/Button";
import Link from "next/link";

const SkillCard = ({ loading, data, skill }) => {
  const [isSelected, setIsSelected] = useState(false);

  return <div
    onMouseEnter={() => setIsSelected(true)}
    onMouseLeave={() => setIsSelected(false)}
    className={`${!skill.published
      ? "opacity-50"
      : " cursor-pointer transform transition duration-200 hover:bg-gray-50"
      } bg-white flex flex-col items-center rounded-xl shadow-lg mr-4`}
  >
    <img
      className="w-full h-32 object-cover rounded-t-xl"
      src={
        !skill.published
          ? "/images/skills/lock.png"
          : `https://placeimg.com/640/480/tech`
      }
    />

    <p className="text-center p-4 h-16 flex items-center justify-center">
      {`I can ${skill.description}`}
    </p>
    {skill.published && (
      <p className={`text-4xl mb-4 transform transition-all ease-in-out duration-200 ${isSelected ? "-rotate-45 scale-110" : ""}`}>
        {!loading &&
          data &&
          getEmoji(getUserEmojiValue(data, skill.id))}{" "}
      </p>
    )}

    {skill.published && (
      <div className="flex flex-col sm:flex-row justify-center p-4">
        <div className="mr-2">
          <Button
            label="Learn"
            backgroundColor="green"
            textColor="white"
          />
        </div>
        <Link href={skill.published ? `/practice/${skill.id}` : ""}>

          <div className="ml-2">
            <Button
              label="Practice"
              backgroundColor="blue"
              textColor="white"
            />
          </div>
        </Link>
      </div>
    )}
  </div>
}

export default SkillCard;