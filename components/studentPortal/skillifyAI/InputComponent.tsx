import React, { useState } from "react";
import { Button } from "../../ui/Button";

const InputComponent = () => {
  const [prompt, setPrompt] = useState("");

  const handleTextareaChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    // Do something with the prompt, e.g., send it to an API or process it in some way
    console.log("Prompt:", prompt);
  };

  return (
    <div className="relative bottom-0 md:left-20">
      <div className="flex lg:mr-44 mr-4 md:mt-10 mt-20">
        <textarea
          className="md:w-2/3 w-4/5 md:h-32  mr-4 rounded-xl"
          style={{ resize: "none" }}
          onChange={handleTextareaChange}
          value={prompt}
        ></textarea>
        <div className="flex flex-col space-y-4 mt-2">
          <Button label="Submit" onClick={handleSubmit}>
            {" "}
          </Button>
          <Button label="Clear" backgroundColor="blue" onClick={handleSubmit}>
            {" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
