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
        imgHeader="/images/kisspng-clip-art-television-show-portable-network-graphics-tv-clip-art-png-transparent-azpng-5d11a0231c3439.0975684315614361951155.png"
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
          <img
            className="w-5/12 h-3/6"
            src="/images/kisspng-netbook-laptop-computer-icons-computer-monitors-it-it-lms-job-oriented-courses-smart-classes-5d02fea27801b5.4226341315604773464916.png"
          />
        </div>
      </div>
    </div>
  );
};
