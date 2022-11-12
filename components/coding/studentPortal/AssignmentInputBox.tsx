import { useMutation } from "@apollo/client";
import router from "next/router";
import React, { useState } from "react";
import { UPSERT_USER_ASSIGNMENT_SUBMISSIONS } from "../../../graphql/upsertUserAssignmentSubmissions";
import { useAuth } from "../../../lib/authContext";
import { Button } from "../../ui/Button";

export interface AssignmentInputBoxProps {
  placeholder: string;
  submission_link: string;
}

export const AssignmentInputBox: React.FC<AssignmentInputBoxProps> = ({
  placeholder,
  submission_link,
}: AssignmentInputBoxProps) => {
  const [submissionInput, setSubmissionInput] = useState("");
  const { user } = useAuth();
  const submissionVariables = {
    user_id: user.uid,
    submission_link: submissionInput,
  };
  const [saveAssignmentInput] = useMutation(
    UPSERT_USER_ASSIGNMENT_SUBMISSIONS,
    {
      onCompleted: () => {
        router.push("/studentPortal/web/React/assignments/template");
        alert("You have successfully saved your link.  Press continue.");
      },
    }
  );

  return (
    <div className="grid grid-cols-1 gap-4 p-6 bg-white shadow-lg dark:bg-gray-900 ">
      <input
        className={`text-left p-2 border rounded-md shadow-md w-full  text-murkrow 
              }`}
        id="input"
        type="string"
        value={submissionInput}
        placeholder={placeholder}
        onChange={(e) => {
          setSubmissionInput(e.target.value);
        }}
      />
      <div className="col-start-1 mt-8">
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
