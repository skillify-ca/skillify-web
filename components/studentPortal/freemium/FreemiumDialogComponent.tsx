import { XIcon } from "@heroicons/react/outline";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { themeSelector } from "../../../redux/themeSlice";
import OffYouGo from "./Modals/OffYouGo";
import PremiumFeatures from "./Modals/PremiumFeatures";
import Upgrade from "./Modals/Upgrade";
import Welcome from "./Modals/Welcome";
import WhereToStart from "./Modals/WhereToStart";

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
  const [springProps, set] = useSpring(() => ({ opacity: 1 }));

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
        set({ opacity: 0 });
        setTimeout(() => {
          set({ opacity: 1 });
        }, 500);
      } else if (event.code === "ArrowRight") {
        setCurrentStage((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
        setActiveModal((currentStage) =>
          currentStage < ModalStage.FIVE ? currentStage + 1 : ModalStage.FIVE
        );
        set({ opacity: 0 });
        setTimeout(() => {
          set({ opacity: 1 });
        }, 500);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Root defaultOpen={true}>
      <Portal>
        <Overlay className="bg-gradient-to-r from-white data-[state=open]:animate-overlayShow fixed inset-0" />
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
            {currentStage === ModalStage.ONE && (
              <animated.div style={springProps}>
                <Welcome />
              </animated.div>
            )}
            {currentStage === ModalStage.TWO && (
              <animated.div style={springProps}>
                <PremiumFeatures />
              </animated.div>
            )}
            {currentStage === ModalStage.THREE && (
              <animated.div style={springProps}>
                <Upgrade />
              </animated.div>
            )}
            {currentStage === ModalStage.FOUR && (
              <animated.div style={springProps}>
                <WhereToStart />
              </animated.div>
            )}
            {currentStage === ModalStage.FIVE && (
              <animated.div style={springProps}>
                <OffYouGo />
              </animated.div>
            )}
            <div className="flex flex-row justify-center space-x-2 absolute bottom-4 md:bottom-8 inset-x-0">
              <div
                className={activeModalStyling(ModalStage.ONE)}
                onClick={() => {
                  setCurrentStage(ModalStage.ONE);
                  setActiveModal(ModalStage.ONE);
                  set({ opacity: 0 });
                  setTimeout(() => {
                    set({ opacity: 1 });
                  }, 500);
                }}
              ></div>
              <div
                className={activeModalStyling(ModalStage.TWO)}
                onClick={() => {
                  setCurrentStage(ModalStage.TWO);
                  setActiveModal(ModalStage.TWO);
                  set({ opacity: 0 });
                  setTimeout(() => {
                    set({ opacity: 1 });
                  }, 500);
                }}
              ></div>
              <div
                className={activeModalStyling(ModalStage.THREE)}
                onClick={() => {
                  setCurrentStage(ModalStage.THREE);
                  setActiveModal(ModalStage.THREE);
                  set({ opacity: 0 });
                  setTimeout(() => {
                    set({ opacity: 1 });
                  }, 500);
                }}
              ></div>
              <div
                className={activeModalStyling(ModalStage.FOUR)}
                onClick={() => {
                  setCurrentStage(ModalStage.FOUR);
                  setActiveModal(ModalStage.FOUR);
                  set({ opacity: 0 });
                  setTimeout(() => {
                    set({ opacity: 1 });
                  }, 500);
                }}
              ></div>
              <div
                className={activeModalStyling(ModalStage.FIVE)}
                onClick={() => {
                  setCurrentStage(ModalStage.FIVE);
                  setActiveModal(ModalStage.FIVE);
                  set({ opacity: 0 });
                  setTimeout(() => {
                    set({ opacity: 1 });
                  }, 500);
                }}
              ></div>
            </div>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default FreemiumDialogComponent;
