import React, { useState } from "react";
import { Button } from "./Button";

export interface WebhookInputBoxProps {
  placeholder: string;
  assignmentId: string;
}

export const WebhookInputBox: React.FC<WebhookInputBoxProps> = ({
  placeholder,
  assignmentId,
}: WebhookInputBoxProps) => {
  const [submissionInput, setSubmissionInput] = useState("");

  const sendSlackNotification = async () => {
    const isValidSubmission = submissionInput.includes("vercel.app");

    if (isValidSubmission) {
      const response = await fetch(`/api/slack/${submissionInput}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } else {
      alert("Please submit a valid codesandbox/vercel link");
    }
  };

  return (
    <div className="flex flex-row dark:bg-gray-900 my-4 space-x-4">
      <input
        className={
          "text-left px-2 border rounded-md shadow-md text-murkrow w-1/2"
        }
        id="input"
        type="string"
        value={submissionInput}
        placeholder={placeholder}
        onChange={(e) => {
          setSubmissionInput(e.target.value);
        }}
      />
      <div className="col-start-1">
        <Button label="Save" onClick={sendSlackNotification} />
      </div>
    </div>
  );
};
export default WebhookInputBox;
