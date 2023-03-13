import React from "react";
import { Button } from "../../ui/Button";

export type FreemiumUnitNodeViewProps = {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  hiddenLine: boolean;
  type: "lesson" | "quiz" | "assignment";
  grayedOut: boolean;
  freemiumMessage: boolean;
};

export const FreemiumUnitNodeView: React.FC<FreemiumUnitNodeViewProps> = ({
  completed,
  locked,
  hiddenLine,
  title,
  description,
  type,
  grayedOut,
  freemiumMessage,
}: FreemiumUnitNodeViewProps) => {
  const imageSrc = (completed, locked, type, freemiumMessage) => {
    if (completed) {
      return "/images/studentPortal/checkmark.svg";
    } else if (freemiumMessage) {
      return "../../images/logo-2.png";
    } else if (locked && type === "lesson") {
      return "/images/studentPortal/lesson_inactive.svg";
    } else if (locked && type === "quiz") {
      return "/images/studentPortal/quiz_inactive.svg";
    } else if (locked && type === "assignment") {
      return "/images/studentPortal/assignment_inactive.svg";
    } else if (type === "lesson") {
      return "/images/studentPortal/lesson_active.svg";
    } else if (type === "quiz") {
      return "/images/studentPortal/quiz_active.svg";
    } else if (type === "assignment") {
      return "/images/studentPortal/assignment_active.svg";
    }
    return "";
  };
  const active = !completed && !locked && !grayedOut;
  return (
    <div className="">
      <div
        className={`${
          locked || grayedOut
            ? ""
            : "hover:bg-backgroundSecondary hover:shadow-lg hover:py-4 transform transition-all"
        } ${
          active
            ? "px-4 sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-backgroundPrimary"
            : "grid grid-cols-12"
        }  `}
      >
        <div className="flex flex-col items-center col-span-2">
          <div className="flex items-center rounded-full">
            {
              <img
                src={`${imageSrc(completed, locked, type, freemiumMessage)}`}
                className="w-12 h-12"
              />
            }{" "}
          </div>
        </div>
        {grayedOut === true ? (
          <div className="flex flex-col justify-center space-y-2 w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
            <div className="bg-gray-300 h-6 w-2/3 rounded-full"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded-full"></div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
            {freemiumMessage ? (
              <div className="">
                <p className="font-bold text-2xl">
                  Enjoying the Skillify Experience?
                </p>
                <p>Access the full community and program by applying today!</p>
              </div>
            ) : (
              <div>
                <p className="">{title}</p>
                <p>{description}</p>
              </div>
            )}
          </div>
        )}
        <div
          className={`${
            active ? "" : "hidden"
          } flex flex-col col-span-4 justify-center sm:mr-4`}
        >
          {freemiumMessage === true ? (
            <a href="https://www.joinskillify.com/call">
              <Button
                label="Apply Now!"
                onClick={(e) =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              />
            </a>
          ) : (
            <Button label="Continue" />
          )}
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`${
            hiddenLine ? "hidden" : ""
          } flex flex-col items-center col-span-2 w-full`}
        >
          <div
            className={`h-16 w-1 ${
              completed ? "bg-bulbasaur-500" : "bg-gray-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default FreemiumUnitNodeView;
