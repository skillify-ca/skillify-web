import { ReactNode } from "react";
import React, { useState } from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";
import badgeData from "/Users/brianlee/Documents/GitHub/math/pages/finance-profile";
import userbadge from "../../pages/user-badge-check";
import { FETCH_BADGE_ON_USERID } from "/Users/brianlee/Documents/GitHub/math/graphql/fetchBadgeOnUserID";
import { data } from "autoprefixer";

export interface RulesSessionProps {
  onClick: () => void;
  badgeData: any;
}

export const RulesSession = ({ onClick, badgeData }: RulesSessionProps) => {
  let rightBadges: boolean = false;
  const badgeIds: number[] = badgeData.user_badges.map(
    (userbadge) => userbadge.badge.id
  );

  if (badgeIds.includes(50) || badgeIds.includes(44)) {
    //some variable (boolean) = true
    rightBadges = true;
  }

  const validate = (rightBadges) => {
    if ((rightBadges = true)) {
      {
        console.log(rightBadges);
        badgeData.user_badges.map((userbadge) => (
          <div className={"flex justify-center"}>
            <img src={userbadge.badge.image} className={"h-16 w-auto"} />{" "}
          </div>
        ));
      }
    } else {
      console.log("hello else");
    }
  };

  return (
    <div>
      <p className="text-center text-4xl pb-8">Balancing a Budget</p>
      <div className="mt-8 bg-white border-4 border-black">
        <h2 className="flex items-center justify-center text text-2xl mt-8 mb-4">
          Before you start, we recommend that you complete Addition Level 1 and
          Subtraction Level 1
        </h2>
        <div className="grid grid-cols-2 mt-8">hello {validate}</div>
      </div>

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
    </div>
  );
};

/*{data &&
data.user_badges.map((userbadge) => (
  <img src={userbadge.badge.image} />
))}*/
