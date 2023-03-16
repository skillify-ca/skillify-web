import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";
import TooltipComponent from "../../ui/TooltipComponent";
import FreemiumMessage from "./FreemiumMessage";

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
            ? "sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-backgroundPrimary"
            : "grid grid-cols-12"
        }  `}
      >
        <div className="flex flex-col md:items-center ml-4 col-span-2">
          {freemiumMessage ? (
            <div className="flex rounded-full">
              <NodeIcon
                completed={completed}
                locked={locked}
                type={type}
                description={description}
                freemiumMessage={freemiumMessage}
              />
            </div>
          ) : (
            <TooltipComponent message={"This is a premium feature."}>
              <div className="flex rounded-full">
                <NodeIcon
                  completed={completed}
                  locked={locked}
                  type={type}
                  description={description}
                  freemiumMessage={freemiumMessage}
                />
              </div>
            </TooltipComponent>
          )}
        </div>
        <div className="flex flex-col justify-center w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
          {grayedOut === true ? (
            <div className="space-y-2">
              <div className="w-2/3 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-1/2 h-6 bg-gray-300 rounded-full"></div>
            </div>
          ) : freemiumMessage === true ? (
            <FreemiumMessage />
          ) : (
            <div>
              <p className="">{title}</p>
              <p>{description}</p>
            </div>
          )}
        </div>
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
            className={`h-16 w-1 ml-4 ${
              completed ? "bg-bulbasaur-500" : "bg-gray-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default FreemiumUnitNodeView;
