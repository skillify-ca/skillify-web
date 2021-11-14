import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import {
  assignmentSessionSelector,
  setTotalAdditional6,
  setTotalCarCosts6,
  setTotalHousingCost6,
  setTotalExpenses
} from "../../redux/assignmentSession";
import { useAppDispatch } from "../../redux/store";

const TotalExpensesTable = () => {

  const dispatch = useAppDispatch()
  const assignmentSession = useSelector(assignmentSessionSelector)

  const [totalHousingCostValidation, setTotalHousingCostValidation] = useState("");

  const validateHousingCost = (newTotalHousingCost6) => {
    newTotalHousingCost6 === ""
      ? setTotalHousingCostValidation("")
      : assignmentSession.totalHousingCost === newTotalHousingCost6
        ? setTotalHousingCostValidation("Correct")
        : setTotalHousingCostValidation("Wrong");
  };

  const [totalCarCostsValidation, setTotalCarCostsValidation] = useState("");

  const validateTotalCarCosts = (newTotalCarCosts6) => {
    newTotalCarCosts6 === ""
      ? setTotalCarCostsValidation("")
      : assignmentSession.totalCarCosts === newTotalCarCosts6
        ? setTotalCarCostsValidation("Correct")
        : setTotalCarCostsValidation("Wrong");
  };

  const [totalAdditionalValidation, setTotalAdditionalValidation] = useState(
    ""
  );

  const validateTotalAdditional = (newTotalAdditional6) => {
    newTotalAdditional6 === ""
      ? setTotalAdditionalValidation("")
      : assignmentSession.totalAdditional === newTotalAdditional6
        ? setTotalAdditionalValidation("Correct")
        : setTotalAdditionalValidation("Wrong");
  };

  const [totalExpensesValidation, setTotalExpensesValidation] = useState("");

  const validateTotalExpenses = (newTotalExpenses) => {
    newTotalExpenses === ""
      ? setTotalExpensesValidation("")
      : assignmentSession.totalHousingCost6 + assignmentSession.totalCarCosts6 + assignmentSession.totalAdditional6 === ""
        ? setTotalExpensesValidation("")
        : Number.parseInt(assignmentSession.totalHousingCost6) +
          Number.parseInt(assignmentSession.totalCarCosts6) +
          Number.parseInt(assignmentSession.totalAdditional6) ===
          Number.parseInt(newTotalExpenses)
          ? setTotalExpensesValidation("Correct")
          : setTotalExpensesValidation("Wrong");
  };

  return (
    <div>
      <h1 className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-5">
        Section 6: Total Expenses
      </h1>
      <p className="pb-1">
        Add up your expenses in this section and put the total in Box R.
      </p>
      <div className="pb-1">
        <table className="shadow-md">
          <thead>
            <tr>
              <th className="border border-black bg-green-300 w-60">Expense</th>
              <th className="border border-black bg-green-300 w-60">
                Cost per Month
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black bg-white pl-1">
                {" "}
                Total Housing Costs
              </td>
              <td className="border border-black bg-white pl-1">
                H.
                <input
                  value={assignmentSession.totalHousingCost6}
                  onChange={(e) => {
                    const newTotalHousingCost6 = e.target.value;
                    dispatch(setTotalHousingCost6(newTotalHousingCost6));
                    validateHousingCost(newTotalHousingCost6);
                  }}
                  placeholder="Type Numbers Only"
                  className={
                    totalHousingCostValidation === ""
                      ? "bg-white"
                      : totalHousingCostValidation === "Correct"
                        ? "bg-green-100"
                        : totalHousingCostValidation === "Wrong"
                          ? "bg-red-100"
                          : "bg-white"
                  }
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black bg-white pl-1">
                Total Car Costs
              </td>
              <td className="border border-black bg-white pl-1">
                M.
                <input
                  value={assignmentSession.totalCarCosts6}
                  onChange={(e) => {
                    const newTotalCarCosts6 = e.target.value;
                    dispatch(setTotalCarCosts6(newTotalCarCosts6));
                    validateTotalCarCosts(newTotalCarCosts6);
                  }}
                  placeholder="Type Numbers Only"
                  className={
                    totalCarCostsValidation === ""
                      ? "bg-white"
                      : totalCarCostsValidation === "Correct"
                        ? "bg-green-100"
                        : totalCarCostsValidation === "Wrong"
                          ? "bg-red-100"
                          : "bg-white"
                  }
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black bg-white pl-1">
                {" "}
                Total Additional Costs
              </td>
              <td className="border border-black bg-white pl-1">
                Q.
                <input
                  value={assignmentSession.totalAdditional6}
                  onChange={(e) => {
                    const newTotalAdditional6 = e.target.value;
                    dispatch(setTotalAdditional6(newTotalAdditional6));
                    validateTotalAdditional(newTotalAdditional6);
                  }}
                  placeholder="Type Numbers Only"
                  className={
                    totalAdditionalValidation === ""
                      ? "bg-white"
                      : totalAdditionalValidation === "Correct"
                        ? "bg-green-100"
                        : totalAdditionalValidation === "Wrong"
                          ? "bg-red-100"
                          : "bg-white"
                  }
                />
              </td>
            </tr>
            <tr>
              <td className="border border-black bg-green-300 pl-1 font-semibold">
                Total Expenses
              </td>
              <td className="border border-black bg-white pl-1">
                R.
                <input
                  value={assignmentSession.totalExpenses}
                  onChange={(e) => {
                    const newTotalExpenses = e.target.value;
                    dispatch(setTotalExpenses(newTotalExpenses));
                    validateTotalExpenses(newTotalExpenses);
                  }}
                  placeholder="Type Numbers Only"
                  className={
                    totalExpensesValidation === ""
                      ? "bg-white"
                      : totalExpensesValidation === "Correct"
                        ? "bg-green-100"
                        : totalExpensesValidation === "Wrong"
                          ? "bg-red-100"
                          : "bg-white"
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs ml-64 pl-4">**Put this amount in section 7**</p>
    </div>
  );
};

export default TotalExpensesTable;
