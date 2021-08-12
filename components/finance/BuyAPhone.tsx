import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import { SpeedyWireless, VintageWireless } from "./BuyAHomeTables";
export interface BuyAPhoneProps {}

export const BuyAPhone = ({}: BuyAPhoneProps) => {
  return (
    <div>
      <ServiceHeader
        mainHeader="Buy a Phone"
        imgHeader="/images/smartphone_large.png"
        subHeader="All adults must have a phone. Your children do not need phones, but you can buy a service plan for them if you want. All phones must have a service plan. Your expenses go in section 5 of your recording sheet.
"
      />

      <div className="border-4 border-black w-5/6 rounded-xl">
        <div className="text-right text-4xl py-4 pr-20">
          {" "}
          ----Phone Service Plans
        </div>
        <div className="flex flex-wrap justify-center p-3 gap-x-4 gap-y-4">
          <VintageWireless />
          <SpeedyWireless />
          <img className="w-3/12 h-1/6" src="/images/smartphone_small.png" />
        </div>
      </div>
    </div>
  );
};
