import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";
import SkillRow, { SkillRowType } from "./SkillRow";

type SkillSectionProps = {
  skillSection: Array<SkillRatingsRow>;
};

export default function SkillSection({ skillSection }: SkillSectionProps) {
  console.log(skillSection);
  return (
    <div>
      {/* this doesn't render consistently */}
      {skillSection && (
        <div>
          <div className="text-white bg-murkrow text-center rounded-full py-4 w-1/6 mt-4">
            {skillSection[0].unitName}
          </div>
          {skillSection.map((row) => {
            return <SkillRow skillRow={row} />;
          })}
        </div>
      )}
    </div>
  );
}
