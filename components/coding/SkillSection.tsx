import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import SkillRatings from "../../pages/skillRatings";
import SkillRow from "./SkillRow";

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
      <div className="text-white bg-murkrow text-center rounded-full py-4 w-1/6 mt-4">
        {skillSection[0].sectionName}
      </div>
      {skillSection.map((row) => {
        return <SkillRow skillRow={row} />;
      })}
    </div>
  );
}
