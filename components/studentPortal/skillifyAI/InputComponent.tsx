import React from "react";
import { Button } from "../../ui/Button";

const InputComponent = () => {
  return (
    <div className="relative bottom-0 left-40 ">
      <div className="flex  ">
        <textarea
          className="w-2/3 mr-12 "
          style={{ resize: "none" }}
        ></textarea>
        <Button label="submit "> </Button>
      </div>
    </div>
  );
};

export default InputComponent;
