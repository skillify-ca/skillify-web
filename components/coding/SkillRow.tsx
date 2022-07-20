import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import SkillRatings from "../../pages/skillRatings";

export type SkillRow = {
  sectionName: String;
  skillName: String;
  skillRating: Number;
};

export type SkillRowProps = {
  skillRow: SkillRow;
};

export default function SkillRow({ skillRow }: SkillRowProps) {
  const emojiToSkill = (skillRating: Number) => {
    if (skillRating == 0) {
      return "😶";
    } else if (skillRating < 30) {
      return "😐";
    } else if (skillRating < 60) {
      return "🙂";
    } else if (skillRating < 90) {
      return "😊";
    } else {
      return "🤩";
    }
  };

  return (
    <div className="grid grid-cols-8 justify-center items-center text-center">
      <div className="w-1/2 h-1/2 bg-murkrow/50 rounded-full flex p-12 shadow-xl justify-center items-center text-center text-6xl">
        {emojiToSkill(skillRow.skillRating)}
      </div>
      <p className="col-start-2 col-span-3 text-xl">{skillRow.skillName}</p>
      <p>{skillRow.skillRating}</p>
      <input type="range" className="w-full" />
    </div>
  );
}
