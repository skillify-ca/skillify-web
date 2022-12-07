import { useMutation } from "@apollo/client";
import router from "next/router";
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
        router.push("/studentPortal/web/React/assignments/template");
        alert("You have successfully saved your link.  Press continue.");
      },
      refetchQueries: [FETCH_USER_ASSIGNMENT_SUBMISSIONS],
    }
  );

  return (
    <div className="grid grid-cols-1 gap-4 dark:bg-gray-900 ">
      <input
        className={
          "text-left p-2 border rounded-md shadow-md w-full text-murkrow"
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
        <Button
          label="Save"
          onClick={() => {
            saveAssignmentInput({
              variables: {
                objects: submissionVariables,
              },
            });
            setSubmissionInput("");
          }}
        />
      </div>
    </div>
  );
};
export default AssignmentInputBox;
