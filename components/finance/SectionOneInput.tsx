import { ReactNode } from "react";
import { SingleQuestionInput } from "../ui/SingleQuestionInput";
import { TrueFalse } from "../ui/TrueFalseInput";
import {
  financialProfileData,
  MaritalStatus,
} from "../../pages/api/finance/profile";

export interface SectionOneInputProps {
  isMarried: MaritalStatus;
  setMarriage: (setMarriage: MaritalStatus) => void;
  hasChildren: boolean;
  setChildren: (hasChildren: boolean) => void;
  individualOccupation: string;
  setIndividualOccupation: (individualOccupation: string) => void;
  individualSalary: number;
  setIndividualSalary: (individualSalary: number) => void;
  spouseOccupation: string;
  setSpouseOccupation: (spouseOccupation: string) => void;
  spouseSalary: number;
  setSpouseSalary: (spouseSalary: number) => void;
}

export const SectionOneInput = ({
  isMarried,
  setMarriage,
  hasChildren,
  setChildren,
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
    <div>
      <div className="shadow-md bg-transparent rounded-xl bg-white w-3/4">
        <div className="font-bold p-4 bg-green-300 text-white rounded-xl">
          Section 1: My Personal Information
        </div>
        <div
          className={
            "grid grid-cols-2 auto-cols-fr items-center justify-center gap-y-1 border-2 rounded-xl"
          }
        >
          <label className=" flex flex-row justify-center text-center">
            Are you married?
          </label>
          <TrueFalse
            option1="Yes"
            option2="No"
            name="marriage"
            value={isMarried}
            onChange={(e) =>
              setMarriage(
                e.target.value.toLowerCase() == "yes"
                  ? MaritalStatus.MARRIED
                  : MaritalStatus.SINGLE
              )
            }
          />
          <label className="flex justify-center text-center">
            Do you have children?
          </label>
          <TrueFalse
            name="children"
            option1="Yes"
            option2="No"
            value={hasChildren}
            onChange={(e) =>
              setChildren(e.target.value.toLowerCase() == "yes" ? true : false)
            }
          />

          <label className="flex text-center justify-center ">
            What is your occupation?
          </label>
          <select
            className="bg-gray-100 w-2/4 rounded-lg"
            name="select"
            id="select"
            value={individualOccupation}
            onChange={(e) => setIndividualOccupation(e.target.value)}
          >
            {financialProfileData
              .filter((profile) => profile.individualOccupation != "")
              .map((profile) => (
                <option value={profile.individualOccupation}>
                  {profile.individualOccupation}
                </option>
              ))}
          </select>
          <label className=" flex text-center justify-center">
            What is your spouse's occupation?
          </label>
          <select
            className="bg-gray-100 w-2/4 rounded-lg"
            name="select"
            id="select"
            value={spouseOccupation}
            onChange={(e) => setSpouseOccupation(e.target.value)}
          >
            {financialProfileData
              .filter((profile) => profile.spouseOccupation != "")
              .map((profile) => (
                <option value={profile.spouseOccupation}>
                  {profile.spouseOccupation}
                </option>
              ))}
          </select>
          <label className=" flex-row justify-center text-center ">
            How much money do you make per month?
          </label>
          <SingleQuestionInput
            type="number"
            name="salary"
            value={individualSalary}
            onChange={(e) => setIndividualSalary(e.target.value)}
          />
          <label className=" flex-row justify-center text-center">
            How much does your spouse make per month?
          </label>
          <SingleQuestionInput
            type="number"
            name="spousesalary"
            value={spouseSalary}
            onChange={(e) => setSpouseSalary(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
