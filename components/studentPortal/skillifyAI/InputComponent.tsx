import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/Button";

interface InputComponentProps {
  onSubmitMessage: (formattedMessage: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSubmitMessage }) => {
  const [prompt, setPrompt] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newPrompt = event.target.value.trim();
    setPrompt(event.target.value);
    setIsSubmitDisabled(!newPrompt);
  };

  const handleSubmit = () => {
    onSubmitMessage(prompt);
    setPrompt("");
    setIsSubmitDisabled(true);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  });

  return (
    <div className="fixed -bottom-20 left-0 w-full md:w-screen mb-4">
      <div className="flex flex-col md:flex-row md:justify-start md:space-x-4 mx-2 md:mx-4 space-y-4 md:space-y-0">
        <textarea
          ref={textareaRef}
          className="p-4 w-full md:w-2/3 h-36 rounded-xl resize-none"
          onChange={handleTextareaChange}
          value={prompt}
        ></textarea>
        <div className="flex md:flex-col md:space-x-0 justify-between md:space-y-4 md:ml-0">
          <Button
            label="Clear"
            backgroundColor="blue"
            onClick={() => {
              setPrompt("");
              setIsSubmitDisabled(true);
            }}
          />
          <Button
            label="Submit"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
