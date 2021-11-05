import { useState } from "@storybook/client-api";
import { useSelector } from "react-redux";
import FinanceProfile from "../../pages/finance-profile";
import {
  assignmentSessionSelector,
  setTotalMonthlySection7,
  setTotalExpensesSection7,
  setTotalMoneyRemaining,
  setMonthlyIncomeValidation,
  setTotalExpenseValidation,
} from "../../redux/assignmentSession";
import { useAppDispatch } from "../../redux/store";
import IncomeTable from "./IncomeTable";

export interface MoneyRemainingTableProps {
  surpriseValue: number;
  validateTotalMoneyRemaining: (totalMoneyRemaining: string) => void;
}

const MoneyRemainingTable = ({
  surpriseValue,
  validateTotalMoneyRemaining,
}: MoneyRemainingTableProps) => {

  const dispatch = useAppDispatch()
  const assignmentSession = useSelector(assignmentSessionSelector)

  const validateTotalIncome = (newTotalMonthlySection7) => {
    newTotalMonthlySection7 === ""
      ? dispatch(setMonthlyIncomeValidation(""))
      : assignmentSession.totalMonthlyIncome === newTotalMonthlySection7
        ? dispatch(setMonthlyIncomeValidation("Correct"))
        : dispatch(setMonthlyIncomeValidation("Wrong"));
  };
  const validateTotalExpenses = (newTotalExpensesSection7) => {
    newTotalExpensesSection7 === ""
      ? dispatch(setTotalExpenseValidation(""))
      : assignmentSession.totalExpenses === newTotalExpensesSection7
        ? dispatch(setTotalExpenseValidation("Correct"))
        : dispatch(setTotalExpenseValidation("Wrong"));
  };

  return (
    <div>
      <h1 className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-4">
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
                  value={assignmentSession.totalMonthlySection7}
                  onChange={(e) => {
                    const newTotalMonthlySection7 = e.target.value;
                    dispatch(setTotalMonthlySection7(newTotalMonthlySection7));
                    validateTotalIncome(newTotalMonthlySection7);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.monthlyIncomeValidation === ""
                      ? "bg-white"
                      : assignmentSession.monthlyIncomeValidation === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.monthlyIncomeValidation === "Wrong"
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
                  value={assignmentSession.totalExpensesSection7}
                  onChange={(e) => {
                    const newTotalExpensesSection7 = e.target.value;
                    dispatch(setTotalExpensesSection7(newTotalExpensesSection7));
                    validateTotalExpenses(newTotalExpensesSection7);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.totalExpenseValidation === ""
                      ? "bg-white"
                      : assignmentSession.totalExpenseValidation === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.totalExpenseValidation === "Wrong"
                          ? "bg-red-200"
                          : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
          {assignmentSession.isSurpriseVisible && (
            <tr>
              <td className={"border border-black"}>
                <p className={"mx-2"}>Surprise Amount</p>
              </td>
              <td className={"border border-black"}>
                <p className={"mx-2"}>{surpriseValue}</p>
              </td>
            </tr>
          )}
          <tr>
            <td className={"border border-black bg-green-300 font-bold"}>
              {" "}
              <p className={"mx-2"}>Total Money Remaining</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              <p className={"mx-2"}>R.</p>
              <div>
                <input
                  value={assignmentSession.totalMoneyRemaining}
                  onChange={(e) => {
                    const newTotalMoneyRemaining = e.target.value;
                    dispatch(setTotalMoneyRemaining(newTotalMoneyRemaining));
                    validateTotalMoneyRemaining(newTotalMoneyRemaining);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.moneyRemValidation === ""
                      ? "bg-white"
                      : assignmentSession.moneyRemValidation === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.moneyRemValidation === "Wrong"
                          ? "bg-red-200"
                          : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-60 text-xs"}>**Put this amount in section 6**</p>
    </div>
  );
};
export default MoneyRemainingTable;
