import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/Collapsible";
import { Progress } from "../../ui/Progress";

type SectionProps = {
  title: string | React.ReactNode;
  hasProgress?: boolean;
  value?: number;
  children: React.ReactNode;
};

export default function Section({
  title,
  hasProgress = false,
  value = 0,
  children,
}: SectionProps) {
  return (
    <div className="w-full">
      <Collapsible className="w-full group rounded-xl">
        <div className="p-0">
          <CollapsibleTrigger className="flex flex-col items-start justify-start w-full gap-4 p-4 mb-4 ">
            <h6 className="flex text-lg font-bold">
              <span
                className={`group-data-[state=open]:rotate-180 transition-all rotate-90 mr-2`}
              >
                ▲
              </span>
              {title}
            </h6>
            {hasProgress && (
              <Progress value={value} className="w-[60%] text-blue-400" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>{children}</CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
}
