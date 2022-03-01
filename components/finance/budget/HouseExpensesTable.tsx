import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import {
  assignmentSessionSelector,
  setHomeType,
  setHousePayment,
  setElectricBill,
  setGasBill,
  setWaterBill,
  setTotalHousingCost,
} from "../../../redux/assignmentSession";
import { useAppDispatch } from "../../../redux/store";

const HouseExpensesTable = () => {
  const assignmentSession = useSelector(assignmentSessionSelector);
  const dispatch = useAppDispatch();

  const [validateTotal, setValidateTotal] = useState("");

  const validate = (newTotalHousingCost) => {
    assignmentSession.housePayment +
      assignmentSession.electricBill +
      assignmentSession.gasBill +
      assignmentSession.waterBill ===
    ""
      ? setValidateTotal("")
      : Number.parseInt(assignmentSession.housePayment) +
          Number.parseInt(assignmentSession.electricBill) +
          Number.parseInt(assignmentSession.gasBill) +
          Number.parseInt(assignmentSession.waterBill) ===
        Number.parseInt(newTotalHousingCost)
      ? setValidateTotal("CORRECT")
      : setValidateTotal("WRONG");
  };

  return (
    <div>
      <div>
        <div className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-5">
          Section 3: Housing Expenses
        </div>
        <p className="pb-1">
          Which home do you choose for your family?{" "}
          <select
            name="home type"
            id="home type"
            className="bg-blue-100 rounded-md w-36"
            value={assignmentSession.homeType}
            onChange={(e) => {
              const newHomeType = e.target.value;
              dispatch(setHomeType(newHomeType));
            }}
          >
            <option disabled selected>
              Home Type
            </option>
            <option value="farm house">Farm House</option>
            <option value="House in the Suburbs">Suburb House</option>
            <option value="Apartment">Apartment</option>
            <option value="City Loft">City Loft</option>
          </select>
        </p>
        <p className="pb-3">
          How many bedrooms?{" "}
          <input
            type="number"
            className="bg-blue-100 rounded-sm w-10 text-center"
          />
          How many baths?{" "}
          <input
            type="number"
            className="bg-blue-100 rounded-sm w-10 text-center"
          />
        </p>
        <p className="pb-3">
          Add up your expenses in this section and put the total in Box H.
        </p>
      </div>

      <div className="pb-1">
        <table className="shadow-md">
          <thead>
            <tr>
              <th className="border border-black w-60 bg-green-300">Expense</th>
              <th className="border border-black w-60 bg-green-300">
                Cost Per Month
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-black pl-1 bg-white">
                House Payment
              </td>
              <td className="border border-black pl-1 bg-white flex flex-nowrap">
                D.
                <div className="ml-2">
                  <input
                    value={assignmentSession.housePayment}
                    onChange={(e) => {
                      const newHousePayment = e.target.value;
                      dispatch(setHousePayment(newHousePayment));
                    }}
                    placeholder="Enter amount"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black pl-1 bg-white">
                Electric Bill
              </td>
              <td className="border border-black pl-1 bg-white flex flex-nowrap">
                E.
                <div className="ml-2">
                  <input
                    value={assignmentSession.electricBill}
                    onChange={(e) => {
                      const newElectricBill = e.target.value;
                      dispatch(setElectricBill(newElectricBill));
                    }}
                    placeholder="Enter amount"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black pl-1 bg-white">Gas Bill</td>
              <td className="border border-black pl-1 bg-white flex flex-nowrap">
                F.
                <div className="ml-2">
                  <input
                    value={assignmentSession.gasBill}
                    onChange={(e) => {
                      const newGasBill = e.target.value;
                      dispatch(setGasBill(newGasBill));
                    }}
                    placeholder="Enter amount"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black pl-1 bg-white">Water Bill</td>
              <td className="border border-black pl-1 bg-white flex flex-nowrap">
                G.
                <div className="ml-2">
                  <input
                    value={assignmentSession.waterBill}
                    onChange={(e) => {
                      const newWaterBill = e.target.value;
                      dispatch(setWaterBill(e.target.value));
                    }}
                    placeholder="Enter amount"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black font-bold pl-1 bg-green-300">
                Total Housing Costs
              </td>
              <td className="border border-black pl-1 bg-white flex flex-nowrap">
                H.
                <div className="ml-2">
                  <input
                    value={assignmentSession.totalHousingCost}
                    onChange={(e) => {
                      const newTotalHousingCost = e.target.value;
                      dispatch(setTotalHousingCost(newTotalHousingCost));
                      validate(newTotalHousingCost);
                    }}
                    placeholder="Enter amount"
                    id="totalHousingExpensesInput"
                    className={
                      validateTotal == ""
                        ? "bg-white"
                        : validateTotal == "CORRECT"
                        ? "bg-green-100"
                        : validateTotal == "WRONG"
                        ? "bg-red-100"
                        : "bg-white"
                    }
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs ml-72 pl-4">**Put this amount in section 6**</p>
    </div>
  );
};

export default HouseExpensesTable;
