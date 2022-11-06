import { useMutation } from "@apollo/client";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";

export interface AssignmentInputBoxProps {
  assignmentInputBox: string;
  placeholder: string;
}

export const AssignmentInputBox: React.FC<AssignmentInputBoxProps> = ({
  assignmentInputBox,
  placeholder,
}: AssignmentInputBoxProps) => {
  const dispatch = useDispatch();

  const [submissionInput, setSubmissionInput] = useState("");
  const [savedInput, setSavedInput] = useState<AssignmentInputBoxProps>();
  //   const [saveAssignmentInput] = useMutation(UPSERT_USER_GOALS, {
  //     refetchQueries: [
  //       { query: FETCH_USER_GOALS },
  //       { query: FETCH_USER_GOALS_COUNT },
  //     ],
  // //     onCompleted: () => router.push("/studentPortal/web/React/assignments/test"),
  //   });
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 p-6 bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-resource-row">
      <input
        className={`text-left p-2 border rounded-md shadow-md w-full md:w-1/2 text-murkrow 
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
            // this is a workaround to remove __typename from the gql response which causes mutation to fail
            const savedInputForHasura = {
              assignmentInputBox: savedInput.assignmentInputBox,
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
