import { ReactNode } from "react";
import { MaritalStatus } from "../../pages/api/finance/profile";
import FinanceProfileChartLine, {
  FinanceProfileChartLineProps,
} from "./FinanceProfileChartLine";

export interface FinanceProfileChartProps {
  individualOccupation: string;
  individualSalary: number;
  maritalStatus: MaritalStatus;
  numberOfChildren: number;
  spouseOccupation: string;
  spouseSalary: number;
}

export const FinanceProfileChart = ({
  individualOccupation,
  individualSalary,
  maritalStatus,
  numberOfChildren,
  spouseOccupation,
  spouseSalary,
}: FinanceProfileChartProps) => {
  return (
    <div
      className={
        "flex flex-col flex-nowrap justify-center items-center bg-white shadow-md rounded-xl max-w-screen-l border-black	w-6/12"
      }
    >
      <div className={"flex justify-center h-16 bg-gray-50 w-full text-2xl"}>
        -My Life-
      </div>
      <h1 className={"space-y-16 text-center "}>- Occupation -</h1>
      <FinanceProfileChartLine text={individualOccupation} />
      <h1 className="text-center ">- Monthly Salary -</h1>
      <FinanceProfileChartLine text={individualSalary} />
      <h1>- Marital Status -</h1>
      <FinanceProfileChartLine
        text={maritalStatus == MaritalStatus.MARRIED ? "Married" : "Single"}
      />
      {numberOfChildren > 0 && (
        <div className="w-full">
          <h1 className="text-center ">- Number of Children -</h1>
          <FinanceProfileChartLine text={numberOfChildren} />
        </div>
      )}
      {spouseOccupation.length > 1 && (
        <div className="w-full">
          <h1 className="text-center ">- Spouse's Occupation -</h1>
          <FinanceProfileChartLine text={spouseOccupation} />
        </div>
      )}
      {spouseSalary > 0 && (
        <div className="w-full">
          <h1 className="text-center ">- Spouse's Monthly Salary -</h1>
          <FinanceProfileChartLine text={spouseSalary} />
        </div>
      )}
    </div>
  );
};
