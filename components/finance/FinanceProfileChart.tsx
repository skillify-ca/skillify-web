import { ReactNode } from "react";
import FinanceProfileChartLine, {FinanceProfileChartLineProps} from "./FinanceProfileChartLine";
//child component

export interface FinanceProfileChartProps {
    individualOccupation,
    individualSalary,
    maritalStatus,
    numberOfChildren,
    spouseOccupation,
    spouseSalary,
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
     <div className={"flex flex-col flex-nowrap justify-center items-center bg-white shadow-md rounded-xl max-w-screen-l border-black	w-4/12"}>
            
            <div className={"flex justify-center h-16 bg-gray-50 w-full text-2xl"}>-My Life-</div>
            <h1 className={"space-y-16 "}>- Occupation -</h1>
            <FinanceProfileChartLine text={individualOccupation} />
            <h1>- Monthly Salary -</h1>
            <FinanceProfileChartLine text={individualSalary} />
            <h1>- Marital Status -</h1>
            <FinanceProfileChartLine text={maritalStatus}/>
            <h1>- Number of Children -</h1>
            <FinanceProfileChartLine text={numberOfChildren} />
            <h1>- Spouse's Occupation -</h1>
            <FinanceProfileChartLine text={spouseOccupation} />
            <h1>- Spouse's Monthly Salary -</h1>
            <FinanceProfileChartLine text={spouseSalary} />


     </div>
    
    );
  };