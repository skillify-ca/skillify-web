import { ReactNode } from "react";
import ChartLine from "./ChartLine"
import ChartTitle from "./ChartTitle"


//parent component


export interface ChartProps {
  children: ReactNode; //children is ChartLine and ChartTitle
}

const Chart = ({ children}: ChartProps) => {
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center shadow-md rounded-2xl bgrounded-xl max-w-screen-lg w-391 h-443
    `}
    > 
      {children}
    </div>
  )
    
};


export default Chart;

