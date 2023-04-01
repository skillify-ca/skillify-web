import { XIcon } from "@heroicons/react/outline";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getModalContent } from "../../../pages/api/studentPortal/freemium/getModalContent";
import { themeSelector } from "../../../redux/themeSlice";
export enum ModalStage {
  ONE,
  TWO,
  THREE,
}

export const modalStageMappedArray = (
  Object.keys(ModalStage).filter((stage) =>
    isNaN(Number(stage))
  ) as (keyof typeof ModalStage)[]
).map((key, index) => {
  return ModalStage[key];
});

const FreemiumDialogComponent: React.FC = () => {
  // delete this log when ready to merge
  console.log("freemium modal has rendered");
  const [currentStage, setCurrentStage] = useState(ModalStage.ONE);
  const { currentTheme } = useSelector(themeSelector);
  const [activeModal, setActiveModal] = useState(ModalStage.ONE);

  const activeModalStyling = (currentStage: ModalStage) => {
    let styling = "md:w-3 md:h-3 w-2 h-2 rounded-full";
    if (currentStage === activeModal) {
      styling = styling + " bg-rattata";
    } else {
      styling = styling + " bg-gray-300";
    }
    return styling;
  };

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className={`fixed h-[450px] w-[300px] md:h-[600px] md:w-[900px] p-8 md:p-20 transform -translate-x-1/2 -translate-y-1/2 ${
              currentStage === ModalStage.TWO ? "bg-[#18124C]" : "bg-white"
            } rounded-lg left-1/2 top-1/2`}
          >
            <Close asChild>
              <button className="absolute flex items-center justify-center w-6 h-6 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 rounded-md outline-none cursor-pointer top-3 right-3 hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            {Object.values(ModalStage).map(
              (stage) => currentStage === stage && <>{getModalContent(stage)}</>
            )}
            <div className="flex flex-row justify-center space-x-12 absolute bottom-4 md:bottom-8 inset-x-0">
              {currentStage > ModalStage.ONE ? (
                <img
                  src="../../images/freemium/back.svg"
                  onClick={() => {
                    const previousStage = currentStage - 1;
                    setCurrentStage(previousStage);
                    setActiveModal(previousStage);
                  }}
                />
              ) : (
                <img
                  src="../../images/freemium/back.svg"
                  style={{ visibility: "hidden" }}
                />
              )}
              <div className="flex flex-row items-center space-x-1">
                {modalStageMappedArray.map((stage) => (
                  <div
                    key={stage}
                    className={activeModalStyling(stage)}
                    onClick={() => {
                      setCurrentStage(stage);
                      setActiveModal(stage);
                    }}
                  ></div>
                ))}
              </div>
              {currentStage < ModalStage.THREE ? (
                <img
                  src="../../images/freemium/next.svg"
                  onClick={() => {
                    const nextStage = currentStage + 1;
                    setCurrentStage(nextStage);
                    setActiveModal(nextStage);
                  }}
                />
              ) : (
                <img src="../../images/freemium/done.svg" />
              )}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
