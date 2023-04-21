import { useMutation } from "@apollo/client/react/hooks/useMutation";
import React, { useState } from "react";
import { UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE } from "../../../../graphql/quizzes/upsertCodingLanguageQuiz";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "./SkillifyNavbar";

type StartQuizProps = {
  onNextClick: () => void;
  title: string;
  body: string;
  quizResponseId: number | undefined;
  setQuizResponsedId: (id: number) => void;
};

const StartQuiz = ({
  onNextClick,
  body,
  title,
  quizResponseId,
  setQuizResponsedId,
}: StartQuizProps) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const [saveUserInputs] = useMutation(UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE, {
    onCompleted: (data) => {
      console.log("quiz response id before setting", quizResponseId);
      if (!quizResponseId) {
        console.log(
          "quiz response inside if statement from query",
          data.insert_coding_language_quiz.returning[0].id
        );
        setQuizResponsedId(
          parseInt(data.insert_coding_language_quiz.returning[0].id)
        );
      }
    },
  });

  const handleSaveUserInputs = (userInput: { name: string; email: string }) => {
    saveUserInputs({ variables: { objects: userInput } });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="w-full space-y-4 ">
      <SkillifyNavbar hidden={true} onBackClick={() => ""} />
      <div className="flex justify-center p-4 ml-16 "></div>
      <div className="flex flex-col items-center px-4 space-y-6 text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="px-3 text-xl font-medium">{body}</p>
        <div className="space-y-2 text-xl text-left">
          <h3 className="ml-8">First Name</h3>{" "}
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleInputChange}
            className="w-4/5 ml-8 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
          <h3 className="ml-8">Email Address</h3>{" "}
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
            className="w-4/5 ml-8 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
        </div>
        <Button
          backgroundColor="yellow"
          label="Start Quiz"
          disabled={userInput.name.length == 0 && userInput.email.length == 0}
          onClick={() => {
            onNextClick();
            handleSaveUserInputs(userInput);
          }}
        />
      </div>
    </div>
  );
};

export default StartQuiz;
