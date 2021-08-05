import { min } from "lodash";
import React, { useEffect, useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";
import { SectionOneInput } from "../components/finance/SectionOneInput";
import { financialProfileData } from "./api/finance/profile";
import { getRndInteger } from "./api/random";

const FinanceProfile = () => {
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");
  const [spouseMonthlyIncome, setSpouseMounthlyIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
  const [isMarried, setMarriage] = useState(false);
  const [hasChildren, setChildren] = useState(false);

  const [individualOccupation, setIndividualOccupation] = useState("");
  const [individualSalary, setIndividualSalary] = useState(0);
  const [spouseOccupation, setSpouseOccupation] = useState("");
  const [spouseSalary, setSpouseSalary] = useState(0);
  const [profileData, setProfileData] = useState({}); //profileData used for Validation in child components

  useEffect(() => {
    // Update the document title using the browser API
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <FinanceProfileChart
        individualOccupation={profileData.individualOccupation}
        individualSalary={financialProfileData[randomProfile].individualSalary}
        maritalStatus={financialProfileData[randomProfile].maritalStatus}
        numberOfChildren={financialProfileData[randomProfile].numberOfChildren}
        spouseOccupation={financialProfileData[randomProfile].spouseOccupation}
        spouseSalary={financialProfileData[randomProfile].spouseSalary}
      />
      <div>text</div>

      <SectionOneInput
        isMarried={isMarried}
        setMarriage={setMarriage}
        hasChildren={hasChildren}
        setChildren={setChildren}
        individualOccupation={individualOccupation}
        setIndividualOccupation={setIndividualOccupation}
        individualSalary={individualSalary}
        setIndividualSalary={setIndividualSalary}
        spouseOccupation={spouseOccupation}
        setSpouseOccupation={setSpouseOccupation}
        spouseSalary={spouseSalary}
        setSpouseSalary={setSpouseSalary}
      />

      <div className={"mt-8"}>
        <IncomeTable
          value={yourMonthlyIncome}
          setValue={setYourMonthlyIncome}
          value2={spouseMonthlyIncome}
          setValue2={setSpouseMounthlyIncome}
          value3={totalMonthlyIncome}
          setValue3={setTotalMonthlyIncome}
        />
      </div>
      <p>Checking If Addition was done right:</p>
      {+yourMonthlyIncome + +spouseMonthlyIncome === +totalMonthlyIncome
        ? "TRUE"
        : "FALSE"}
    </div>
  );
};

export default FinanceProfile;
