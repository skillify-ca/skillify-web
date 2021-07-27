import { ReactNode } from "react";
import ChartLine, {ChartLineProps} from "./ChartLine";
//child component

export interface ChartProps {
    individualOccupation,
    individualSalary,
    maritalStatus,
    numberOfChildren,
    spouseOccupation,
    spouseSalary,
}


export const Chart: React.FC<ChartProps> = ({
    individualOccupation,
    individualSalary,
    maritalStatus,
    numberOfChildren,
    spouseOccupation,
    spouseSalary,
    ...props
  }) => {
    return (
     <div className={"flex flex-col flex-nowrap justify-center items-center bg-white shadow-md rounded-xl max-w-screen-l border-black	w-4/12"}>
            
            <div className={"flex justify-center h-16 bg-gray-50	w-full text-2xl"}>-My Life-</div>
            <h1 className={"space-y-16 "}>- Occupation -</h1>
            <ChartLine text={individualOccupation} />
            <h1>- Monthly Salary -</h1>
            <ChartLine text={individualSalary} />
            <h1>- Marital Status -</h1>
            <ChartLine text={maritalStatus}/>
            <h1>- Number of Children -</h1>
            <ChartLine text={numberOfChildren} />
            <h1>- Spouse's Occupation -</h1>
            <ChartLine text={spouseOccupation} />
            <h1>- Spouse's Monthly Salary -</h1>
            <ChartLine text={spouseSalary} />


     </div>
    
    );
  };