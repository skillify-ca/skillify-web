import { ReactNode } from "react";

const ExpenseTable = () => {
  return (
    <div className={`bg-white border-4 border-black`}>
      <div className="grid grid-cols-3 gap-x-20 gap-y-5 align-middle">
        <div className="col-span-3 col-start-0"></div>
        <div className="text-3xl text-right ">1:</div>
        <div className="col-span-2 col-start-0">2</div>
        <div className="text-3xl text-right "> 3:</div>
        <div className="col-span-2 col-start-0">4</div>
        <div className="text-3xl text-right ">4</div>
        <div className="col-span-2 col-start-0">5</div>
        <div className="text-3xl text-right ">6</div>
      </div>
    </div>
  );
};
export default ExpenseTable;
