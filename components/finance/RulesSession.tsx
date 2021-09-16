import React from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";

import badgeData from "/Users/brianlee/Documents/GitHub/math/pages/finance-profile";
import { FETCH_BADGE_ON_USERID } from "/Users/brianlee/Documents/GitHub/math/graphql/fetchBadgeOnUserID";
import { data } from "autoprefixer";

import { FinanceProfileChart } from "./FinanceProfileChart";
import {
  FinanceProfileType,
  financialProfileData,
} from "../../pages/api/finance/profile";
import { getRndInteger } from "../../pages/api/random";

export interface RulesSessionProps {
  onClick: () => void;
  badgeData: any;
  profileData: FinanceProfileType;
  setProfileData: (profileData: FinanceProfileType) => void;
}

export const RulesSession = ({
  onClick,
  badgeData,
  profileData,
  setProfileData,
}: RulesSessionProps) => {
  let rightBadges: boolean = false;
  const badgeIds: number[] = badgeData.user_badges.map(
    (userbadge) => userbadge.badge.id
  );

  if (badgeIds.includes(1) || badgeIds.includes(4)) {
    rightBadges = true;
  }
  const randomize = () => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  };

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
            recommend you complete those before attempting this worksheet.{" "}
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className={"col-start-1"}>
              <div className={"flex justify-center"}>
                <img
                  src={"/images/Addition1.png"}
                  className={"h-16 w-auto opacity-20"}
                />{" "}
              </div>
              <div className={"flex justify-center font-bold"}>
                Addition Level 1 Badge
              </div>
            </div>
            <div className={"col-start-2"}>
              <div className={"flex justify-center"}>
                <img
                  src={"/images/Subtraction1.png"}
                  className={"h-16 w-auto opacity-20"}
                />{" "}
              </div>
              <div className={"flex justify-center font-bold"}>
                Subtraction Level 1 Badge
              </div>
            </div>
          </div>
        </div>
      );
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
        <div className="grid grid-cols-2 mt-8"> {validate()} </div>
      </div>
      <div className="pb-8 flex flex-col items-center">
        <BudgetRules />
      </div>
      <p className="text-center pb-5">
        Choose a profile to begin your journey:
      </p>
      {profileData && (
        <div className="flex justify-center pb-6">
          <FinanceProfileChart
            individualOccupation={profileData.individualOccupation}
            individualSalary={profileData.individualSalary}
            maritalStatus={profileData.maritalStatus}
            numberOfChildren={profileData.numberOfChildren}
            spouseOccupation={profileData.spouseOccupation}
            spouseSalary={profileData.spouseSalary}
          />
        </div>
      )}
      <div></div>
      <div className="flex flex-nowrap justify-center">
        <div className="pr-5">
          <Button
            backgroundColor="green"
            textColor="white"
            label="Randomize"
            onClick={randomize}
          />

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
    </div>
  );
};
