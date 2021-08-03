import { sum } from "lodash";
import { ReactNode, useState } from "react";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

export interface CarExpenseTableProps {
  carPayment1: string;
  setcarPayment1: (carPayment1: string) => void; //Line I
  carPayment2: string;
  setcarPayment2: (carPayment2: string) => void; //Line J
  insuranceCar: string;
  setinsuranceCar: (insuranceCar: string) => void; //Line K
  gasoline: string;
  setgasoline: (gasoline: string) => void; //Line L
  totalCarCosts: string;
  settotalCarCosts: (totalCarCosts: string) => void; //Line C
  sumValidationCar: string;
  setsumValidationCar: (sumValidationCar: string) => void;
}

const CarExpenseTable = ({
  carPayment1,
  setcarPayment1,
  carPayment2,
  setcarPayment2,
  insuranceCar,
  setinsuranceCar,
  gasoline,
  setgasoline,
  totalCarCosts,
  settotalCarCosts,
  sumValidationCar,
  setsumValidationCar,
}: CarExpenseTableProps) => {
  return (
    <div>
      {" "}
      <h1 className={"mb-2 font-bold"}>Section 4: Car Expenses</h1>
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
            <th className="w-1/2 font-bold text-center bg-gray-200 border border-black">
              {" "}
              Expense
            </th>
            <th className="w-1/2 font-bold text-cetner bg-gray-200 border border-black">
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
                  value={carPayment1}
                  onChange={(e) => setcarPayment2(e.target.value)}
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
                  value={carPayment2}
                  onChange={(e) => setcarPayment2(e.target.value)}
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
                  value={insuranceCar}
                  onChange={(e) => setinsuranceCar(e.target.value)}
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
                  value={gasoline}
                  onChange={(e) => setgasoline(e.target.value)}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black bg-gray-300">
              <p className={"mx-2 font-bold"}>Total Monthly Income</p>
            </td>
            <td className="border border-black flex flex-nowrap">
              <p className={"mx-2"}>M.</p>
              <div className={"ml-2"}>
                <input
                  value={totalCarCosts}
                  onChange={(e) => settotalCarCosts(e.target.value)}
                  placeholder="Type numbers only"
                  {...(+carPayment1 +
                    +carPayment2 +
                    +insuranceCar +
                    +gasoline ===
                  0
                    ? (sumValidationCar = "")
                    : +carPayment1 +
                        +carPayment2 +
                        +insuranceCar +
                        +gasoline ===
                      +totalCarCosts
                    ? (sumValidationCar = "Correct")
                    : (sumValidationCar = "Wrong"))}
                  className={
                    sumValidationCar === ""
                      ? "bg-white"
                      : sumValidationCar === "Correct"
                      ? "bg-green-200"
                      : sumValidationCar === "Wrong"
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
