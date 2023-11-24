import React from "react";
import { UserCodingBadge } from "../../../../graphql/studentPortal/achievements/fetchUserBadges";

type CodingBadgeProps = {
  badge: UserCodingBadge;
};

const CodingBadgeCard = ({ badge }: CodingBadgeProps) => {
  // Sept 23, 2021
  function formatDate(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  }

  return (
    <div className="flex flex-col items-center p-4 ">
      <img
        src={badge.coding_badge.image}
        className="w-40 h-40 border rounded-full shadow"
      />

      <div className="p-4 ">
        <p className="text-lg font-bold">{badge.coding_badge.title}</p>
        <p className="text-xs">{formatDate(badge.created_at)}</p>
        <p className="transition-all transform hover:line-clamp-none line-clamp-3">
          {badge.coding_badge.description}
        </p>
      </div>
    </div>
  );
};

export default CodingBadgeCard;
