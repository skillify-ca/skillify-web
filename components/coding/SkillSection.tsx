import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";

export type RenderUserSkill = {
  sectionName: String;
  skillName: String;
  skillRating: Number;
};

type SkillSectionProps = {
  skillSection: Array<RenderUserSkill>;
};

export default function SkillSection({ skillSection }: SkillSectionProps) {
  return (
    <div>
      <div className="text-white bg-murkrow text-center rounded-full mx-5 py-2 mb-5 w-1/6 mt-4">
        {skillSection[0].sectionName}
      </div>
      {skillSection.map((row) => {
        return (
          <div className="grid grid-cols-8">
            <p className="col-start-1 col-span-3">{row.skillName}</p>
            <p>{row.skillRating}</p>
          </div>
        );
      })}
    </div>
  );
}
