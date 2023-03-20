import { XIcon } from "@heroicons/react/outline";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getModalContent } from "../../../pages/api/studentPortal/freemium/GetModalContent";
import { themeSelector } from "../../../redux/themeSlice";
import TrailAnimation from "../../ui/TrailAnimation";

export enum ModalStage {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

const FreemiumDialogComponent: React.FC = ({ children }) => {
  const [currentStage, setCurrentStage] = useState(ModalStage.ONE); // using useState and ModalStage
  const { currentTheme } = useSelector(themeSelector);
  const [activeModal, setActiveModal] = useState(ModalStage.ONE);

  const activeModalStyling = (currentStage: ModalStage) => {
    let styling = "md:w-6 md:h-6 w-4 h-4 rounded-full";
    if (currentStage === activeModal) {
      styling = styling + " bg-rattata";
    } else {
      styling = styling + " bg-gray-300";
    }
    return styling;
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft") {
        setCurrentStage((currentStage) =>
          currentStage > ModalStage.ONE ? currentStage - 1 : ModalStage.ONE
        );
        setActiveModal((currentStage) =>
          currentStage > ModalStage.ONE ? currentStage - 1 : ModalStage.ONE
        );
      } else if (event.code === "ArrowRight") {
        setCurrentStage((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
        setActiveModal((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-gradient-to-r from-gray-300 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className={`fixed w-3/4 h-2/3 p-8 md:p-20 transform -translate-x-1/2 -translate-y-1/2 ${
              currentStage === ModalStage.TWO ||
              currentStage === ModalStage.THREE
                ? "bg-[#18124C]"
                : "bg-white"
            } rounded-lg left-1/2 top-1/2`}
          >
            <Close asChild>
              <button className="absolute flex items-center justify-center w-6 h-6 text-gray-100 duration-500 bg-gray-900 bg-opacity-50 rounded-md outline-none cursor-pointer top-3 right-3 hover:bg-opacity-100">
                <XIcon />
              </button>
            </Close>
            {Object.values(ModalStage).map(
              (stage) =>
                currentStage === stage && (
                  <TrailAnimation open={true}>
                    {getModalContent(stage)}
                  </TrailAnimation>
                )
            )}
            <div className="flex flex-row justify-center space-x-2 absolute bottom-4 md:bottom-8 inset-x-0">
              {[
                ModalStage.ONE,
                ModalStage.TWO,
                ModalStage.THREE,
                ModalStage.FOUR,
                ModalStage.FIVE,
              ].map((currentStage) => (
                <div
                  key={currentStage}
                  className={activeModalStyling(currentStage)}
                  onClick={() => {
                    setCurrentStage(currentStage);
                    setActiveModal(currentStage);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
