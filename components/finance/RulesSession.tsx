import { ReactNode } from "react";
import React, { useState } from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";
import badgeImage from "/Users/brianlee/Documents/GitHub/math/pages/finance-profile";
import userbadge from "../../pages/user-badge-check";
import { FETCH_BADGE_ON_USERID } from "/Users/brianlee/Documents/GitHub/math/graphql/fetchBadgeOnUserID";

export interface RulesSessionProps {
  onClick: () => void;
  badgeImage: any;
}

export const RulesSession = ({ onClick }: RulesSessionProps) => {
  return (
    <div>
      <p className="text-center text-4xl pb-8">Balancing a Budget</p>
      <div className="pb-8">
        <BudgetRules />
      </div>
      <div className="flex flex-nowrap justify-center">
        <div className="pr-5">
          <Button
            backgroundColor="green"
            textColor="white"
            label="Randomize"
            // no functionality yet
          />
        </div>
        <div>
          <Button
            backgroundColor="green"
            textColor="white"
            label="Start"
            onClick={(e) => onClick()}
          />
        </div>
      </div>
      <div>{JSON.stringify(badgeImage)}</div>
    </div>
  );
};

/*{data &&
data.user_badges.map((userbadge) => (
  <img src={userbadge.badge.image} />
))}*/
