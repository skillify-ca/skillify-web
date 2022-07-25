import React from "react";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";
import SkillRow from "./SkillRow";

type SkillSectionProps = {
  skillSection: Array<SkillRatingsRow>;
};

export default function SkillSection({ skillSection }: SkillSectionProps) {
  return (
    <div>
      {skillSection && skillSection.length > 0 && (
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
