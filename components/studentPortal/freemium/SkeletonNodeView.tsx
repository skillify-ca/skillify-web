import React from "react";
import NodeIcon from "../../ui/NodeIcon";
import TooltipComponent from "../../ui/TooltipComponent";

export type SkeletonNodeViewProps = {
  hiddenLine: boolean;
};

export const SkeletonNodeView: React.FC<SkeletonNodeViewProps> = ({
  hiddenLine,
}: SkeletonNodeViewProps) => {
  return (
    <div className="">
      <div className={` ${"grid grid-cols-12"}  `}>
        <div className="flex flex-col col-span-2 ml-4 md:items-center">
          <TooltipComponent message={"This is a premium feature."}>
            <div className="flex rounded-full">
              <NodeIcon
                completed={false}
                locked={false}
                type={"lesson"}
                description={""}
                freemiumMessage={false}
              />
            </div>
          </TooltipComponent>
        </div>
        <div className="flex flex-col justify-center w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
          <div className="space-y-2">
            <div className="w-2/3 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded-full"></div>
          </div>
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

export default SkeletonNodeView;
