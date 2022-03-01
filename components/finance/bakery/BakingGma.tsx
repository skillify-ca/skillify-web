import ReactCardFlip from "react";

const BakingGma = () => {
  return (
    <div>
      {" "}
      <div className={"grid grid-cols-2 mt-12"}>
        <div className={" col-start-1 col-span-1  "}>
          <div className={"text-6xl font-bold text-red-200 ml-8"}>
            Get Busy Baking
          </div>
          <div className={"text-3xl  ml-20 mt-4"}> GRANDMA's APPLE PIE</div>
          <div className={"ml-16 mb-4"}>
            {" "}
            Complete the chart to figure out your new recipes
          </div>
        </div>
        <div
          className={
            "col-start-2 col-span-1 mr-8 flex justify-center text-center font-bold "
          }
        >
          Before now, you have only had to worry about baking for a few peopel
          at one time. Now, you will be baking for an entire city of patrons!
          You are going to need to adjust your recipes to make larger batches
          that are equally as delicious.
        </div>
      </div>
      <table className={"table-fixed mx-16 text-xl"}>
        <thead
          className={
            "border border-collapse border-black bg-blue-200 text-center"
          }
        >
          <th className={"w-1/5 border border-collapse border-black"}>
            {" "}
            INGREDIENT
          </th>
          <th className={"w-1/5 border border-black border-collapse"}>
            {" "}
            ORIGINAL AMOUNT
          </th>
          <th className={"w-1/5 border border-black border-collapse"}>
            {" "}
            IMPROPER FRACTION{" "}
          </th>
          <th className={"w-1/5 border border-black border-collapse"}>
            {" "}
            DOUBLED
          </th>
          <th
            className={"w-1/5 bg-green-200 border border-black border-collapse"}
          >
            {" "}
            *BONUS HALVED*
          </th>
        </thead>
        <tbody className={"text-center border border-collapse border-black"}>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> PIE CRUST </td>
            <td className={"border border-black"}> 2 & 3/4 Cups</td>
            <td>
              <input className={" bg-yellow-100"}></input>
            </td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> APPLE </td>
            <td className={"border border-black"}> 5 & 3/4 Cups</td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> BUTTER </td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>7/4 Cups</td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> FLOUR </td>
            <td className={"border border-black"}> 5/8 Cup</td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> CINNAMON </td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}> 13/4 Cups</td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> NUTMEG </td>
            <td className={"border border-black"}> 2 & 2/3 TBSP</td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> SUGAR </td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>
              {" "}
              <input className={" bg-yellow-100 "}></input>
            </td>
            <td className={"border border-black"}>2 & 1/2 Cups</td>
            <td>
              <input className={" bg-yellow-100 "}></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BakingGma;
