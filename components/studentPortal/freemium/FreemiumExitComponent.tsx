
import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../../redux/themeSlice";
import Exit from "./modals/Exit";

const FreemiumDialogComponent: React.FC = () => {
  const { currentTheme } = useSelector(themeSelector);

  return (
    <Root open={true}>

      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className="fixed h-[450px] w-[300px] md:h-[600px] md:w-[900px] p-4 md:p-20 transform -translate-x-1/2 -translate-y-1/2
             bg-murkrow rounded-lg left-1/2 top-1/2"
          >
            <Exit />

          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
