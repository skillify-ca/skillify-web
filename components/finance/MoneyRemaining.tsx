import { useState } from "@storybook/client-api";
import FinanceProfile from "../../pages/finance-profile";
import IncomeTable from "./IncomeTable";

export interface MoneyRemainingTableProps {
  totalMonthlySection7: string;
  setTotalMonthlySection7: (totalMonthlySection7: string) => void;
  totalExpensesSection7: string;
  setTotalExpensesSection7: (totalExpensesSection7: string) => void;
  totalMoneyRemaining: string;
  setTotalMoneyRemaining: (totalMoneyRemaining: string) => void;
  monthlyIncomeValidation: String;
  setMonthlyIncomeValidation: (monthlyIncomeValidation: string) => void;
  totalExpenseValidation: string;
  setTotalExpenseValidation: (totalExpenseValidation: string) => void;
  moneyRemValidation: string;
  setMoneyRemValidation: (moneyRemValidation: string) => void;
  totalMonthlyIncome: string;
  setTotalMonthlyIncome: (totalMonthlyIncome: string) => void;
  totalExpenses: string;
  setTotalExpenses: (totalExpenses: string) => void;
}

const MoneyRemainingTable = ({
  totalMonthlySection7,
  setTotalMonthlySection7,
  totalExpensesSection7,
  setTotalExpensesSection7,
  totalMoneyRemaining,
  setTotalMoneyRemaining,
  monthlyIncomeValidation,
  setMonthlyIncomeValidation,
  totalExpenseValidation,
  setTotalExpenseValidation,
  moneyRemValidation,
  setMoneyRemValidation,
  totalMonthlyIncome,
  setTotalMonthlyIncome,
  totalExpenses,
  setTotalExpenses,
}: MoneyRemainingTableProps) => {
  const validateTotalIncome = (newTotalMonthlySection7) => {
    newTotalMonthlySection7 === ""
      ? setMonthlyIncomeValidation("")
      : totalMonthlyIncome === newTotalMonthlySection7
      ? setMonthlyIncomeValidation("Correct")
      : setMonthlyIncomeValidation("Wrong");
  };
  const validateTotalExpenses = (newTotalExpensesSection7) => {
    newTotalExpensesSection7 === ""
      ? setTotalExpenseValidation("")
      : totalExpenses === newTotalExpensesSection7
      ? setTotalExpenseValidation("Correct")
      : setTotalExpenseValidation("Wrong");
  };
  const validateTotalMoneyRemaining = (newTotalMoneyRemaining) => {
    newTotalMoneyRemaining === ""
      ? setMoneyRemValidation("")
      : totalMonthlySection7 + totalExpensesSection7 === ""
      ? setMoneyRemValidation("")
      : Number.parseInt(totalMonthlySection7) +
          Number.parseInt(totalExpensesSection7) ===
        Number.parseInt(newTotalMoneyRemaining)
      ? setMoneyRemValidation("Correct")
      : setMoneyRemValidation("Wrong");
  };

  return (
    <div>
      <h1 className={"font-bold mt-10"}>
        Section 7: Money remaining after expenses are paid
      </h1>
      <p> Subtract your total expenses from your total monthly income.</p>
      <table className={"fixed-width w-auto border-collapse"}>
        <thead>
          <tr>
            <th className="w-1/2"></th>
            <th className="w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Total Monthly Income</p>
            </td>
            <td className={"border border-black flex flex-nowwrap"}>
              <p className={"mx-2"}>C.</p>
              <div>
                <input
                  value={totalMonthlySection7}
                  onChange={(e) => {
                    const newTotalMonthlySection7 = e.target.value;
                    setTotalMonthlySection7(newTotalMonthlySection7);
                    validateTotalIncome(newTotalMonthlySection7);
                  }}
                  placeholder="Type numbers only"
                  className={
                    monthlyIncomeValidation === ""
                      ? "bg-white"
                      : monthlyIncomeValidation === "Correct"
                      ? "bg-green-200"
                      : monthlyIncomeValidation === "Wrong"
                      ? "bg-red-200"
                      : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Total Expenses</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              {" "}
              <p className={"mx-2"}>R.</p>
              <div>
                <input
                  value={totalExpensesSection7}
                  onChange={(e) => {
                    const newTotalExpensesSection7 = e.target.value;
                    setTotalExpensesSection7(newTotalExpensesSection7);
                    validateTotalExpenses(newTotalExpensesSection7);
                  }}
                  placeholder="Type numbers only"
                  className={
                    totalExpenseValidation === ""
                      ? "bg-white"
                      : totalExpenseValidation === "Correct"
                      ? "bg-green-200"
                      : totalExpenseValidation === "Wrong"
                      ? "bg-red-200"
                      : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black bg-green-300 font-bold"}>
              {" "}
              <p className={"mx-2"}>Total Money Remaining</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              <p className={"mx-2"}>S.</p>
              <div>
                <input
                  value={totalMoneyRemaining}
                  onChange={(e) => {
                    const newTotalMoneyRemaining = e.target.value;
                    setTotalMoneyRemaining(newTotalMoneyRemaining);
                    validateTotalMoneyRemaining(newTotalMoneyRemaining);
                  }}
                  placeholder="Type numbers only"
                  className={
                    moneyRemValidation === ""
                      ? "bg-white"
                      : moneyRemValidation === "Correct"
                      ? "bg-green-200"
                      : moneyRemValidation === "Wrong"
                      ? "bg-red-200"
                      : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-60 text-xs"}>**Put this amount in section 6** </p>
      <p>Test = {monthlyIncomeValidation} </p>
    </div>
  );
};
export default MoneyRemainingTable;
