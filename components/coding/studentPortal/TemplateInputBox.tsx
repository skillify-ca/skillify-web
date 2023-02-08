import React, { useRef } from "react";

export interface TemplateInputBoxProps {
  templateLink: string;
}

export const TemplateInputBox: React.FC<TemplateInputBoxProps> = ({
  templateLink,
}: TemplateInputBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = async () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      try {
        await navigator.clipboard.writeText(inputValue);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <input
        className="text-left p-2 border rounded-md shadow-md text-murkrow w-1/2"
        ref={inputRef}
        value={templateLink}
      />
      <button onClick={handleCopy}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      </button>
    </div>
  );
};
export default TemplateInputBox;
