import { ReactNode } from "react";

export interface RulesProps {
  children: ReactNode;
  size: "small" | "large";
  bgColour: "Blue" | "Red";
  image: "Protoss" | "Zerg" | "Terran"
}

const BLBudgetRules = ({ children, size, bgColour, image }: RulesProps) => {


  return (
    <div
      className={`bg-white w-80 h-160`}
    > 
    <div className="grid grid-cols-3 gap-1">
      <div className="...">1</div>
      <div className="col-span-2...">2</div>
      <div className="...">3</div>
      <div className="col-span-2...">4</div>
      <div className="...">5</div>
      <div className="col-span-2 ...">6</div>
      <div className="...">7</div>
      <div className="col-span-2...">8</div>
      <div className="...">9</div>
      <div className="col-span-2...">10</div>
      <div className="...">11</div>
      <div className="col-span-2...">12</div>
</div>
    <div
      className={'pl-2 bg-black w-10 h-4 place-items-start'}
    > <h1 className="text-lg justify-center text-white">Rules</h1>
      
    </div>
    </div>
  );
};
export default BLBudgetRules;

