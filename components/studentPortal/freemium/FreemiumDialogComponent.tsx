import { XIcon } from "@heroicons/react/outline";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getModalContent } from "../../../pages/api/studentPortal/freemium/getModalContent";
import { themeSelector } from "../../../redux/themeSlice";
import TrailAnimation from "../../ui/TrailAnimation";

export enum ModalStage {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
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
    let styling = "md:w-6 md:h-6 w-4 h-4 rounded-full";
    if (currentStage === activeModal) {
      styling = styling + " bg-rattata";
    } else {
      styling = styling + " bg-gray-300";
    }
    return styling;
  };

  useEffect(() => {
    //handles the cycling through of modals with left/right arrows
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft") {
        //setCurrentStage decreases ModalStage by 1 unless it's 1, in which case it stays 1
        //setActiveStage controls the mirrored moving of the color of the circles to display the change
        setCurrentStage((currentStage) =>
          currentStage > ModalStage.ONE ? currentStage - 1 : ModalStage.ONE
        );
        setActiveModal((currentStage) =>
          currentStage > ModalStage.ONE ? currentStage - 1 : ModalStage.ONE
        );
      } else if (event.code === "ArrowRight") {
        //setCurrentStage increases ModalStage by 1 unless it's 5, in which case it stays 1
        //setActiveStage controls the mirrored moving of the color of the circles to display the change
        setCurrentStage((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
        setActiveModal((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
      }
    };
    //the eventListeners track key movements and attach them to my handleKeyPress function
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-gradient-to-r from-gray-300 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Content className={`${currentTheme}`}>
          <div
            className={`fixed h-[450px] w-[300px] md:h-[700px] md:w-[1000px] p-8 md:p-20 transform -translate-x-1/2 -translate-y-1/2 ${
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
                  <TrailAnimation key={stage} open={true}>
                    {getModalContent(stage)}
                  </TrailAnimation>
                )
            )}
            <div className="flex flex-row justify-center space-x-2 absolute bottom-4 md:bottom-8 inset-x-0">
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
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
