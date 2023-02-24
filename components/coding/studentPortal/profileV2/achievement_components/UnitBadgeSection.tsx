import React, { useState } from "react";
import { IntroCourseUnit } from "../../../../graphql/coding/userBadges/fetchUserBadges";
import { CodingBadge } from "../../../../graphql/coding/userBadges/fetchUserBadges";
import CodingBadgeUnit from "./CodingBadgeUnit";

type UnitBadgeSectionProps = {
  unit: IntroCourseUnit;
  editMode: boolean;
  setUnitBadges: React.Dispatch<React.SetStateAction<IntroCourseUnit[]>>;
};

function UnitBadgeSection({
  unit,
  editMode,
  setUnitBadges,
}: UnitBadgeSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function getNumEarnedBadgesForUnit(codingBages: CodingBadge[]) {
    return codingBages.filter((badge) => badge.user_coding_badges.length > 0)
      .length;
  }

  return (
    <div>
      <div className="grid grid-cols-1">
        <div
          className="flex p-4 cursor-pointer  hover:bg-slate-700 group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={unit.image}
            className="object-cover w-24 h-24 transition-all transform bg-red-300 rounded-lg group-hover:scale-110"
          />
          <div className="flex flex-col justify-center px-4">
            <h3 className="text-xl font-bold text-white">{unit.title}</h3>
            <p className="font-bold text-charmander">
              {getNumEarnedBadgesForUnit(unit.coding_badges)} Badges Earned
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="grid grid-cols-1 mb-8 text-base sm:grid-cols-3 bg-slate-800 sm:mb-0 ">
          {unit.coding_badges.map((badge) => (
            <div key={badge.id} className="m-4">
              <CodingBadgeUnit
                disabled={!editMode}
                badge={badge}
                setUnitBadges={setUnitBadges}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default UnitBadgeSection;
