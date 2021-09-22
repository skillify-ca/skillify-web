import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import { GroceryTable } from "./BuyAHomeTables";
export interface BuyGroceriesProps {}

export const BuyGroceries = ({}: BuyGroceriesProps) => {
  return (
    <div className={""}>
      <ServiceHeader
        mainHeader="Buy Groceries"
        imgHeader="/images/groceries.png"
        subHeader=" Use the chart to determine how much food will cost for each person in your family, including children. Your expenses go in section 5 of your recording sheet.
"
      />

      <div className=" flex flex-wrap justify-center border-t-8 border-black ">
        <div className="text-left text-4xl py-4 pr-40 mt-10"> Groceries</div>
        <img
          className="w-2/12 h-1/6 justify-center mt-10"
          src="/images/grocerybag.png"
        />
        <div className="flex flex-wrap justify-center p-3 gap-x-4 gap-y-4">
          <GroceryTable />
        </div>
      </div>
    </div>
  );
};
