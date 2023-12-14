// InputComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/Button";

interface InputComponentProps {
  onSubmitMessage: (formattedMessage: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSubmitMessage }) => {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef(null);

  const handleTextareaChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    // Call the onSubmitMessage prop with the formatted message
    onSubmitMessage(prompt);
    // Clear the prompt
    setPrompt("");
  };

  // Scroll textarea to bottom after each render
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  });

  return (
    <div className=" relative bottom-0 right-0">
      <div className="flex flex-col md:flex-row lg:mr-44 mr-4 md:mt-10 mt-20">
        <textarea
          ref={textareaRef}
          className="md:w-2/3 p-4 ml-4 h-40 mb-4  md:mr-4 rounded-xl"
          style={{ resize: "none" }}
          onChange={handleTextareaChange}
          value={prompt}
        ></textarea>
        <div className="flex md:flex-col my-4 md:space-y-4 justify-around mt-2">
          <Button
            label="Clear"
            backgroundColor="blue"
            onClick={() => setPrompt("")}
          >
            {" "}
          </Button>
          <Button label="Submit" onClick={handleSubmit}>
            {" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
