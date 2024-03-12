import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";
import FreemiumMessage from "./FreemiumMessage";

export type FreemiumMessageNodeViewProps = {
  hiddenLine: boolean;
  type: "lesson" | "quiz" | "assignment" | "freemiumMessage" | "grayedOut";
  onClick: () => void;
};

export const FreemiumMessageNodeView: React.FC<FreemiumMessageNodeViewProps> =
  ({ hiddenLine, type, onClick }: FreemiumMessageNodeViewProps) => {
    return (
      <div className="">
        <div
          className={` ${"sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-backgroundPrimary"}  `}
        >
          <div className="flex flex-col justify-center col-span-2 md:items-center">
            <div className="flex items-center p-2 border-2 rounded-full">
              <NodeIcon type={type} />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full col-span-10 p-4 sm:col-span-5">
            <FreemiumMessage />
          </div>
          <div
            className={`flex p-4 flex-col col-span-4 justify-center sm:mr-4`}
          >
            <Button label="Join Now!" onClick={onClick} />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div
            className={`${
              hiddenLine ? "hidden" : ""
            } flex flex-col items-center col-span-2 w-full`}
          >
            <div className={`h-16 w-1 ml-4 ${"bg-gray-500"}`} />
          </div>
        </div>
      </div>
    );
  };

export default FreemiumMessageNodeView;
