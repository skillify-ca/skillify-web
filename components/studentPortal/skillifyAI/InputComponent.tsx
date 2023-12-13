import React from "react";
import { Button } from "../../ui/Button";

const InputComponent = () => {
  return (
    <div className="absolute md:relative bottom-0 left-40 ">
      <div className="flex space-x-12 ">
        <textarea className="w-2/3"></textarea>
        <Button label="submit "> </Button>
      </div>
    </div>
  );
};

export default InputComponent;
