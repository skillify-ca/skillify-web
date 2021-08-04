import { ReactNode } from "react";
import { SingleQuestionInput } from "../ui/SingleQuestionInput";
import { TrueFalse } from "../ui/TrueFalseInput";
import { financialProfileData } from "../../pages/api/finance/profile";

export interface SectionOneInputProps {
  isMarried: boolean;
  setMarriage: (setMarriage: boolean) => void; //Line A
  hasChildren: boolean;
  setChildren: (value2: boolean) => void; //Line B
  // numberOfChildren: number;
  //setNumberOfChildren: (value3: number) => void; //Line C
  individualOccupation: string;
  setIndividualOccupation: (value: string) => void; //Line A
  individualSalary: number;
  setIndividualSalary: (value2: number) => void; //Line B
  spouseOccupation: string;
  setSpouseOccupation: (value3: string) => void; //Line C
  spouseSalary: number;
  setSpouseSalary: (value3: number) => void; //Line C
}

export const SectionOneInput = ({
  isMarried,
  setMarriage,
  hasChildren,
  setChildren,
  //numberOfChildren,
  //setNumberOfChildren,
  individualOccupation,
  setIndividualOccupation,
  individualSalary,
  setIndividualSalary,
  spouseOccupation,
  setSpouseOccupation,
  spouseSalary,
  setSpouseSalary,
}: SectionOneInputProps) => {
  return (
    //Do we need a <form> tag?
    <div className="shadow-md bg-transparent rounded-xl bg-white">
      <div className="font-bold p-4 bg-green-300 text-white rounded-xl">
        Section 1: My Personal Information
      </div>
      <div
        className={
          "grid grid-cols-2 auto-cols-min items-center justify-center gap-y-1 border-2 rounded-xl"
        }
      >
        <label className=" flex flex-row justify-center">
          Are you married?
        </label>
        <TrueFalse
          option1="Yes"
          option2="No"
          name="marriage"
          value={isMarried}
          onChange={(e) => setMarriage(e.target.value)}
          //pass onchange to custom component
        />
        <label className="flex justify-center">Do you have children?</label>
        <TrueFalse
          name="children"
          option1="Yes"
          option2="No"
          value={hasChildren}
          onChange={(e) => setChildren(e.target.value)}
        />

        {/* below is logic to show/hide children based on input + awaiting build of dynamic showcase of children ages*/}
        <label className=" hidden justify-center"> How many children? </label>
        <label className=" hidden justify-center"> What are their ages? </label>
        <label className=" hidden justify-center"> Child 1 </label>
        <div className=" hidden justify-center">placeholder</div>
        <label className=" hidden justify-center"> Child 2 </label>
        <div className=" hidden justify-center">placeholder</div>
        <label className=" hidden justify-center"> Child 3 </label>
        <div className=" hidden justify-center">placeholder</div>
        {/* above is logic to show/hide children based on input awaiting build of dynamic showcase of children ages*/}
        <label className="flex justify-center ">What is your occupation?</label>
        <select
          className="bg-gray-100"
          name="select"
          id="select"
          value={individualOccupation}
          onChange={(e) => setIndividualOccupation(e.target.value)}
        >
          {financialProfileData.map((ele) => (
            <option value={ele.individualOccupation}>
              {ele.individualOccupation}
            </option>
          ))}
        </select>
        <label className=" flex justify-center">
          What is your spouse's occupation?
        </label>
        <select
          className="bg-gray-100"
          name="select"
          id="select"
          value={spouseOccupation}
          onChange={(e) => setSpouseOccupation(e.target.value)}
        >
          {financialProfileData.map((ele) => (
            <option value={ele.spouseOccupation}>{ele.spouseOccupation}</option>
          ))}
        </select>
        <label className=" flex-row justify-center text-center ">
          How much money do you make per month?
        </label>
        <SingleQuestionInput
          //answer={}
          type="number"
          name="salary"
          value={individualSalary}
          onChange={(e) => setIndividualSalary(e.target.value)}
        />
        <label className=" flex-row justify-center text-center">
          How much does your spouse make per month?
        </label>
        <SingleQuestionInput
          //answer={}
          type="number"
          name="spousesalary"
          value={spouseSalary}
          onChange={(e) => setSpouseSalary(e.target.value)}
        />
      </div>
    </div>
  );
};
