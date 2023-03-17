import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";
import FreemiumMessage from "./FreemiumMessage";

export type FreemiumMessageNodeViewProps = {
  description: string;
  hiddenLine: boolean;
};

export const FreemiumMessageNodeView: React.FC<FreemiumMessageNodeViewProps> =
  ({ hiddenLine, description }: FreemiumMessageNodeViewProps) => {
    return (
      <div className="">
        <div
          className={` ${"sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-backgroundPrimary"}  `}
        >
          <div className="flex flex-col col-span-2 ml-4 md:items-center">
            <div className="flex rounded-full">
              <NodeIcon
                completed={false}
                locked={false}
                type={"lesson"}
                description={description}
                freemiumMessage={true}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
            <FreemiumMessage />
          </div>
          <div className={`flex flex-col col-span-4 justify-center sm:mr-4`}>
            <a href="https://www.joinskillify.com/call">
              <Button
                label="Apply Now!"
                onClick={(e) =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              />
            </a>
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

export default FreemiumMessageNodeViewProps;
