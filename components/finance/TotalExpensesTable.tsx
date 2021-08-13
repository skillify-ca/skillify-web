import { ReactNode, useState } from "react";

export interface TotalExpensesTableProps {
  totalHousingCost6: string;
  setTotalHousingCost6: (TotalHousingCost: string) => void;
  totalCarCosts6: string;
  setTotalCarCosts6: (totalCarCosts6: string) => void;
  totalAdditional6: string;
  setTotalAdditional6: (totalAdditional6: string) => void;
  totalHousingCost: string;
  setTotalHousingCost: (totalHousingCost: string) => void;
  totalCarCosts: string;
  setTotalCarCosts: (totalCarCosts: string) => void;
  totalAdditional: string;
  setTotalAdditional: (totalAdditional: string) => void;
  totalExpenses: string;
  setTotalExpenses: (totalExpenses: string) => void;
}

const TotalExpensesTable = ({
  totalHousingCost6,
  setTotalHousingCost6,
  totalCarCosts6,
  setTotalCarCosts6,
  totalAdditional6,
  setTotalAdditional6,
  totalHousingCost,
  setTotalHousingCost,
  totalCarCosts,
  setTotalCarCosts,
  totalAdditional,
  setTotalAdditional,
  totalExpenses,
  setTotalExpenses,
}: TotalExpensesTableProps) => {
  const [totalHousingCostValidation, setTotalHousingCostValidation] = useState(
    ""
  );

  const validateHousingCost = (newTotalHousingCost6) => {
    newTotalHousingCost6 === ""
      ? setTotalHousingCostValidation("")
      : totalHousingCost === newTotalHousingCost6
      ? setTotalHousingCostValidation("Correct")
      : setTotalHousingCostValidation("Wrong");
  };

  const [totalCarCostsValidation, setTotalCarCostsValidation] = useState("");

  const validateTotalCarCosts = (newTotalCarCosts6) => {
    newTotalCarCosts6 === ""
      ? setTotalCarCostsValidation("")
      : totalCarCosts === newTotalCarCosts6
      ? setTotalCarCostsValidation("Correct")
      : setTotalCarCostsValidation("Wrong");
  };

  const [totalAdditionalValidation, setTotalAdditionalValidation] = useState(
    ""
  );

  const validateTotalAdditional = (newTotalAdditional6) => {
    newTotalAdditional6 === ""
      ? setTotalAdditionalValidation("")
      : totalAdditional === newTotalAdditional6
      ? setTotalAdditionalValidation("Correct")
      : setTotalAdditionalValidation("Wrong");
  };

  const [totalExpensesValidation, setTotalExpensesValidation] = useState("");

  const validateTotalExpenses = (newTotalExpenses) => {
    newTotalExpenses === ""
      ? setTotalExpensesValidation("")
      : totalHousingCost6 + totalCarCosts6 + totalAdditional6 === ""
      ? setTotalExpensesValidation("")
      : Number.parseInt(totalHousingCost6) +
          Number.parseInt(totalCarCosts6) +
          Number.parseInt(totalAdditional6) ===
        Number.parseInt(newTotalExpenses)
      ? setTotalExpensesValidation("Correct")
      : setTotalExpensesValidation("Wrong");
  };

  return (
    <div>
      <p className="font-bold mt-10">Section 6: Total Expenses</p>
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
                  value={totalHousingCost6}
                  onChange={(e) => {
                    const newTotalHousingCost6 = e.target.value;
                    setTotalHousingCost6(newTotalHousingCost6);
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
                  value={totalCarCosts6}
                  onChange={(e) => {
                    const newTotalCarCosts6 = e.target.value;
                    setTotalCarCosts6(newTotalCarCosts6);
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
                  value={totalAdditional6}
                  onChange={(e) => {
                    const newTotalAdditional6 = e.target.value;
                    setTotalAdditional6(newTotalAdditional6);
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
                  value={totalExpenses}
                  onChange={(e) => {
                    const newTotalExpenses = e.target.value;
                    setTotalExpenses(newTotalExpenses);
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
