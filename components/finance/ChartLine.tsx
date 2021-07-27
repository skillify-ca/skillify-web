import { ReactNode } from "react";

//child component

export interface ChartLineProps {
  text:string,

}

const ChartLine = ({text}: ChartLineProps) => {
  return (
    <div
      className={`flex flex-col justify-center bg-green-300 rounded-l text-white max-w-screen w-full
    `}
    > 
    <div className={"flex justify-center"}>{text}</div>    

    </div>
  );
};
export default ChartLine;