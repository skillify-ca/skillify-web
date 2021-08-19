import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import { SpeedyWireless, VintageWireless } from "./BuyAHomeTables";
export interface BuyAPhoneProps {}

export const BuyAPhone = ({}: BuyAPhoneProps) => {
  return (
    <div className={"mr-24"}>
      <ServiceHeader
        mainHeader="Buy a Phone"
        imgHeader="/images/smartphone_large.png"
        subHeader="All adults must have a phone. Your children do not need phones, but you can buy a service plan for them if you want. All phones must have a service plan. Your expenses go in section 5 of your recording sheet.
"
      />
      <div className={"border-black border-t-8"}>
        <h1 className={"text-4xl mt-10 mb-5"}>Phone Service Plans</h1>
      </div>
      <VintageWireless />
      <SpeedyWireless />
      <div
        className={"flex justify-center items-center mb-10 border-black"}
      ></div>
    </div>
  );
};
