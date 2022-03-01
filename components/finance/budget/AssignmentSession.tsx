import React, { useState, useRef, useEffect } from "react";
import IncomeTable from "./IncomeTable";
import {
  SurpriseCard,
  SurpriseCardType,
} from "../../../pages/api/finance/surprise";
import {
  FinanceProfileType,
  financialProfileData,
  MaritalStatus,
} from "../../../pages/api/finance/profile";
import { FinanceProfileChart } from "./FinanceProfileChart";
import { Button } from "../../ui/Button";
import BuyAHome from "./BuyAHome";
import BuyACar from "./BuyACar";
import { BuyAPhone } from "./BuyAPhone";
import { BuyGroceries } from "./BuyGroceries";
import { SectionOneInput } from "./SectionOneInput";
import HouseExpensesTable from "./HouseExpensesTable";
import CarExpenseTable from "./CarExpenseTable";
import AdditionalTable from "./AdditionalExpense";
import TotalExpensesTable from "./TotalExpensesTable";
import MoneyRemainingTable from "./MoneyRemaining";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { SurpriseComponent } from "./SurpriseComponent";
import {
  getRandomItemFromArray,
  getRndInteger,
} from "../../../pages/api/random";

export interface FinanceProfileProps {
  onClick: () => void;
  profileData: FinanceProfileType;
}

const AssignmentSession = ({ onClick, profileData }: FinanceProfileProps) => {
  const [isMarried, setMarriage] = useState(MaritalStatus.SINGLE);
  const [hasChildren, setChildren] = useState(false);

  const [individualOccupation, setIndividualOccupation] = useState("");
  const [individualSalary, setIndividualSalary] = useState(0);
  const [spouseOccupation, setSpouseOccupation] = useState("");
  const [spouseSalary, setSpouseSalary] = useState(0);
  const [sectionOneValidation, setSectionOneValidation] = useState(false);

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

  const [isSubmitModalShowing, setIsSubmitModalShowing] = useState(false);
  const [surpriseData, setSurpriseData] = useState<SurpriseCardType>();
  const [isSurpriseVisible, setIsSurpriseVisible] = useState(false);

  useEffect(() => {
    const randomSurprise: SurpriseCardType =
      getRandomItemFromArray(SurpriseCard);
    setSurpriseData(randomSurprise);
  }, []);

  const validateTotalMoneyRemaining = (newTotalMoneyRemaining) => {
    if (newTotalMoneyRemaining === "") {
      setMoneyRemValidation("");
    } else {
      if (
        Number.parseInt(totalMonthlySection7) -
          Number.parseInt(totalExpensesSection7) ===
        Number.parseInt(newTotalMoneyRemaining)
      ) {
        setMoneyRemValidation("Correct");
      } else {
        setMoneyRemValidation("Wrong");
      }
    }
  };

  const onSubmit = () => {
    if (
      moneyRemValidation === "Correct" &&
      Number.parseInt(totalMoneyRemaining) > 0
    ) {
      setIsSubmitModalShowing((e) => !e);
    }
  };

  const onModalClose = () => {
    const surpriseMoneyRemaining =
      Number.parseInt(totalMoneyRemaining) + surpriseData.surpriseValue;

    if (isSubmitModalShowing) {
      setTotalMoneyRemaining(surpriseMoneyRemaining.toString());
      setIsSurpriseVisible(true);
      setIsSubmitModalShowing((e) => !e);

      validateTotalMoneyRemaining(surpriseMoneyRemaining);
    }
  };

  return (
    <div className="h-screen grid grid-cols-5 bg-scroll bg-white">
      <div className={"h-full overflow-scroll col-start-1 col-end-4"}>
        <header
          className={
            "flex items-center justify-center h-108 mb-12 bg-fixed bg-center bg-cover bg-finance-life"
          }
        >
          <div
            className={
              "flex justify-center items-center text-2xl text-white bg-blue-400 bg-opacity-30 w-full h-full"
            }
          >
            Here is your Life Card
          </div>
        </header>
        {profileData && (
          <div className={"flex items-center justify-center my-4"}>
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
            "container flex items-center justify-center h-108 m-auto mb-12 bg-fixed bg-center bg-cover bg-home"
          }
        >
          <div
            className={
              "flex items-center justify-center text-2xl text-white bg-purple-400 w-full h-full bg-opacity-30"
            }
          >
            {" "}
            Your Home
          </div>
        </section>

        <div className={"flex items-center justify-center"}>
          <BuyAHome />
        </div>
        <section
          className={
            "container flex items-center justify-center h-108 m-auto mb-12 bg-fixed bg-centerx bg-car bg-contain"
          }
        >
          <div
            className={
              "flex justify-center items-center text-2xl text-white bg-blue-400 bg-opacity-30 w-full h-full"
            }
          >
            {" "}
            Your Ride
          </div>
        </section>
        <div className={"flex items-center justify-center"}>
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
            "container flex items-center justify-center h-108 m-auto mb-12 bg-fixed bg-left bg-contain bg-no-repeat bg-phone"
          }
        >
          <div
            className={
              "flex justify-center items-center text-2xl text-white bg-green-400 bg-opacity-30 w-full h-full"
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
            "container flex items-center justify-center h-108 m-auto mb-12 bg-fixed bg-left bg-cover bg-no-repeat bg-essentials"
          }
        >
          <div
            className={
              "flex justify-center items-center text-2xl text-white bg-purple-400 bg-opacity-30 w-full h-full"
            }
          >
            {" "}
            Your Food
          </div>
        </section>
        <div className={"flex items-center justify-center p-4 mt-10"}>
          <BuyGroceries />
        </div>
      </div>

      <div
        className={
          "h-full overflow-scroll col-start-4 col-end-6 bg-gray-100 px-8"
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

          <div className={"mb-40"}>
            <IncomeTable />
          </div>
          <div className={"mb-40"}>
            <HouseExpensesTable />
          </div>
          <div className={"mb-40"}>
            <CarExpenseTable />
          </div>
          <div className={"mb-40"}>
            <AdditionalTable />
          </div>
          <div className={"mb-40"}>
            <TotalExpensesTable
              totalHousingCost6={totalHousingCost6}
              setTotalHousingCost6={setTotalHousingCost6}
              totalCarCosts6={totalCarCosts6}
              setTotalCarCosts6={setTotalCarCosts6}
              totalAdditional6={totalAdditional6}
              setTotalAdditional6={setTotalAdditional6}
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
              totalExpenses={totalExpenses}
              setTotalExpenses={setTotalExpenses}
              isSurpriseVisible={isSurpriseVisible}
              setIsSurpriseVisible={setIsSurpriseVisible}
              surpriseValue={surpriseData ? surpriseData.surpriseValue : 0}
              validateTotalMoneyRemaining={validateTotalMoneyRemaining}
            />
            <div className="pt-4">
              <Button
                label="Submit"
                backgroundColor="green"
                textColor="white"
                onClick={
                  isSurpriseVisible &&
                  Number.parseInt(totalMoneyRemaining) +
                    surpriseData.surpriseValue >
                    0
                    ? (e) => onClick()
                    : onSubmit
                }
              ></Button>
            </div>
          </div>
          <Modal
            id="surprise-modal"
            isOpen={isSubmitModalShowing}
            transition={ModalTransition.SCALE}
          >
            <SurpriseComponent
              close={onModalClose}
              surpriseData={surpriseData}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSession;
