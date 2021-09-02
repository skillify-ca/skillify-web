import React from "react";
import { allFoods } from "../../pages/api/foodtruck/food";

const FoodReferenceTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-gray-300 border border-black text-center w-40">
            Food Type
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Food Cost
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Food Price
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Quantity per worker per hour
          </th>
        </tr>

        {allFoods.map((f) => {
          return (
            <tr>
              <td className="border border-black text-center">{f.name}</td>
              <td className="border border-black text-center">{f.unitCost}</td>
              <td className="border border-black text-center">
                {f.unitRevenue}
              </td>
              <td className="border border-black text-center">
                {f.qtyProducedPerWorkerHour}
              </td>
            </tr>
          );
        })}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default FoodReferenceTable;
