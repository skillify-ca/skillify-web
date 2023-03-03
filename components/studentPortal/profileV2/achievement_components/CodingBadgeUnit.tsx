import React from "react";
import { IntroCourseUnit } from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import { CodingBadge } from "../../../../graphql/studentPortal/admin/fetchUserProfileCard";

type CodingBadgeUnitProps = {
  disabled: boolean;
  badge: CodingBadge;
  setUnitBadges: React.Dispatch<React.SetStateAction<IntroCourseUnit[]>>;
};
// maybe use IndividualCodingBadge
function CodingBadgeUnit({
  disabled,
  badge,
  setUnitBadges,
}: CodingBadgeUnitProps) {
  const handleBadgeClick = (inputBadge: CodingBadge) => {
    setUnitBadges((prev) => {
      const updatedUnitBadges: IntroCourseUnit[] = prev.map((unit) => {
        return {
          ...unit,
          coding_badges: unit.coding_badges.map((badge) => {
            if (inputBadge.id == badge.id) {
              if (badge.user_coding_badges.length > 0) {
                return {
                  ...badge,
                  user_coding_badges: [],
                };
              } else {
                return {
                  ...badge,
                  user_coding_badges: [{ id: Math.random() }],
                };
              }
            }
            return badge;
          }),
        };
      });
      return updatedUnitBadges;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 rounded-xl text-textPrimary bg-backgroundSecondary border-slate-300">
      <button
        className=" h-28"
        disabled={disabled}
        onClick={() => handleBadgeClick(badge)}
      >
        <img
          className="transition-all transform bg-white border-4 rounded-full shadow-lg w-28 h-28 hover:scale-110"
          src={
            badge.user_coding_badges.length > 0
              ? badge.image
                ? badge.image
                : "/images/profile/achievement-badge-active.svg"
              : "/images/profile/achievement-badge.svg"
          }
        />
      </button>
      <div className="flex flex-col items-center justify-center h-full mt-4 ">
        <p className="h-full text-base sm:mb-0">{badge.title}</p>
      </div>
    </div>
  );
}
export default CodingBadgeUnit;
