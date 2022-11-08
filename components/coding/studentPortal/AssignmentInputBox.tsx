import { useMutation } from "@apollo/client";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FETCH_USER_CODING_ASSIGNMENTS } from "../../../graphql/fetchUserCodingAssignments";
import { UPSERT_USER_CODING_ASSIGNMENTS } from "../../../graphql/upsertUserCodingAssignments";
import { Button } from "../../ui/Button";

export interface AssignmentInputBoxProps {
  placeholder: string;
  submission_link: string;
}

export const AssignmentInputBox: React.FC<AssignmentInputBoxProps> = ({
  placeholder,
  submission_link,
}: AssignmentInputBoxProps) => {
  const [submissionInput, setSubmissionInput] =
    useState<AssignmentInputBoxProps>();
  const [saveAssignmentInput] = useMutation(UPSERT_USER_CODING_ASSIGNMENTS, {
    refetchQueries: [{ query: FETCH_USER_CODING_ASSIGNMENTS }],
    onCompleted: () => router.push("/studentPortal/web/React/assignments/test"),
  });

  return (
    <div className="grid grid-cols-1 gap-4 p-6 bg-white shadow-lg dark:bg-gray-900 ">
      <input
        className={`text-left p-2 border rounded-md shadow-md w-full  text-murkrow 
              }`}
        id="input"
        type="string"
        value={submission_link}
        placeholder={placeholder}
        onChange={(e) => {
          setSubmissionInput((prevState) => ({
            ...prevState,
            submission_link: e.target.value,
          }));
        }}
      />
      <div className="col-start-1 mt-8">
        <Button
          label="Save"
          onClick={() => {
            // this is a workaround to remove __typename from the gql response which causes mutation to fail
            const savedInputForHasura = {
              submission_link: submissionInput.submission_link,
            };

            saveAssignmentInput({
              variables: {
                objects: savedInputForHasura,
              },
            });
          }}
        />
      </div>
    </div>
  );
};
export default AssignmentInputBox;
