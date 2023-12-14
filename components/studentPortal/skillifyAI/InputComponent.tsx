import React from "react";
import { Button } from "../../ui/Button";

const InputComponent = () => {
  return (
    <div className="relative bottom-0 left-20  ">
      <div className="flex  lg:mr-44">
        <textarea className="w-2/3 mr-6 " style={{ resize: "none" }}></textarea>
        <Button label="submit "> </Button>
      </div>
    </div>
  );
};

export default InputComponent;
