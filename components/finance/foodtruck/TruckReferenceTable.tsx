import React from "react";
import { allTrucks } from "../../../pages/api/foodtruck/food";

const TruckReferenceTable = () => {
  return (
    <table className="shadow-md bg-white">
      <thead>
        <tr>
          <th className="bg-gray-300 border border-black text-center w-40">
            Truck Type
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Monthly Cost
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Daily Cost
          </th>
          <th className="bg-gray-300 border border-black text-center w-40">
            Allowed Items
          </th>
        </tr>

        {allTrucks.map((t) => {
          return (
            <tr>
              <td className="border border-black text-center">{t.model}</td>
              <td className="border border-black text-center">{t.fixedCost}</td>
              <td className="border border-black text-center">
                {t.variableCost}
              </td>
              <td className="border border-black text-center">
                {t.allowedItems
                  .map((f) => {
                    return f.name;
                  })
                  .join(", ")}
              </td>
            </tr>
          );
        })}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TruckReferenceTable;
