import React from "react";
import {
  Root,
  Portal,
  Content,
  Overlay,
  Close,
  Trigger,
} from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/solid";
import { Button } from "./Button";

export interface DialogComponentProps {
  trigger: boolean;
  message?: string;
  link: string;
  buttonLabel: string;
  header?: string;
  triggerTitle?: string;
  size: string;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  trigger,
  children,
  message,
  link,
  buttonLabel,
  header,
  triggerTitle,
  size,
}) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push(link);
  };

  return (
    <Root defaultOpen={!trigger}>
      {trigger && triggerTitle ? (
        <Trigger asChild>
          <button className="hover:bg-gray-200 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-gray-200 focus:outline-none">
            {triggerTitle}
          </button>
        </Trigger>
      ) : null}

      <Portal>
        <Overlay className="bg-gray-300 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className="flex items-center justify-center">
          <div
            className={`fixed flex flex-col space-y-4 items-center justify-center w-full max-w-${size} px-3 py-32 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg md:max-w-3xl lg:max-w-4xl sm:rounded-3xl left-1/2 top-1/2`}
          >
            <Close asChild>
              <button className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-md text-gray-100 duration-500 bg-gray-900 bg-opacity-50 outline-none cursor-pointer hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            <h2 className="mb-12 text-2xl font-medium font-title md:text-4xl">
              {header}
            </h2>
            <p className="max-w-md px-2 mx-auto text-xl leading-8 ">
              {children}
            </p>
            <Button
              backgroundColor="orange"
              onClick={handleContinue}
              label={buttonLabel}
            ></Button>
            <span className="font-mono text-sm font-bold">{message}</span>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};
export default DialogComponent;
