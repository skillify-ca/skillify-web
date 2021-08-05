import React, { useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";

const FinanceProfile = () => {
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");
  const [spouseMonthlyIncome, setSpouseMounthlyIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
  const [sumValidation, setSumValidation] = useState("");
  const [backgroundColour, getBackgroundColour] = useState("bg-white");

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <FinanceProfileChart
        individualOccupation="Fireman"
        individualSalary="3000"
        maritalStatus="Single"
        numberOfChildren="3"
        spouseOccupation="Mailman"
        spouseSalary="3500"
      />
      <div className={"mt-8"}>
        <IncomeTable
          monthlyIncome={yourMonthlyIncome}
          setMonthlyIncome={setYourMonthlyIncome}
          spouseMonthlyIncome={spouseMonthlyIncome}
          setSpouseMonthlyIncome={setSpouseMounthlyIncome}
          totalMonthlyIncome={totalMonthlyIncome}
          setTotalMonthlyIncome={setTotalMonthlyIncome}
          sumValidation={sumValidation}
          setSumValidation={setSumValidation}
          backgroundColour={backgroundColour}
          getBackgroundColour={getBackgroundColour}
        />
      </div>
    </div>
  );
};

export default FinanceProfile;
