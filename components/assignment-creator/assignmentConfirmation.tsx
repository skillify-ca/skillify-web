import React from "react";
import Script from "next/script";
import Card from "../ui/Card";
import Image from "next/image";
import teacherImg from "../../public/images/assignments/teacher.png";

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
    <div className="flex flex-col p-4 items-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
      <Card size="large">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-xl">
            Almost there! Click below to share to your Google Classroom
          </p>
          <div
            className="g-sharetoclassroom"
            data-size="64"
            data-url={`https://www.mathchamp.ca/assignments/${getAssignmentId()}`}
          ></div>
        </div>
      </Card>
      <Image src={teacherImg} objectFit="contain" />
      </div>
    </div>
  );
};

export default AssignmentConfirmation;
