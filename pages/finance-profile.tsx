import React, { useState } from "react";
import { FinanceProfileChart } from "../components/finance/FinanceProfileChart";
import IncomeTable from "../components/finance/IncomeTable";
import HouseExpensesTable from "../components/finance/HouseExpensesTable";

const FinanceProfile = () => {
  const [yourMonthlyIncome, setYourMonthlyIncome] = useState("");
  const [spouseMonthlyIncome, setSpouseMounthlyIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
  const [housePayment, setHousePayment] = useState("");
  const [electricBill, setElectricBill] = useState("");
  const [gasBill, setGasBill] = useState("");
  const [waterBill, setWaterBill] = useState("");
  const [totalHousingCost, setTotalHousingCost] = useState("");
  const [homeType, setHomeType] = useState("");

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
          value={yourMonthlyIncome}
          setValue={setYourMonthlyIncome}
          value2={spouseMonthlyIncome}
          setValue2={setSpouseMounthlyIncome}
          value3={totalMonthlyIncome}
          setValue3={setTotalMonthlyIncome}
        />
      </div>
      <div>
        <HouseExpensesTable
          housePayment = {housePayment}
          setHousePayment = {setHousePayment}
          electricBill = {electricBill}
          setElectricBill = {setElectricBill}
          gasBill = {gasBill}
          setGasBill = {setGasBill}
          waterBill = {waterBill}
          setWaterBill = {setWaterBill}
          totalHousingCost = {totalHousingCost}
          setTotalHousingCost = {setTotalHousingCost}
          homeType = {homeType}
          setHomeType = {setHomeType}
        />
      </div>
    </div>
  );
};

export default FinanceProfile;
