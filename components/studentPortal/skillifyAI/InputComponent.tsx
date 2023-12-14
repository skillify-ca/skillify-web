// InputComponent.tsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/Button";

interface InputComponentProps {
  onSubmitMessage: (formattedMessage: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSubmitMessage }) => {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    onSubmitMessage(prompt);
    setPrompt("");
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  });

  return (
    <div className="fixed bottom-0 left-0 w-screen">
      <div className="flex flex-col md:flex-row mr-4  space-x-4 mt-20">
        <textarea
          ref={textareaRef}
          className=" p-4 md:ml-4   h-40 mb-4 md:w-2/3 w-full rounded-xl"
          style={{ resize: "none" }}
          onChange={handleTextareaChange}
          value={prompt}
        ></textarea>
        <div className="flex md:flex-col my-4 md:space-y-4 justify-around mt-2">
          <Button
            label="Clear"
            backgroundColor="blue"
            onClick={() => setPrompt("")}
          />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
