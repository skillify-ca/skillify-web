import _, { min } from "lodash";
import React, { useEffect, useRef, useState } from "react";
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
import BuyACar from "../components/finance/BuyACar";
import BuyAHome from "../components/finance/BuyAHome";
import { BuyAPhone } from "../components/finance/BuyAPhone";
import { BuyGroceries } from "../components/finance/BuyGroceries";
import { SurpriseCard } from "./api/finance/surprise";
import { SurpriseComponent } from "../components/finance/SurpriseComponent";

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

  const [totalHousingCost6, setTotalHousingCost6] = useState("");
  const [totalCarCosts6, setTotalCarCosts6] = useState("");
  const [totalAdditional6, setTotalAdditional6] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(""); //Set for Section 6

  const [totalMonthlySection7, setTotalMonthlysection7] = useState("");
  const [totalExpensesSection7, setTotalExpensesSection7] = useState("");
  const [totalMoneyRemaining, setTotalMoneyRemaining] = useState("");
  const [monthlyIncomeValidation, setMonthlyIncomeValidation] = useState("");
  const [totalExpenseValidation, setTotalExpenseValidation] = useState("");
  const [moneyRemValidation, setMoneyRemValidation] = useState("");

  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Doors, setDoors] = useState("");
  const [Cost, setCost] = useState("");
  const [Year, setYear] = useState("");
  const homeRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    // Update the document title using the browser API
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const scrollToHomeSection = () => {
    console.log("ARE WE SCROLLING????");
    homeRef.current.scrollIntoView();
  };

  const scrollToCarSection = () => {
    carRef.current.scrollIntoView();
  };

  return (
    <div className="h-screen grid grid-cols-5 bg-scroll bg-white">
      <div className={"h-full overflow-scroll col-start-1 col-end-4"}>
        <header
          className={
            "flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-finance-life"
          }
        >
          <div
            className={
              "p-5 text-2xl text-white bg-purple-400 bg-opacity-50 rounded-xl"
            }
          >
            Here is your Life Card
          </div>
        </header>
        {profileData && (
          <div className={"flex items-center justify-center p-20"}>
            <FinanceProfileChart
              individualOccupation={profileData.individualOccupation}
              individualSalary={profileData.individualSalary}
              maritalStatus={profileData.maritalStatus}
              numberOfChildren={profileData.numberOfChildren}
              spouseOccupation={profileData.spouseOccupation}
              spouseSalary={profileData.spouseSalary}
            />
          </div>
        )}
        <section
          className={
            "container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-home"
          }
        >
          <div
            className={
              "p-5 text-2xl text-white bg-purple-400 bg-opacity-50 rounded-xl"
            }
          >
            {" "}
            Your Home
          </div>
        </section>

        <div
          className={"flex items-center justify-center p-6"}
          onMouseEnter={scrollToHomeSection}
        >
          <BuyAHome />
        </div>
        <section
          className={
            "container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-centerx bg-car bg-contain"
          }
        >
          <div
            className={
              "p-5 text-2xl text-white bg-purple-400 bg-opacity-50 rounded-xl"
            }
          >
            {" "}
            Your Ride
          </div>
        </section>
        <div
          className={"flex items-center justify-center p-6"}
          onMouseEnter={scrollToCarSection}
        >
          <BuyACar
            Make={Make}
            setMake={setMake}
            Model={Model}
            setModel={setModel}
            Doors={Doors}
            setDoors={setDoors}
            Cost={Cost}
            setCost={setCost}
            Year={Year}
            setYear={setYear}
          />
        </div>
        <section
          className={
            "container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-left bg-contain bg-no-repeat bg-phone"
          }
        >
          <div
            className={
              "p-5 text-2xl text-white bg-purple-400 bg-opacity-50 rounded-xl"
            }
          >
            {" "}
            Your Cell
          </div>
        </section>
        <div className={"flex items-center justify-center"}>
          <BuyAPhone />
        </div>
        <section
          className={
            "container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-left bg-cover bg-no-repeat bg-essentials"
          }
        >
          <div
            className={
              "p-5 text-2xl text-white bg-purple-400 bg-opacity-50 rounded-xl"
            }
          >
            {" "}
            Your Food
          </div>
        </section>
        <div className={"flex items-center justify-center pl-28 mt-10"}>
          <BuyGroceries />
        </div>
        <div className={"flex items-center justify-center pt-6 mt-10"}>
          <SurpriseComponent />
        </div>
      </div>

      <div
        className={
          "h-full overflow-scroll col-start-4 col-end-6 mt-8 bg-gray-100 px-8"
        }
      >
        <div className={"mb-20 border-4 border-black p-6"}>
          <h1 className={"text-xl font-bold mb-5"}>
            Welcome to the Finance Budget Sheet
          </h1>
          <p>
            Use the budget cards on the left column to manage your monthly
            budget! Scroll on the left side of the page to find each section.
            There are 7 sections to completing your monthly budget. Go ahead and
            get started!
          </p>
        </div>
        <div>
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

          {sectionOneValidation ? (
            <div className="flex flex-nowrap">
              {" "}
              Great Job!  
              <img src={"/images/checked-checkbox-16.png"} />
            </div>
          ) : (
            <div className="flex flex-nowrap mb-20">
              {" "}
              Lets take a look back at your work!  
              <img src={"/images/warning-2-16.png"} />
            </div>
          )}
        </div>
        <div className={"mb-40"}>
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
        <div className={"mb-40"} ref={homeRef}>
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
            homeType={homeType}
            setHomeType={setHomeType}
          />
        </div>
        <div className={"mb-40"} ref={carRef}>
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
        <div className={"mb-40"}>
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
        <div className={"mb-40"}>
          <TotalExpensesTable
            totalHousingCost6={totalHousingCost6}
            setTotalHousingCost6={setTotalHousingCost6}
            totalCarCosts6={totalCarCosts6}
            setTotalCarCosts6={setTotalCarCosts6}
            totalAdditional6={totalAdditional6}
            setTotalAdditional6={setTotalAdditional6}
            totalHousingCost={totalHousingCost}
            setTotalHousingCost={setTotalHousingCost}
            totalCarCosts={totalCarCosts}
            setTotalCarCosts={setTotalCarCosts}
            totalAdditional={totalAdditional}
            setTotalAdditional={setTotalAdditional}
            totalExpenses={totalExpenses}
            setTotalExpenses={setTotalExpenses}
          />
        </div>
        <div className={"mb-40"}>
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
      </div>
    </div>
  );
};

export default FinanceProfile;
