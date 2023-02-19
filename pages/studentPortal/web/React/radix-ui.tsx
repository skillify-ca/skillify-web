import { Root, Indicator } from "@radix-ui/react-progress";
import {
  Provider,
  Root as TooltipRoot,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import { PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay,
  Content as DialogContent,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import TooltipComponent from "../../../../components/coding/studentPortal/radix/TooltipComponent";

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
      <TooltipComponent message="Help me." userRole={"student"} open={false}>
        <button className="text-blue-500 shadow-black-500 hover:bg-purple-200 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black-300">
          <PlusCircleIcon />
        </button>
      </TooltipComponent>

      <div>
        <DialogRoot>
          <DialogTrigger asChild>
            <button className="violet text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              Edit profile
            </button>
          </DialogTrigger>
          <DialogPortal>
            <Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <DialogContent className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Title className="text-mauve12 m-0 text-[17px] font-medium">
                Edit profile
              </Title>
              <Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                Make changes to your profile here. Click save when you're done.
              </Description>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="username"
                  defaultValue="@peduarte"
                />
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <Close asChild>
                  <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                    Save changes
                  </button>
                </Close>
              </div>
              <Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <XIcon />
                </button>
              </Close>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </div>
    </div>
  );
};

export default ProgressDemo;
