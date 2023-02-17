import { Root, Indicator } from "@radix-ui/react-progress";
import {
  Provider,
  Root as TooltipRoot,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import { PlusCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

const ProgressDemo = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-10">
      <div className="items-center bg-gray-400">
        This is the progress bar
        <Root
          className="relative overflow-hidden bg-blue-400 rounded-full w-[300px] h-[25px]"
          style={{
            transform: "translateZ(0)",
          }}
          value={66}
        >
          <Indicator
            className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Root>
      </div>
      <div>
        <Provider>
          <TooltipRoot>
            <Trigger asChild>
              <button className="text-blue-500 shadow-black-500 hover:bg-purple-200 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black-300">
                <PlusCircleIcon />
              </button>
            </Trigger>
            <Portal>
              <Content
                className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-blue-500 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                sideOffset={5}
              >
                Access Denied. Pony up the cash, please.
                <Arrow className="fill-white" />
              </Content>
            </Portal>
          </TooltipRoot>
        </Provider>
      </div>
    </div>
  );
};

export default ProgressDemo;
