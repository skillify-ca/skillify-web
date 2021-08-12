import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import { GroceryTable } from "./BuyAHomeTables";
export interface BuyGroceriesProps {}

export const BuyGroceries = ({}: BuyGroceriesProps) => {
  return (
    <div>
      <ServiceHeader
        mainHeader="Buy Groceries"
        imgHeader="/images/groceries.png"
        subHeader=" Use the chart to determine how much food will cost for each person in your family, including children. Your expenses go in section 5 of your recording sheet.
"
      />

      <div className=" flex flex-wrap justify-center border-4 border-black w-5/6 rounded-xl">
        <div className="flex flex-nowrap text-right text-6xl py-4 pr-40">
          {" "}
          Groceries
        </div>
        <img
          className="w-2/12 h-1/6 justify-center"
          src="/images/grocerybag.png"
        />
        <div className="flex flex-wrap justify-center p-3 gap-x-4 gap-y-4">
          <GroceryTable />
        </div>
      </div>
    </div>
  );
};
