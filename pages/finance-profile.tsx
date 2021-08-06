import { min } from "lodash";
import React, { useEffect, useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";
import { SectionOneInput } from "../components/finance/SectionOneInput";
import {
  FinanceProfileType,
  financialProfileData,
  MaritalStatus,
} from "./api/finance/profile";
import { getRndInteger } from "./api/random";
import HouseExpensesTable from "../components/finance/HouseExpensesTable";

const FinanceProfile = () => {
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");
  const [spouseMonthlyIncome, setSpouseMounthlyIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");

  const [backgroundColour, setBackgroundColour] = useState("");
  const [valueTest, setValueTest] = useState("");

  const [isMarried, setMarriage] = useState(MaritalStatus.SINGLE);
  const [hasChildren, setChildren] = useState(false);
  const [housePayment, setHousePayment] = useState("");
  const [electricBill, setElectricBill] = useState("");
  const [gasBill, setGasBill] = useState("");
  const [waterBill, setWaterBill] = useState("");
  const [totalHousingCost, setTotalHousingCost] = useState("");

  const [individualOccupation, setIndividualOccupation] = useState("");
  const [individualSalary, setIndividualSalary] = useState(0);
  const [spouseOccupation, setSpouseOccupation] = useState("");
  const [spouseSalary, setSpouseSalary] = useState(0);
  const [profileData, setProfileData] = useState<FinanceProfileType>(); //profileData used for Validation in child components

  useEffect(() => {
    // Update the document title using the browser API
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <div>
        {profileData && (
          <FinanceProfileChart
            individualOccupation={profileData.individualOccupation}
            individualSalary={profileData.individualSalary}
            maritalStatus={profileData.maritalStatus}
            numberOfChildren={profileData.numberOfChildren}
            spouseOccupation={profileData.spouseOccupation}
            spouseSalary={profileData.spouseSalary}
          />
        )}
      </div>
      <div> </div>

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
          monthlyIncome={yourMonthlyIncome}
          setMonthlyIncome={setYourMonthlyIncome}
          spouseMonthlyIncome={spouseMonthlyIncome}
          setSpouseMonthlyIncome={setSpouseMounthlyIncome}
          totalMonthlyIncome={totalMonthlyIncome}
          setTotalMonthlyIncome={setTotalMonthlyIncome}
          backgroundColour={backgroundColour}
          setBackgroundColour={setBackgroundColour}
          valueTest={valueTest}
          setValueTest={setValueTest}
        ></IncomeTable>
      </div>
      <div>
        <HouseExpensesTable
          housePayment={housePayment}
          setHousePayment={setHousePayment}
          electricBill={electricBill}
          setElectricBill={setElectricBill}
          gasBill={gasBill}
          setGasBill={setGasBill}
          waterBill={waterBill}
          setWaterBill={setWaterBill}
          totalHousingCost={totalHousingCost}
          setTotalHousingCost={setTotalHousingCost}
        />
      </div>
    </div>
  );
};

export default FinanceProfile;
