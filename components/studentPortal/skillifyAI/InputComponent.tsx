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
    <div className="relative bottom-0 left-20">
      <div className="flex lg:mr-44">
        <textarea
          className="w-2/3 mr-6"
          style={{ resize: "none" }}
          onChange={handleTextareaChange}
          value={prompt}
        ></textarea>
        <Button label="submit" onClick={handleSubmit}>
          {" "}
        </Button>
      </div>
    </div>
  );
};

export default InputComponent;
