import React from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";

const FinanceProfile = () => {
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
    </div>
  );
};

export default FinanceProfile;
