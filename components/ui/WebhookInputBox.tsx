import React, { useState } from "react";
import axios from "axios";
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

  const handleValidationOnClick = () => {
    const isValidSubmission = submissionInput.includes("vercel.app");

    if (isValidSubmission) {
      const webhookUrl =
        "https://hooks.slack.com/services/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";

      axios
        .post(webhookUrl, {
          text: `New submission for assignment ${assignmentId}: ${submissionInput}`,
        })
        .then((response) => {
          console.log(response);
          alert("Success!  A coach will be updated on your progress!");
        })
        .catch((error) => {
          console.log(error);
          alert("There was an error sending your submission.");
        });
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
        <Button label="Save" onClick={handleValidationOnClick} />
      </div>
    </div>
  );
};
export default WebhookInputBox;
