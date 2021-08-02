import React, { useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";

const FinanceProfile = () => {
<<<<<<< HEAD
  /// Add useState here
=======
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");
  const [spouseMonthlyIncome, setSpouseMounthlyIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
>>>>>>> fe5fdcbd7232c4422fee2a0780ca61c22ccb41aa

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      TEST
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
