import React, { useState } from "react";
import { Button } from "./Button";

// Use this input box to send messages on slack for small assignments
export interface WebhookInputBoxProps {
  placeholder: string;
  validationRequirement: string;
}

export const WebhookInputBox: React.FC<WebhookInputBoxProps> = ({
  placeholder,
  validationRequirement,
}: WebhookInputBoxProps) => {
  const [submissionInput, setSubmissionInput] = useState("");

  const sendSlackNotification = async () => {
    const isValidSubmission = submissionInput.includes(validationRequirement);

    if (isValidSubmission) {
      const response = await fetch(`/api/slack/${submissionInput}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      } else {
        alert("Your vercel app has been successfully submitted.");
      }
    } else {
      alert(`Please submit a valid ${validationRequirement} link`);
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
        <Button label="Submit" onClick={sendSlackNotification} />
      </div>
    </div>
  );
};
export default WebhookInputBox;
