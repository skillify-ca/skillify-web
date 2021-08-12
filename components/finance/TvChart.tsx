import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import {
  ABplusCcompany,
  StreamingTvCompany,
  DishAndSpoonNetwork,
} from "./BuyAHomeTables";
export interface TvChartProps {}

export const TvChart = ({}: TvChartProps) => {
  return (
    <div>
      <ServiceHeader
        mainHeader="Buy TV and Internet Service"
        imgHeader="/images/tv_large.png"
        subHeader="You can buy TV and Internet service; however you are not required to buy it. Your expenses go in section 5 of your recording sheet.
"
      />

      <div className="border-4 border-black w-5/6 rounded-xl">
        <div className="text-center text-2xl py-4">
          {" "}
          TV and Internet Service Providers
        </div>
        <div className="flex flex-nowrap justify-between p-3 gap-x-4">
          <ABplusCcompany />
          <StreamingTvCompany />
        </div>
        <div className="flex flex-nowrap justify-evenly p-4">
          <DishAndSpoonNetwork />
          <img className="w-5/12 h-3/6" src="/images/laptop_small.png" />
        </div>
      </div>
    </div>
  );
};
