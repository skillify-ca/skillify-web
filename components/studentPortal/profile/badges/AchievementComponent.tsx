import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FETCH_CODING_BADGES,
  FetchBadgeResponse,
  UserCodingBadge,
} from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import CodingBadgeCard from "./CodingBadgeCard";

export type AchievementComponentProps = {
  userId: string;
};

const AchievementComponent = ({ userId }: AchievementComponentProps) => {
  const [userBadges, setUserBadges] = useState<UserCodingBadge[]>([]);

  const { data } = useQuery<FetchBadgeResponse>(FETCH_CODING_BADGES, {
    variables: {
      userId: userId,
    },
    onCompleted: (data) => {
      setUserBadges(data.user_coding_badges);
    },
  });

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
