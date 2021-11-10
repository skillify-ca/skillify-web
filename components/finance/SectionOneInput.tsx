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
  setHasChildren,
  setIndividualOccupation,
  setIndividualSalary,
  setSpouseOccupation,
  setSpouseSalary,
  setSectionOneValidation
} from "../../redux/assignmentSession"
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

export interface SectionOneInputProps {
  // profileData: FinanceProfileType;
  sectionOneValidation: boolean;
  setSectionOneValidation: (sectionOneValidation: boolean) => void;
}

export const SectionOneInput = (
  {
    sectionOneValidation,
    setSectionOneValidation,
    // profileData,
  }: SectionOneInputProps

) => {

  const assignmentSession = useSelector(assignmentSessionSelector)
  const dispatch = useAppDispatch()

  return (
    <div>
      {assignmentSession.profileData && (
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
              {assignmentSession.isMarried == assignmentSession.profileData.maritalStatus ? (
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
                (assignmentSession.profileData.numberOfChildren > 0 ? true : false) ? (
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
              value={assignmentSession.individualOccupation}
              onChange={(e) => dispatch(setIndividualOccupation(e.target.value))}
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
              {assignmentSession.individualOccupation == assignmentSession.profileData.individualOccupation ? (
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
              value={assignmentSession.spouseOccupation}
              onChange={(e) => dispatch(setSpouseOccupation(e.target.value))}
            >
              {financialProfileData
                .map((profile) => profile.spouseOccupation)
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((spouseOccupation) => (
                  <option value={spouseOccupation}>{spouseOccupation}</option>
                ))}
            </select>
            <div className="w-1/4">
              {assignmentSession.spouseOccupation == assignmentSession.profileData.spouseOccupation ? (
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
              value={assignmentSession.individualSalary}
              onChange={(e) => dispatch(setIndividualSalary(e.target.value))}
            />
            <div className="w-1/4">
              {assignmentSession.individualSalary == assignmentSession.profileData.individualSalary ? (
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
              value={assignmentSession.spouseSalary}
              onChange={(e) =>
                dispatch(setSpouseSalary(e.target.value))
              }
            />
            <div className="w-1/4">
              {assignmentSession.spouseSalary == assignmentSession.profileData.spouseSalary ? (
                <img src={"/images/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
          </div>
        </div>
      )}
      {assignmentSession.profileData &&
        setSectionOneValidation(
          assignmentSession.isMarried == assignmentSession.profileData.maritalStatus &&
            assignmentSession.hasChildren == (assignmentSession.profileData.numberOfChildren > 0 ? true : false) &&
            assignmentSession.spouseOccupation == assignmentSession.profileData.spouseOccupation &&
            assignmentSession.individualOccupation == assignmentSession.profileData.individualOccupation &&
            assignmentSession.individualSalary == assignmentSession.profileData.individualSalary &&
            assignmentSession.spouseSalary == assignmentSession.profileData.spouseSalary
            ? true
            : false
        )}
    </div>
  );
};

