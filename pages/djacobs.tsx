import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import googleClassroomImg from "../public/images/assignments/google-classroom.svg";
import { resources } from "./api/resources";
import { MultipleChoice } from "../components/questionTypes/MultipleChoice";
import { GuessData } from "./api/guessData";
import { Button } from "../components/ui/Button";
import { stages } from "konva/lib/Stage";

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
  const questions = [
    "The sum of the interior (inside) angles of a triangle add up to what?",
    "Which 3 angles add up to 180 degrees?",
  ];

  const guesses = [
    ["90", "180", "360", "None of the above"],
    ["<1 + <2 + <3", "<2 + <3 + <4", "<3 + <4 + <5", "<4 + <5 + <6"],
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
      Math.min(questions.length - 1, currentQuestionIndex + 1)
    );
    console.log(currentQuestionIndex + 1);
  };

  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <Navbar />
      <div id="Form">
        {stage == Stage.START && (
          <div className="flex flex-col gap-8">
            <p className="text-2xl text-center bg-blue-400">Giza Form</p>
            <div className="flex flex-col items-center">
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
            <div id="FormBody">
              <MultipleChoice
                displayQuestion={questions[currentQuestionIndex]}
                option1={{
                  id: "option1",
                  text: guesses[currentQuestionIndex][0],
                }}
                option2={{
                  id: "option2",
                  text: guesses[currentQuestionIndex][1],
                }}
                option3={{
                  id: "option3",
                  text: guesses[currentQuestionIndex][2],
                }}
                answer="120"
                submitGuess={nextQuestion}
              />
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
