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
  const onSubmit = (guess: GuessData) => {
    console.log(guess);
  };

  const [stage, setStage] = useState(Stage.START);

  const onStartQuiz = () => {
    setStage(Stage.QUIZ);
  };

  const backToStartPage = () => {
    setStage(Stage.START);
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
                displayQuestion="What is the angle of this side?"
                option1={{ id: "option1", text: "60" }}
                option2={{ id: "option2", text: "90" }}
                option3={{ id: "option3", text: "120" }}
                answer="120"
                submitGuess={onSubmit}
              />
            </div>
            <div id="FormEnd" className="flex flex-col items-center">
              <Button
                label="Back to Main Page"
                backgroundColor="blue"
                textColor="white"
                onClick={backToStartPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
