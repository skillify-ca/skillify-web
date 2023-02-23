import React, { useState } from "react";
import { Button } from "../../ui/Button";

export interface WebhookInputBoxProps {
  placeholder: string;
  validationRequirement: string;
}

// Use this input box to send slack notifications
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
      }
    } else {
      alert(`Please submit a valid ${validationRequirement} link`);
    }
  };

  return (
    <div className="flex flex-row my-4 space-x-4 dark:bg-gray-900">
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
