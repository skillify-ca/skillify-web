import React from "react";
import { SkillRatingsRow } from "../../../../redux/skillRatingsSlice";
import SkillRow from "./SkillRow";

type SkillSectionProps = {
  skillSection: Array<SkillRatingsRow>;
};

export default function SkillSection({ skillSection }: SkillSectionProps) {
  return (
    <div>
      {skillSection && skillSection.length > 0 && (
        <div>
          <div className="w-1/6 py-4 mt-4 text-center text-white rounded-full bg-murkrow">
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
