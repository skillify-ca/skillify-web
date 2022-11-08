import { useMutation } from "@apollo/client";
import router from "next/router";
import React, { useState } from "react";
import { FETCH_USER_CODING_ASSIGNMENTS } from "../../../graphql/fetchUserCodingAssignments";
import { UPSERT_USER_CODING_ASSIGNMENTS } from "../../../graphql/upsertUserCodingAssignments";
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
  const [saveAssignmentInput] = useMutation(UPSERT_USER_CODING_ASSIGNMENTS, {
    refetchQueries: [{ query: FETCH_USER_CODING_ASSIGNMENTS }],
    onCompleted: () => router.push("/studentPortal/web/React/assignments/test"),
  });

  const { user } = useAuth();

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
                objects: "fill this in here",
              },
            });
          }}
        />
      </div>
    </div>
  );
};
export default AssignmentInputBox;
