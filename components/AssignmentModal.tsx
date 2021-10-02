import React from "react";
import { Button } from "./ui/Button";

export interface AssignmentModalProps {}

export const AssignmentModal = ({}: AssignmentModalProps) => {
  return (
    <div className="flex-nowrap  h-1/3 w-1/3 shadow-lg rounded-xl bg-gray-50">
      <div className="flex justify-center">
        <img src="./images/uhoh.png" className=" w-1/3 h-1/3 " />
      </div>
      <div className="text-center bg-gray-50 py-4">
        It looks like you forgot to assign a question!
      </div>
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
