import { ReactNode } from "react";

//child component

export interface FinanceProfileChartLineProps {
  text: string | number;
}

const FinanceProfileChartLine = ({ text }: FinanceProfileChartLineProps) => {
  return (
    <div
      className={`flex flex-col justify-center bg-green-300 rounded-l text-white max-w-screen w-full
    `}
    >
      <div className={"flex justify-center text-center"}>{text}</div>
    </div>
  );
};
export default FinanceProfileChartLine;
