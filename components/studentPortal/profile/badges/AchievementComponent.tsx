import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FETCH_CODING_BADGES,
  FetchBadgeResponse,
  UserCodingBadge,
} from "../../../../graphql/studentPortal/achievements/fetchUserBadges";
import { Button } from "../../../ui/Button";
import CodingBadgeCard from "./CodingBadgeCard";

export type AchievementComponentProps = {
  userId: string;
};

const AchievementComponent = ({ userId }: AchievementComponentProps) => {
  const [userBadges, setUserBadges] = useState<UserCodingBadge[]>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {emptyArray
            .concat(userBadges)
            .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            .filter((badge, index) => {
              if (isCollapsed) {
                return index < 5;
              } else {
                return true;
              }
            })
            .map((badge, index) => {
              return (
                <div
                  className="shadow bg-backgroundPrimary rounded-xl"
                  key={index}
                >
                  <CodingBadgeCard badge={badge} />
                </div>
              );
            })}
        </div>
      )}
      <div className="mt-4">
        <Button
          label={isCollapsed ? "Show More" : "Show Less"}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></Button>
      </div>
    </div>
  );
};

export default AchievementComponent;
