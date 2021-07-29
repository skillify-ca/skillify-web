import React from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";

const FinanceProfile = () => {
  /// Add useState here

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
    </div>
  );
};

export default FinanceProfile;
