import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import googleClassroomImg from "../public/images/assignments/google-classroom.svg";
import { resources } from "./api/resources";
import { MultipleChoice } from "../components/questionTypes/MultipleChoice";
import { GuessData } from "./api/guessData";
import { Button } from "../components/ui/Button";
import { stages } from "konva/lib/Stage";
import TeX from "@matejmazur/react-katex";
import {
  Question,
  MCOption,
  MCModel,
  AnswerType,
  FillOption,
  fillBlankModel,
} from "../pages/api/question";
import { QuestionType } from "./api/questionTypes";
import { react } from "@babel/types";
import { TrueorFalse } from "../components/questionTypes/TrueorFalse";
import { Skill } from "./api/skill";

enum Stage {
  START,
  QUIZ,
}

export default function djacobs(props) {
  /*
    Extra questions
    "What is the measurement of <a? (Tip: Just write the number.) ",
    "A triangle has 2 angles that are 50 degrees. Is it possible for the last angle to be obtuse?",
    "Which of the following letters has a right- angle in it?",
    "Use your protractor for this question! Which of the following are the interior angles of this pyramid?"
  */

  const questionData = [
    "The sum of the interior (inside) angles of a triangle add up to what?",
    "What is the measurement of <a? (Tip: Just write the number.) ",
    "Which 3 angles add up to 180 degrees?",
    "A triangle has 2 angles that are 50 degrees. Is it possible for the last angle to be obtuse?",
    "Which of the following letters has a right- angle in it?",
  ];

  const onSubmit = (guess: GuessData) => {
    console.log(guess);
  };

  const [stage, setStage] = useState(Stage.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onStartQuiz = () => {
    setStage(Stage.QUIZ);
  };

  const backToPrevious = () => {
    if (currentQuestionIndex == 0) {
      setStage(Stage.START);
    } else {
      setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(
      Math.min(questionData.length - 1, currentQuestionIndex + 1)
    );
    console.log(currentQuestionIndex + 1);
  };

  const Q1 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[0]}
        option1={{
          id: "option1",
          text: "90",
        }}
        option2={{
          id: "option2",
          text: "180",
        }}
        option3={{
          id: "option3",
          text: "360",
        }}
        answer="120"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );

  const Q2 = (
    <React.Fragment>
      <p className="text-2xl text-center">{questionData[1]}</p>
      <div className="text-center">
        <label>Final Answer</label>
        <input className="p-4 text-lg" placeholder="Any degree" />
      </div>
      <div className="flex flex-col items-center">
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={nextQuestion}
        />
      </div>
    </React.Fragment>
  );

  const Q3Data: Question = {
    text: questionData[2],
    answer: "True",
    answerType: AnswerType.BOOLEAN,
    questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
    skill: Skill.NUMBERS_50,
  };
  const Q3 = (
    <React.Fragment>
      <TrueorFalse question={Q3Data} answer="Yes" submitGuess={nextQuestion} />
    </React.Fragment>
  );

  const Q4 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[3]}
        option1={{
          id: "option1",
          text: "Yes",
        }}
        option2={{
          id: "option2",
          text: "No",
        }}
        option3={{
          id: "option3",
          text: "N/A",
        }}
        answer="Yes"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );

  const Q5 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[4]}
        option1={{
          id: "option1",
          text: "J",
        }}
        option2={{
          id: "option2",
          text: "K",
        }}
        option3={{
          id: "option3",
          text: "L",
        }}
        answer="L"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );

  const questionComponent = [Q1, Q2, Q3, Q4, Q5];

  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <Navbar />
      <div id="Form">
        {stage == Stage.START && (
          <div className="flex flex-col gap-8">
            <p className="text-2xl text-center bg-blue-400">Giza Form</p>
            <div className="flex flex-col items-center col gap-8">
              <div className="text-center">
                <label>Group Name</label>
                <input className="p-4 text-lg" />
              </div>
              <Button
                label="Start"
                backgroundColor="blue"
                textColor="white"
                onClick={onStartQuiz}
              />
            </div>
          </div>
        )}
        {stage == Stage.QUIZ && (
          <div id="QuizForm" className="flex flex-col gap-8">
            <div id="FormHeader">
              <p className="text-2xl text-center bg-blue-400">Giza Form</p>
            </div>
            <div id="FormBody" className="flex flex-col gap-8">
              {questionComponent[currentQuestionIndex]}
            </div>
            <div id="FormEnd" className="flex flex-col items-center">
              <Button
                label="Back"
                backgroundColor="blue"
                textColor="white"
                onClick={backToPrevious}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
