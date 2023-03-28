import { XIcon } from "@heroicons/react/outline";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../../redux/themeSlice";
import Welcome from "./Modals/Welcome";

const FreemiumDialogComponent: React.FC = () => {
  const { currentTheme } = useSelector(themeSelector);

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className={
              "fixed h-[450px] w-[300px] md:h-[600px] md:w-[900px] p-8 md:p-20 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg left-1/2 top-1/2"
            }
          >
            <Close asChild>
              <button className="absolute flex items-center justify-center w-6 h-6 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 rounded-md outline-none cursor-pointer top-3 right-3 hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            <Welcome />
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
