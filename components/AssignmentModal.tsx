import React from "react";
import { Button } from "./ui/Button";

export interface AssignmentModalProps {
  errorMessage: string;
}

export const AssignmentModal = ({ errorMessage }: AssignmentModalProps) => {
  return (
    <div className="flex-nowrap  h-1/3 w-1/3 shadow-lg rounded-xl bg-gray-50">
      <div className="flex justify-center">
        <img src="./images/uhoh.png" className=" w-1/3 h-1/3 " />
      </div>
      <div className="text-center bg-gray-50 py-4">{errorMessage}</div>
      <div className="text-center py-2">
        <Button
          label="Go Back"
          onClick={close}
          backgroundColor="blue"
          textColor="white"
        ></Button>
      </div>
    </div>
  );
};
