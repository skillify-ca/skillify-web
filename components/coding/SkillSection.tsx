import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import SkillRatings from "../../pages/skillRatings";

export type RenderUserSkill = {
  sectionName: String;
  skillName: String;
  skillRating: Number;
};

type SkillSectionProps = {
  skillSection: Array<RenderUserSkill>;
};

export default function SkillSection({ skillSection }: SkillSectionProps) {
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
    <div>
      <div className="text-white bg-murkrow text-center rounded-full py-4 w-1/6 mt-4">
        {skillSection[0].sectionName}
      </div>
      {skillSection.map((row) => {
        return (
          <div className="grid grid-cols-8 justify-center items-center text-center">
            <div className="w-full h-1/2 bg-purple-200 rounded-full flex p-20 shadow-xl justify-center items-center text-center text-8xl">
              {emojiToSkill(row.skillRating)}
            </div>
            <p className="col-start-2 col-span-3 text-xl">{row.skillName}</p>
            <p>{row.skillRating}</p>
          </div>
        );
      })}
    </div>
  );
}
