import { ReactNode } from "react";
import { SingleQuestionInput } from "../ui/SingleQuestionInput";
import { TrueFalse } from "../ui/TrueFalseInput";
import { financialProfileData } from "../../pages/api/finance/profile";

export interface SectionOneInputProps {
  married: boolean;
  //true or false
  hasChildren: boolean;
  // if true, display number of children form
  numberOfChildren: number;
  //number of children
  childrenAge: number[];
  //create an array with elements(numberofChildren) to display
  individualOccupation: number[];
  //dropdown
  individualSalary: number;
  //
  spouseOccupation: string;
  spouseSalary: number;
}

export const SectionOneInput = ({
  married,
  hasChildren,
  numberOfChildren,
  childrenAge,
  individualOccupation,
  individualSalary,
  spouseOccupation,
  spouseSalary,
}: SectionOneInputProps) => {
  return (
    //Do we need a <form> tag?
    <div className="shadow-md bg-transparent rounded-xl">
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
        <TrueFalse option1="Yes" option2="No" name="marriage" />
        <label className="flex justify-center">Do you have children?</label>
        <TrueFalse name="children" option1="Yes" option2="No" />

        {/* below is logic to show/hide children based on input*/}
        <label className=" hidden justify-center"> How many children? </label>
        <label className=" hidden justify-center"> What are their ages? </label>
        <label className=" hidden justify-center"> Child 1 </label>
        <div className=" hidden justify-center">placeholder</div>
        <label className=" hidden justify-center"> Child 2 </label>
        <div className=" hidden justify-center">placeholder</div>
        <label className=" hidden justify-center"> Child 3 </label>
        <div className=" hidden justify-center">placeholder</div>
        {/* above is logic to show/hide children based on input*/}
        <label className="flex justify-center ">What is your occupation?</label>
        <select className="bg-gray-100" name="select" id="select">
          {financialProfileData.map((ele) => (
            <option value={ele.individualOccupation}>
              {ele.individualOccupation}
            </option>
          ))}
        </select>
        <label className=" flex justify-center">
          What is your spouse's occupation?
        </label>
        <select className="bg-gray-100" name="select" id="select">
          {financialProfileData.map((ele) => (
            <option value={ele.spouseOccupation}>{ele.spouseOccupation}</option>
          ))}
        </select>
        <label className=" flex-row justify-center text-center ">
          How much money do you make per month?
        </label>
        <SingleQuestionInput
          answer={individualSalary}
          type="number"
          name="salary"
        />
        <label className=" flex-row justify-center text-center">
          How much does your spouse make per month?
        </label>
        <SingleQuestionInput
          answer={spouseSalary}
          type="number"
          name="spousesalary"
        />
      </div>
    </div>
  );
};
