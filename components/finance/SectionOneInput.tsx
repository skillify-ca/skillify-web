import { ReactNode } from "react";
import { SingleQuestionInput } from "../ui/SingleQuestionInput";
import { TrueFalse } from "../ui/TrueFalseInput";
import {
  FinanceProfileType,
  financialProfileData,
  MaritalStatus,
} from "../../pages/api/finance/profile";
import { profile } from "console";
import {
  assignmentSessionSelector,
  setIsMarried,
  setHasChildren
} from "../../redux/assignmentSession"
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

export interface SectionOneInputProps {
  // isMarried: MaritalStatus;
  // setIsMarried: (setMarriage: MaritalStatus) => void;
  individualOccupation: string;
  setIndividualOccupation: (individualOccupation: string) => void;
  individualSalary: number;
  setIndividualSalary: (individualSalary: number) => void;
  spouseOccupation: string;
  setSpouseOccupation: (spouseOccupation: string) => void;
  spouseSalary: number;
  setSpouseSalary: (spouseSalary: number) => void;
  profileData: FinanceProfileType;
  sectionOneValidation: boolean;
  setSectionOneValidation: (sectionOneValidation: boolean) => void;
}

export const SectionOneInput = ({
  // isMarried,
  // setIsMarried,
  individualOccupation,
  setIndividualOccupation,
  individualSalary,
  setIndividualSalary,
  spouseOccupation,
  setSpouseOccupation,
  spouseSalary,
  setSpouseSalary,
  profileData,
  sectionOneValidation,
  setSectionOneValidation,
}: SectionOneInputProps) => {

  const assignmentSession = useSelector(assignmentSessionSelector)
  const dispatch = useAppDispatch()

  return (
    <div>
      {profileData && (
        <div className="shadow-md bg-transparent rounded-xl bg-white">
          <div className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-5">
            Section 1: My Personal Information
          </div>
          <div
            className={
              "grid grid-cols-3 auto-cols-fr items-center justify-center gap-y-1 border-2 rounded-xl"
            }
          >
            <label className=" flex flex-row justify-center text-center">
              Are you married?
            </label>
            <TrueFalse
              option1="Yes"
              option2="No"
              name="marriage"
              value={assignmentSession.isMarried}
              onChange={(e) =>
                dispatch(setIsMarried(
                  e.target.value.toLowerCase() == "yes"
                    ? MaritalStatus.MARRIED
                    : MaritalStatus.SINGLE
                ))
              }
            />
            <div className="w-1/4">
              {assignmentSession.isMarried == profileData.maritalStatus ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>
            <label className="flex justify-center text-center">
              Do you have children?
            </label>
            <TrueFalse
              name="children"
              option1="Yes"
              option2="No"
              value={assignmentSession.hasChildren}
              onChange={(e) =>
                dispatch(setHasChildren(
                  e.target.value.toLowerCase() == "yes" ? true : false
                ))
              }
            />
            <div className="w-1/4">
              {assignmentSession.hasChildren ==
                (profileData.numberOfChildren > 0 ? true : false) ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>
            <label className="flex text-center justify-center ">
              What is your occupation?
            </label>
            <select
              className="bg-gray-100 w-4/6 rounded-lg"
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
            <div className="w-1/4">
              {individualOccupation == profileData.individualOccupation ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className=" flex text-center justify-center">
              What is your spouse's occupation?
            </label>
            <select
              className="bg-gray-100 w-4/6 rounded-lg"
              name="select"
              id="select"
              value={spouseOccupation}
              onChange={(e) => setSpouseOccupation(e.target.value)}
            >
              {financialProfileData
                .map((profile) => profile.spouseOccupation)
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((spouseOccupation) => (
                  <option value={spouseOccupation}>{spouseOccupation}</option>
                ))}
            </select>
            <div className="w-1/4">
              {spouseOccupation == profileData.spouseOccupation ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className=" flex-row justify-center text-center ">
              How much money do you make per month?
            </label>
            <SingleQuestionInput
              type="number"
              name="salary"
              value={individualSalary}
              onChange={(e) => setIndividualSalary(e.target.value)}
            />
            <div className="w-1/4">
              {individualSalary == profileData.individualSalary ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className=" flex-row justify-center text-center">
              How much does your spouse make per month?
            </label>
            <SingleQuestionInput
              type="number"
              name="spousesalary"
              value={spouseSalary}
              onChange={(e) => setSpouseSalary(e.target.value)}
            />
            <div className="w-1/4">
              {spouseSalary == profileData.spouseSalary ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
          </div>
        </div>
      )}
      {profileData &&
        setSectionOneValidation(
          assignmentSession.isMarried == profileData.maritalStatus &&
            assignmentSession.hasChildren == (profileData.numberOfChildren > 0 ? true : false) &&
            spouseOccupation == profileData.spouseOccupation &&
            individualOccupation == profileData.individualOccupation &&
            individualSalary == profileData.individualSalary &&
            spouseSalary == profileData.spouseSalary
            ? true
            : false
        )}
    </div>
  );
};
