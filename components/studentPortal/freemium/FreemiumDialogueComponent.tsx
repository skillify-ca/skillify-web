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

const FreemiumDialogComponent: React.FC = () => {
  const { currentTheme } = useSelector(themeSelector);
  const [activeModal, setActiveModal] = useState(ModalStage.ONE);

  const handleClickBack = () => setActiveModal(activeModal - 1);
  const handleClickNext = () => setActiveModal(activeModal + 1);
  const handleClickModal = (stage: ModalStage) => setActiveModal(stage);

  //creates an array of enum values, excluding the keys that are non-numeric so it doesn't duplicate
  const stagesArray = Object.values(ModalStage).filter(
    (stage) => !isNaN(Number(stage))
  );
  const lastStage = stagesArray[stagesArray.length - 1];

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-opacity-90 bg-gray-500 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className={`fixed h-[450px] w-[300px] md:h-[600px] md:w-[900px] p-8 md:p-20 transform -translate-x-1/2 -translate-y-1/2 ${
              activeModal === ModalStage.TWO ? "bg-[#18124C]" : "bg-white"
            } rounded-lg left-1/2 top-1/2`}
          >
            <Close asChild>
              <button className="absolute flex items-center justify-center w-6 h-6 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 rounded-md outline-none cursor-pointer top-3 right-3 hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            {/* content rendered based on enum */}
            {getModalContent(activeModal)}
            <div className="flex flex-row justify-center items-center space-x-12 absolute bottom-4 md:bottom-8 inset-x-0">
              {/* no button/back button */}
              {activeModal > ModalStage.ONE ? (
                <img
                  src="../../images/freemium/back.svg"
                  onClick={handleClickBack}
                />
              ) : (
                <img
                  src="../../images/freemium/back.svg"
                  className="invisible"
                ></img>
              )}
              {/* Map over enum values to render highlighted dots */}
              <div className="flex flex-row items-center space-x-2">
                {stagesArray.map((stage) => (
                  <div
                    key={stage}
                    className={`md:w-3 md:h-3 w-2 h-2 rounded-full ${
                      stage === activeModal ? "bg-rattata" : "bg-gray-300"
                    }`}
                    onClick={() => handleClickModal(stage as ModalStage)}
                  ></div>
                ))}
              </div>
              {/* Next/done button */}
              {activeModal < lastStage ? (
                <img
                  src="../../images/freemium/next.svg"
                  onClick={handleClickNext}
                />
              ) : (
                <Close asChild>
                  <img src="../../images/freemium/done.svg" />
                </Close>
              )}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
