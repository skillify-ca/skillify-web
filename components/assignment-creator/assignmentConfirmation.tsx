import React from "react";
import Script from "next/script";

type assignmentConfirmationProps = {
  assignmentId: number;
};

const AssignmentConfirmation = ({
  assignmentId,
}: assignmentConfirmationProps) => {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />
      <div
        className="g-sharetoclassroom"
        data-size="32"
        data-url={`https://www.mathchamp.ca/assignments/${assignmentId}`}
      ></div>
    </div>
  );
};

export default AssignmentConfirmation;
