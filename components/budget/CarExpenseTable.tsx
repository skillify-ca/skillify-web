import { sum } from "lodash";
import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import {
  assignmentSessionSelector,
  setCarInsurance,
  setCarPayment1,
  setCarPayment2,
  setGasoline,
  setSumValidationCar,
  setTotalCarCosts
} from "../../redux/assignmentSession";
import { useAppDispatch } from "../../redux/store";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

const CarExpenseTable = () => {

  const assignmentSession = useSelector(assignmentSessionSelector)
  const dispatch = useAppDispatch()

  const validate = (newTotalCarCosts) => {

    assignmentSession.carPayment1 + assignmentSession.carPayment2 + assignmentSession.carInsurance + assignmentSession.gasoline === ""
      ? dispatch(setSumValidationCar(""))
      : Number.parseInt(assignmentSession.carPayment1) +
        Number.parseInt(assignmentSession.carPayment2) +
        Number.parseInt(assignmentSession.carInsurance) +
        Number.parseInt(assignmentSession.gasoline) ===
        Number.parseInt(newTotalCarCosts)
        ? dispatch(setSumValidationCar("Correct"))
        : dispatch(setSumValidationCar("Wrong"));
  };
  return (
    <div>
      {" "}
      <h1 className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-4">
        Section 4: Car Expenses
      </h1>
      <table className="table-fixed border-collapse w-1/3">
        <thead>
          <tr>
            <th className="w-1/4"></th>
            <th className="w-1/5"></th>
            <th className="w-1/6"></th>
            <th className="w-1/12"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <p className={"mx-2"}>Which car(s) did you buy?</p>
            </td>
            <td className={"border-b-2 border-black flex flex-wrap"}>
              <input placeholder="Name of Car"></input>
            </td>
            <td>
              {" "}
              <p className={"mx-2"}>New or Used?</p>
            </td>
            <td className={"border-b-2 border-black flex flex-wrap"}>
              <input placeholder="Select"></input>{" "}
            </td>
          </tr>
          <tr>
            <td></td>
            <td className={"border-b-2 border-black flex flex-wrap"}>
              <input placeholder="Name of Car"></input>
            </td>
            <td>
              <p className={"mx-2"}>New or Used?</p>
            </td>
            <td className={"border-b-2 border-black flex flex-wrap"}>
              <input placeholder="Select"></input>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"mt-6 mb-6"}>
        Add up your expenses in this section and put the total in Box M.
      </p>
      <table className="table-fixed w-auto border-collapse">
        <thead>
          <tr>
            <th className="w-1/2 font-bold text-center bg-green-300 border border-black">
              {" "}
              Expense
            </th>
            <th className="w-1/2 font-bold text-cetner bg-green-300 border border-black">
              {" "}
              Cost Per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black ">
              {" "}
              <p className={"mx-2"}> Car Payment #1</p>{" "}
            </td>
            <td className="border border-black flex flex-nowrap">
              <p className={"mx-2"}> I. </p>
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.carPayment1}
                  onChange={(e) => {
                    const newCarPayment1 = e.target.value;
                    dispatch(setCarPayment1(newCarPayment1))
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">
              {" "}
              <p className={"mx-2"}>Car Payment #2</p>
            </td>
            <td className="border border-black flex flex-nowrap">
              <p className={"mx-2"}> J. </p>{" "}
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.carPayment2}
                  onChange={(e) => {
                    const newCarPayment2 = e.target.value;
                    dispatch(setCarPayment2(e.target.value))
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">
              {" "}
              <p className={"mx-2"}>Insurance</p>
            </td>
            <td className="border border-black flex flex-wrap">
              <p className={"mx-2"}>K.</p>
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.carInsurance}
                  onChange={(e) => {
                    const newCarInsurance = e.target.value;
                    dispatch(setCarInsurance(e.target.value))
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">
              {" "}
              <p className={"mx-2"}>Gasoline</p>
            </td>
            <td className="border border-black flex flex-wrap">
              <p className={"mx-2"}>L.</p>
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.gasoline}
                  onChange={(e) => {
                    const newGasoline = e.target.value;
                    dispatch(setGasoline(e.target.value))
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black bg-green-300">
              <p className={"mx-2 font-bold"}>Total Car Costs</p>
            </td>
            <td className="border border-black flex flex-nowrap">
              <p className={"mx-2"}>M.</p>
              <div className={"ml-2"}>
                <input
                  value={assignmentSession.totalCarCosts}
                  onChange={(e) => {
                    const newTotalCarCosts = e.target.value;
                    dispatch(setTotalCarCosts(newTotalCarCosts));
                    validate(newTotalCarCosts);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.sumValidationCar === ""
                      ? "bg-white"
                      : assignmentSession.sumValidationCar === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.sumValidationCar === "Wrong"
                          ? "bg-red-200"
                          : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-64 text-xs"}> **Put this amount in section 6**</p>
    </div>
  );
};

export default CarExpenseTable;
