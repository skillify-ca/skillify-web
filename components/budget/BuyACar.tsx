import { OpenDirOptions } from "fs";
import { BuyANewCarTable, BuyAUsedCarTable } from "./BuyACarTable";

const BuyACar = () => {
  return (
    <div className={"grid grid-cols-2 border-collapse  m-4"}>
      <div className={"col-start-1 col-end-2 mt-8 mb-10"}>
        <h1 className={"text-left text-6xl "}> Buy a Car</h1>
        <p className={"text-left mt-10"}>
          You can choose to buy a new or used car. Your family must have at
          least one car. You may buy a car for each parent if you choose.
          Children may not have a car. All cars must have insurance, and each
          car must also pay for gasoline. Your expenses go in section 4 of your
          recording sheet.
        </p>
      </div>
      <div className={"col-start-2 col-end-3"}>
        <div className={"flex items-center justify-center"}>
          <img
            className={""}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EKx8p_hGU9mKTylqObmeLK1dncuZOypUta8sKG4UrHAkXq9vPiXO7lOqenW9eQjDi_Y&usqp=CAU"
            alt="car header"
            width="75%"
            height="auto"
          />
        </div>
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
          "col-start-1 col-end-3 border-t-8 border-collapse border-black mb-5"
        }
      >
        <p className={"flex justify-center text-left text-3xl mt-10"}>
          Car Expense
        </p>
      </div>
      <div className={"col-start-1 col-end-2 "}>
        <p className={"text-center col-end-2 text-1xl font-bold mb-2"}>
          Gasoline
        </p>
        <table className={"flex justify-center items-center"}>
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
      <div className={"col-start-2 col-end-3 "}>
        <p className={"text-center text-1xl font-bold mb-2"}>Car Insurance</p>

        <table className={"flex items-center justify-center"}>
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
