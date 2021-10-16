import React from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import { Button } from "./ui/Button";

export interface ErrorModalProps {
  errorMessage: string;
  close: () => void;
  isErrorModalShowing: boolean;
}

export const ErrorModal = ({
  errorMessage,
  close,
  isErrorModalShowing,
}: ErrorModalProps) => {
  return (
    <Modal
      id="error-modal"
      isOpen={isErrorModalShowing}
      transition={ModalTransition.SCALE}
      modalClassName="h-1/2"
    >
      <div className="flex-nowrap shadow-xl rounded-xl  bg-gray-50 h-full w-full">
        <div className="flex justify-center">
          <img src="./images/uhoh.png" className=" w-1/3 h-1/3 " />
        </div>
        <div className="text-center py-4">{errorMessage}</div>
        <div className="text-center py-2">
          <Button
            label="Go Back"
            onClick={close}
            backgroundColor="blue"
            textColor="white"
          ></Button>
        </div>
      </div>
    </Modal>
  );
};
