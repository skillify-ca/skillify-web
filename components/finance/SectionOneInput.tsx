import { ReactNode } from "react";
import { SingleQuestionInput } from "../ui/SingleQuestionInput";
import { TrueFalse } from "../ui/TrueFalseInput";

export interface SectionOneInputProps {
  married: boolean;
  //true or false

  hasChildren: boolean;
  // if true, display number of children form

  numberOfChildren: number;
  //number of children

  childrenAge: number[];
  //create an array with elements(numberofChildren) to display

  individualOccupation: string;
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
    <div className={"grid grid-flow-row auto-cols-max"}>
      <form>
        <TrueFalse question="Are you Married?" option1="Yes" option2="No" />
        <TrueFalse
          question="Do you have Children?"
          option1="Yes"
          option2="No"
        />

        <SingleQuestionInput question="Blah " answer="" />
      </form>
    </div>
  );
};
