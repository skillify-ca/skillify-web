import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_USER_ASSIGNMENT_SUBMISSIONS } from "../../../graphql/fetchUserAssignmentSubmissions";
import { UPSERT_USER_ASSIGNMENT_SUBMISSIONS } from "../../../graphql/upsertUserAssignmentSubmissions";
import { useAuth } from "../../../lib/authContext";
import { Button } from "../../ui/Button";

export interface AssignmentInputBoxProps {
  placeholder: string;
  assignmentId: string;
}

export const AssignmentInputBox: React.FC<AssignmentInputBoxProps> = ({
  placeholder,
  assignmentId,
}: AssignmentInputBoxProps) => {
  const [submissionInput, setSubmissionInput] = useState("");
  const { user } = useAuth();
  const submissionVariables = {
    user_id: user.uid,
    submission_link: submissionInput,
    assignment_id: assignmentId,
  };

  const [saveAssignmentInput] = useMutation(
    UPSERT_USER_ASSIGNMENT_SUBMISSIONS,
    {
      onCompleted: () => {
        alert("You have successfully saved your link.  Press continue.");
      },
      refetchQueries: [FETCH_USER_ASSIGNMENT_SUBMISSIONS],
    }
  );

  const handleValidationOnClick = () => {
    const isValidSubmission =
      submissionInput.includes("codesandbox.io/") ||
      submissionInput.includes("vercel.app");

    if (isValidSubmission) {
      saveAssignmentInput({
        variables: {
          objects: submissionVariables,
        },
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
export default AssignmentInputBox;
