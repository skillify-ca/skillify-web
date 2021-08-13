import { OpenDirOptions } from "fs";
import { BuyANewCarTable, BuyAUsedCarTable } from "./BuyACarTable";
export interface BuyACarProps {
  Make: string;
  setMake: (Make: string) => void;
  Model: string;
  setModel: (setModel: string) => void;
  Doors: string;
  setDoors: (Doors: string) => void;
  Cost: string;
  setCost: (Cost: string) => void;
  Year: string;
  setYear: (Year: string) => void;
}

const BuyACar = ({
  Make,
  setMake,
  Model,
  setModel,
  Doors,
  setDoors,
  Cost,
  setCost,
}: BuyACarProps) => {
  return (
    <div
      className={"grid grid-cols-2 border-collapse  border-4 border-black m-8"}
    >
      <div className={"col-start-1 col-end-2 mt-8 ml-20 mb-8"}>
        <h1 className={"text-center text-6xl ml-24"}> Buy a Car</h1>
        <p className={"text-left mt-10"}>
          You can choose to buy a new or used car. Your family must have at
          least one car. You may buy a car for each parent if you choose.
          Children may not have a car. All cars must have insurance, and each
          car must also pay for gasoline. Your expenses go in section 4 of your
          recording sheet.
        </p>
      </div>
      <div className={"col-start-2 col-end-3"}>
        <img
          className={"mb-3 ml-16"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EKx8p_hGU9mKTylqObmeLK1dncuZOypUta8sKG4UrHAkXq9vPiXO7lOqenW9eQjDi_Y&usqp=CAU"
          alt="car header"
          width="50%"
          height="auto"
        />
      </div>
      <div
        className={
          "border-collapse border-t-8 border-black col-start-1 col-end-3 mb-16"
        }
      >
        <p className={"text-center text-3xl col-span-2 mb-4 mt-6"}>
          Buy a New Car
        </p>
        <table className={"table-fixed w-full border-collapse"}>
          <thead>
            <tr>
              <th className={"w-1/4 border border-black bg-green-300"}>Make</th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                Model
              </th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                {" "}
                2-door/4-door
              </th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                Cost per Month
              </th>
            </tr>
          </thead>
          <tbody>
            {BuyANewCarTable.map((BuyACarTable) => (
              <tr>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Make}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Model}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Doors}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={
          "col-start-1 col-end-3 border-t-8 border-collapse border-black mb-20"
        }
      >
        <p className={"text-center text-3xl col-span-2 mb-4 mt-10"}>
          Buy a Used Car
        </p>
        <table className={"table-fixed w-full border-collapse"}>
          <thead>
            <tr>
              <th className={"w-1/4 border border-black bg-green-300"}>Year</th>
              <th className={"w-1/4 border border-black bg-green-300"}>Make</th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                Model
              </th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                {" "}
                2-door/4-door
              </th>
              <th className={"w-1/4 border border-black bg-green-300"}>
                Cost per Month
              </th>
            </tr>
          </thead>
          <tbody>
            {BuyAUsedCarTable.map((BuyACarTable) => (
              <tr>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Year}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Make}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Model}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Doors}
                </td>
                <td className={"border border-black text-center"}>
                  {BuyACarTable.Cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={
          "col-start-1 col-end-2 border-t-8 border-collapse border-black mb-20"
        }
      >
        <p className={"text-left text-3xl mb-4 mt-10 ml-6"}>Car Expense</p>
        <p className={"text-center col-end-1 text-2xl ml-6"}>Gasoline</p>
        <table className={"mx-40"}>
          <thead>
            <tr>
              <th className={"text-center bg-green-300 border border-black"}>
                {" "}
                Number of cars
              </th>
              <th className={"text-center bg-green-300 border border-black"}>
                {" "}
                Cost per month
              </th>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 1 </td>
              <td className={"text-center border border-black"}> $80 </td>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 2 </td>
              <td className={"text-center border border-black"}> $160 </td>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 3 </td>
              <td className={"text-center border border-black"}> $240 </td>
            </tr>
          </thead>
        </table>
      </div>
      <div
        className={
          "col-start-2 col-end-3 border-t-8 border-collapse border-black mb-20"
        }
      >
        <p className={"text-center text-2xl mb-4 mt-16 ml-6"}>Car Insurance</p>
        <table className={"col-start-2 ml-36"}>
          <thead>
            <tr>
              <th className={"text-center bg-green-300 border border-black"}>
                {" "}
                Number of cars
              </th>
              <th className={"text-center bg-green-300 border border-black"}>
                {" "}
                Cost per month
              </th>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 1 </td>
              <td className={"text-center border border-black"}> $90 </td>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 2 </td>
              <td className={"text-center border border-black"}> $150 </td>
            </tr>
            <tr>
              <td className={"text-center border border-black"}> 3 </td>
              <td className={"text-center border border-black"}> $180 </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default BuyACar;
