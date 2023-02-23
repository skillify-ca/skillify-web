import React from "react";
import { Root, Portal, Content, Overlay, Close } from "@radix-ui/react-dialog";
import { Button } from "../../../ui/Button";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/solid";

const DialogComponent = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/props");
  };

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-gray-300 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className="flex items-center justify-center">
          <div className="fixed flex flex-col space-y-4 items-center justify-center w-full max-w-md px-3 py-32 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg md:max-w-3xl lg:max-w-4xl sm:rounded-3xl left-1/2 top-1/2">
            <Close asChild>
              <button className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-md text-gray-100 duration-500 bg-gray-900 bg-opacity-50 outline-none cursor-pointer hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            <h2 className="mb-12 text-2xl font-medium font-title md:text-4xl">
              Wait! Your trial has only{" "}
              <span className={"text-red-500"}> 5</span> days remaining!
            </h2>
            <p className="max-w-md px-2 mx-auto text-xl leading-8 ">
              Don't forget to submit your first assignment! Time to bring out
              your inner coder. Get tailored feedback to get a taste of what
              it's like to be a Skillifyer!
            </p>
            <Button onClick={handleContinue} label={"Start Now"}>
              Join us
            </Button>
            <span className="font-mono text-sm font-bold">
              You'll feel great when you crush it!
            </span>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};
export default DialogComponent;
