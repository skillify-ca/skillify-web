import React from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../../ui/Button";

import { FinanceProfileChart } from "./FinanceProfileChart";
import {
  FinanceProfileType,
  financialProfileData,
} from "../../../pages/api/finance/profile";
import { getRndInteger } from "../../../pages/api/random";

export interface RulesSessionProps {
  onClick: () => void;
  badgeData: any;
  profileData: FinanceProfileType;
  setProfileData: (profileData: FinanceProfileType) => void;
}

export const RulesSession = ({ onClick, badgeData }: RulesSessionProps) => {
  let rightBadges = false;
  const badgeIds: number[] = badgeData.user_badges.map(
    (userbadge) => userbadge.badge.id
  );

  if (badgeIds.includes(1) || badgeIds.includes(4)) {
    rightBadges = true;
  }

  const validate = () => {
    if (rightBadges === true) {
      {
        return badgeData.user_badges.map((userbadge) => (
          <div className={"flex justify-center"}>
            <img src={userbadge.badge.image} className={"h-16 w-auto"} />
            <div className={"flex justif-center items-center ml-2 font-bold"}>
              {" "}
              Badge Completed!
            </div>{" "}
          </div>
        ));
      }
    } else {
      return (
        <div className={"col-span-2"}>
          <div className={"flex justify-center text-red-400 text-xl"}>
            Looks like you haven't completed Addition 1 and Subtraction 1. We
            recommend you complete those before attempting this worksheet.
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className={"col-start-1"}>
              <div className={"flex flex-col items-center justify-center"}>
                <img
                  src={"/images/Addition1.png"}
                  className={"h-16 w-auto opacity-20"}
                />{" "}
                <div className={"text-center font-bold"}>
                  Addition Level 1 Badge
                </div>
              </div>
            </div>
            <div className={"col-start-2"}>
              <div className={"flex flex-col items-center justify-center"}>
                <img
                  src={"/images/Subtraction1.png"}
                  className={"h-16 w-auto opacity-20"}
                />{" "}
                <div className={"text-center font-bold"}>
                  Subtraction Level 1 Badge
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-4xl py-4">Balancing a Budget</p>
      <div className="bg-white border-4 border-black p-4">
        {rightBadges ? (
          <p className="flex items-center justify-center text text-2xl">
            You have completed the badges required to unlock this lesson.
          </p>
        ) : (
          <h2 className="flex items-center justify-center text text-2xl">
            Before you start, we recommend that you complete Addition Level 1
            and Subtraction Level 1
          </h2>
        )}
        <div className="grid grid-cols-2 mt-8"> {validate()} </div>
      </div>
      <div className="py-8 w-full flex justify-center">
        <BudgetRules />
      </div>

      <Button
        backgroundColor="green"
        textColor="white"
        label="Start"
        onClick={(e) => onClick()}
      />
    </div>
  );
};
