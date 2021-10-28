import { useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BudgetPreview } from "../../components/finance/BudgetPreview";

import { MultipleChoiceSentence } from "../../components/questionTypes/MultipleChoiceSentence";
import { FETCH_BADGE_ON_USERID } from "../../graphql/fetchBadgeOnUserID";
import { useAuth } from "../../lib/authContext";
import {
  FinanceProfileType,
  financialProfileData,
} from "../api/finance/profile";
import { getRndInteger } from "../api/random";
import TFSACalculator from "./TFSACalculator";

export default function Finance(props) {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<FinanceProfileType>();
  useEffect(() => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const units = [
    "Taxes",
    "TFSACalculator",
    "Tax-Free Savings Account (TFSA)",
    "Saving",
    "Budgeting",
    "Investing",
    "Student Loans",
    "Debt",
    "Real Estate",
  ];

  let { data: badgeData } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: user.uid,
      badgeId: 1, //Addition Level 1 Badge
      badgeId2: 4, //Subtraction Level 1 Badge
    },
  });

  const [selectedUnit, setSelectedUnit] = useState("");

  return (
    <div className="flex flex-col items-center">
      <div className={"flex items-center gap-8 p-8 overflow-x-auto w-full"}>
        {units.map((unit) => (
          <div
            onClick={(_) => setSelectedUnit(unit)}
            className="flex items-center bg-white w-64 h-36 shadow-lg rounded-xl p-8 transform transition-all hover:scale-110"
          >
            {unit}
          </div>
        ))}
      </div>
      {selectedUnit === "Budgeting" ? (
        <div className="max-w-6xl w-full bg-red-300">
          <BudgetPreview
            badgeData={badgeData}
            profileData={profileData}
            setProfileData={() => {}}
          />
        </div>
      ) : selectedUnit === "TFSACalculator" ? (
        <TFSACalculator />
      ) : null}
    </div>
  );
}
