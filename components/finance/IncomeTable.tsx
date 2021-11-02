import { sum } from "lodash";
import { useSelector } from "react-redux";
import {
  assignmentSessionSelector,
  setBackgroundColour,
  setSpouseMonthlyIncome,
  setTotalMonthlyIncome,
  setYourMonthlyIncome
}
  from "../../redux/assignmentSession";
import { useAppDispatch } from "../../redux/store";

const IncomeTable = () => {

  const assignmentSession = useSelector(assignmentSessionSelector)
  const dispatch = useAppDispatch()

  const validate = (newTotalMonthlyIncome: string) => {
    newTotalMonthlyIncome === ""
      ? dispatch(setBackgroundColour(""))
      : Number.parseInt(assignmentSession.yourMonthlyIncome) +
        Number.parseInt(assignmentSession.spouseMonthlyIncome) ===
        Number.parseInt(newTotalMonthlyIncome)
        ? dispatch(setBackgroundColour("Correct"))
        : assignmentSession.yourMonthlyIncome + assignmentSession.spouseMonthlyIncome === ""
          ? dispatch(setBackgroundColour(""))
          : dispatch(setBackgroundColour("Wrong"));
  };

  return (
    <div>
      {" "}
      <h1 className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-5">
        Section 2: Income
      </h1>
      <p>If married, add up your incomes in this section and put the</p>
      <p className={"mb-1"}>
        total in Box C. If you are single, you will only have one income.
      </p>
      <table className="table-fixed w-auto border-collapse">
        <thead>
          <tr>
            <th className="w-1/2"></th>
            <th className="w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black ">
              {" "}
              <p className={"mx-2"}> Your Monthly Income</p>{" "}
            </td>
            <td className="border border-black flex flex-nowrap">
              A.
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.yourMonthlyIncome}
                  onChange={(e) => {
                    const newYourMontlyIncome = e.target.value;
                    dispatch(setYourMonthlyIncome(newYourMontlyIncome));
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">Your Spouses Monthly Income</td>
            <td className="border border-black flex flex-nowrap">
              B.{" "}
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.spouseMonthlyIncome}
                  onChange={(e) => {
                    const newSpouseMonthlyIncome = e.target.value;
                    dispatch(setSpouseMonthlyIncome(newSpouseMonthlyIncome));
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black bg-gray-300">
              Total Monthly Income
            </td>
            <td className="border border-black flex flex-nowrap">
              C.
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.totalMonthlyIncome}
                  onChange={(e) => {
                    const newTotalMonthlyIncome = e.target.value;
                    dispatch(setTotalMonthlyIncome(newTotalMonthlyIncome));
                    validate(newTotalMonthlyIncome);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.backgroundColour === ""
                      ? "bg-white"
                      : assignmentSession.backgroundColour === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.backgroundColour === "Wrong"
                          ? "bg-red-200"
                          : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-64 text-xs"}> **Put this amount in section 7**</p>
    </div>
  );
};

export default IncomeTable;
