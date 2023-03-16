import { useRouter } from "next/router";
import React from "react";
import QuizNavbar from "../../components/quizzes/quiznavbar";
import { Button } from "../../components/ui/Button";

const Intake = () => {
  const router = useRouter();

  return (
    <div className="w-full space-y-4 ">
      <QuizNavbar />
      <div className="flex flex-col items-center text-center space-y-6 px-4">
        <h1 className="text-3xl font-semibold">
          Career in Tech Personality Quiz{" "}
        </h1>
        <p className="text-xl font-medium px-3">
          Take this free quiz to find out what jobs in tech fit you best!
        </p>
        <div className="text-xl space-y-2 text-left">
          <h3>First Name</h3>{" "}
          <input
            type="text"
            name="name"
            className="shadow appearance-none border border-gray-500 rounded-lg px-6"
          ></input>
          <h3>Email Address</h3>{" "}
          <input
            type="email"
            name="email"
            className="shadow appearance-none border border-gray-500 rounded-lg px-6"
          ></input>
        </div>
        <Button
          backgroundColor="yellow"
          label="Start Quiz"
          onClick={() => router.push("/careerQuiz/edu-background")}
        />
      </div>
    </div>
  );
};
Intake.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default Intake;
