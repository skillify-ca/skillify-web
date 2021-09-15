import { ReactNode, useEffect, useState } from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";
import { FinanceProfileChart, FinanceProfileChartProps } from "./FinanceProfileChart";
import { FinanceProfileType, financialProfileData, MaritalStatus } from "../../pages/api/finance/profile";
import { getRndInteger } from "../../pages/api/random";

export interface RulesSessionProps {
    onClick: () => void
    profileData: FinanceProfileType
    setProfileData: (profileData: FinanceProfileType) => void;
}

export const RulesSession = ({

    onClick,
    profileData,
    setProfileData

}: RulesSessionProps) => {

    const randomize = () => {
        const randomProfile = getRndInteger(0, 12);
        setProfileData(financialProfileData[randomProfile]);
    }

    return (
        <div>
            <p className="text-center text-4xl pb-8">Balancing a Budget</p>
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
                </div>)}
            <div>
            </div>
            <div className="flex flex-nowrap justify-center">
                <div className="pr-5">
                    <Button
                        backgroundColor="green"
                        textColor="white"
                        label="Randomize"
                        onClick={randomize}
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
    )
}

