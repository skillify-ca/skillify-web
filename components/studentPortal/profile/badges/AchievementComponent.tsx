import { useQuery } from "@apollo/client";
import Link from "next/link";
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
        <div className="grid w-full grid-cols-3 gap-4 overflow-x-scroll lg:flex ">
          {emptyArray
            .concat(userBadges)
            .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            .filter((badge, index) => {
              return index < 5;
            })
            .map((badge, index) => {
              return <CodingBadgeCard badge={badge} key={index} />;
            })}
        </div>
      )}
      <div className="mt-4">
        <Link href="/studentPortal/badges">
          <Button label={"Show More"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default AchievementComponent;
