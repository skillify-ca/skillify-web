import React from "react";
import Script from "next/script";

type assignmentConfirmationProps = {
  assignmentId: number;
};

const AssignmentConfirmation = ({
  assignmentId,
}: assignmentConfirmationProps) => {
  console.log("assignmentId passed in", assignmentId);
  const getAssignmentId = () => {
    return assignmentId;
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />
      <div
        className="g-sharetoclassroom"
        data-size="32"
        data-url={`https://www.mathchamp.ca/assignments/${getAssignmentId()}`}
      ></div>
    </div>
  );
};

export default AssignmentConfirmation;
