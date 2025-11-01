import React from "react";
import { UserCodingBadge } from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import CodingBadgeCard from "./CodingBadgeCard";

export type AchievementComponentProps = {
  userBadges: UserCodingBadge[];
};

const AchievementComponent = ({ userBadges }: AchievementComponentProps) => {
  const emptyArray: UserCodingBadge[] = [];

  return (
    <div className="p-4 rounded-xl bg-backgroundSecondary">
      {userBadges && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {emptyArray
            .concat(userBadges)
            .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            .map((badge, index) => {
              return <CodingBadgeCard badge={badge} key={index} />;
            })}
        </div>
      )}
    </div>
  );
};

export default AchievementComponent;
