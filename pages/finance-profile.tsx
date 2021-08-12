import _, { min } from "lodash";
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
import CarExpenseTable from "../components/finance/CarExpenseTable";
import AdditionalTable from "../components/finance/AdditionalExpense";
import MoneyRemainingTable from "../components/finance/MoneyRemaining";
import TotalExpensesTable from "../components/finance/TotalExpensesTable";

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

  const [backgroundColour, setBackgroundColour] = useState("");
  const [valueTest, setValueTest] = useState("");

  const [isMarried, setMarriage] = useState(MaritalStatus.SINGLE);
  const [hasChildren, setChildren] = useState(false);

  const [individualOccupation, setIndividualOccupation] = useState("");
  const [individualSalary, setIndividualSalary] = useState(0);
  const [spouseOccupation, setSpouseOccupation] = useState("");
  const [spouseSalary, setSpouseSalary] = useState(0);
  const [profileData, setProfileData] = useState<FinanceProfileType>(); //profileData used for Validation in child components
  const [sectionOneValidation, setSectionOneValidation] = useState(false);

  const [carPayment1, setCarPayment1] = useState("");
  const [carPayment2, setCarPayment2] = useState("");
  const [carInsurance, setCarInsurance] = useState("");
  const [gasoline, setGasoline] = useState("");
  const [totalCarCosts, setTotalCarCosts] = useState("");
  const [sumValidationCar, setSumValidationCar] = useState("");

  const [tvInternet, setTvInternet] = useState("");
  const [phone, setPhone] = useState("");
  const [grocery, setGrocery] = useState("");
  const [totalAdditional, setTotalAdditional] = useState("");
  const [sumAddValidation, setSumAddValidation] = useState("");

  const [totalHousingCost6, setTotalHousingCost6] = useState("")
  const [totalCarCosts6, setTotalCarCosts6] = useState("")
  const [totalAdditional6, setTotalAdditional6] = useState("")
  const [totalExpenses, setTotalExpenses] = useState(""); //Set for Section 6

  const [totalMonthlySection7, setTotalMonthlysection7] = useState("");
  const [totalExpensesSection7, setTotalExpensesSection7] = useState("");
  const [totalMoneyRemaining, setTotalMoneyRemaining] = useState("");
  const [monthlyIncomeValidation, setMonthlyIncomeValidation] = useState("");
  const [totalExpenseValidation, setTotalExpenseValidation] = useState("");
  const [moneyRemValidation, setMoneyRemValidation] = useState("");

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
        profileData={profileData}
        sectionOneValidation={sectionOneValidation}
        setSectionOneValidation={setSectionOneValidation}
      />
      <div>
        {sectionOneValidation ? (
          <div className="flex flex-nowrap">
            {" "}
            Great Job!  
            <img src={"/images/checked-checkbox-16.png"} />
          </div>
        ) : (
          <div className="flex flex-nowrap">
            {" "}
            Lets take a look back at your work!  
            <img src={"/images/warning-2-16.png"} />
          </div>
        )}
      </div>

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

      <div>
        <CarExpenseTable
          carPayment1={carPayment1}
          setCarPayment1={setCarPayment1}
          carPayment2={carPayment2}
          setCarPayment2={setCarPayment2}
          carInsurance={carInsurance}
          setCarInsurance={setCarInsurance}
          gasoline={gasoline}
          setGasoline={setGasoline}
          totalCarCosts={totalCarCosts}
          setTotalCarCosts={setTotalCarCosts}
          sumValidationCar={sumValidationCar}
          setSumValidationCar={setSumValidationCar}
        />
      </div>

      <div>
        <AdditionalTable
          tvInternet={tvInternet}
          setTvInternet={setTvInternet}
          phone={phone}
          setPhone={setPhone}
          grocery={grocery}
          setGrocery={setGrocery}
          totalAdditional={totalAdditional}
          setTotalAdditional={setTotalAdditional}
          sumAddValidation={sumAddValidation}
          setSumAddValidation={setSumAddValidation}
        />
      </div>

      <div>
        <TotalExpensesTable 
        totalHousingCost6 = {totalHousingCost6}
        setTotalHousingCost6 = {setTotalHousingCost6}
        totalCarCosts6 = {totalCarCosts6}
        setTotalCarCosts6 = {setTotalCarCosts6}
        totalAdditional6 = {totalAdditional6}
        setTotalAdditional6 = {setTotalAdditional6}
        totalHousingCost = {totalHousingCost}
        setTotalHousingCost = {setTotalHousingCost}
        totalCarCosts = {totalCarCosts}
        setTotalCarCosts = {setTotalCarCosts}
        totalAdditional = {totalAdditional}
        setTotalAdditional = {setTotalAdditional}
        totalExpenses = {totalExpenses}
        setTotalExpenses = {setTotalExpenses}
        />
      </div>

      <div>
        <MoneyRemainingTable
          totalMonthlySection7={totalMonthlySection7}
          setTotalMonthlySection7={setTotalMonthlysection7}
          totalExpensesSection7={totalExpensesSection7}
          setTotalExpensesSection7={setTotalExpensesSection7}
          totalMoneyRemaining={totalMoneyRemaining}
          setTotalMoneyRemaining={setTotalMoneyRemaining}
          monthlyIncomeValidation={monthlyIncomeValidation}
          setMonthlyIncomeValidation={setMonthlyIncomeValidation}
          totalExpenseValidation={totalExpenseValidation}
          setTotalExpenseValidation={setTotalExpenseValidation}
          moneyRemValidation={moneyRemValidation}
          setMoneyRemValidation={setMoneyRemValidation}
          totalMonthlyIncome={totalMonthlyIncome}
          setTotalMonthlyIncome={setTotalMonthlyIncome}
          totalExpenses={totalExpenses}
          setTotalExpenses={setTotalExpenses}
        />
      </div>
    </div> //This is for Section 7
  );
};

export default FinanceProfile;
