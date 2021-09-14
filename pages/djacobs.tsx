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
import Q1 from "../components/giza/Q1";
import Q2 from "../components/giza/Q2";
import Q3 from "../components/giza/Q3";
import next from "next";
import Q4 from "../components/giza/Q4";
import Q5 from "../components/giza/Q5";
import Q6 from "../components/giza/Q6";
import Q7 from "../components/giza/Q7";
import Q8 from "../components/giza/Q8";
import Q9 from "../components/giza/Q9";
import Q10 from "../components/giza/Q10";
import Q11 from "../components/giza/Q11";
import Q12 from "../components/giza/Q12";
import Q13 from "../components/giza/Q13";
import Q14 from "../components/giza/Q14";
import Q15 from "../components/giza/Q15";
import Q16 from "../components/giza/Q16";

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
    "Use your protractor for this question! Which of the following are the interior angles of this pyramid?",
    "How would you classify this triangle?",
    "In the space provided, write a secret password (using UPPER CASE LETTERS* and NO spaces) using the triangle colours in the photo. Here is your clue: isosceles, scalene, right, equilateral, scalene.",
    "You're almost at the end of the tunnel! In the space provided, determine the secret password using the triangles provided (use UPPER CASE LETTERS and no spaces) Here is the clue: right- isosceles, small equilateral, large equilateral, obtuse- scalene.",
    "If <a is 65 degrees, what is <b?",
    "Which angle is 40 degrees?",
    "Your group comes across an ancient Egyptian sundial. If <b is 73 degrees, solve what <a is.",
    "What do all of these shapes have in common?",
    "What is the missing angle? Use your knowledge of complementary, supplementary, or opposite angles to help you. Tip: Only type the number.",
    "You're almost out! Using your knowledge of supplementary angles, what is <d?",
    "LAST QUESTION before you escape the clutches of the mummy! In the space provided, write a secret password by figuring out the missing angles of the triangle (the grey circles). Your secret password needs to be in numerical order with NO spaces (e.x. 1234567).",
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

  // End of Quiz: YOU MADE IT OUT! Head back to main session to collect your prize!
  const questionComponent = [
    Q1(questionData[0], nextQuestion),
    Q2(questionData[1], nextQuestion),
    Q3(questionData[2], nextQuestion),
    Q4(questionData[3], nextQuestion),
    Q5(questionData[4], nextQuestion),
    Q6(questionData[5], nextQuestion),
    Q7(questionData[6], nextQuestion),
    Q8(questionData[7], nextQuestion),
    Q9(questionData[8], nextQuestion),
    Q10(questionData[9], nextQuestion),
    Q11(questionData[10], nextQuestion),
    Q12(questionData[11], nextQuestion),
    Q13(questionData[12], nextQuestion),
    Q14(questionData[13], nextQuestion),
    Q15(questionData[14], nextQuestion),
    Q16(questionData[15], nextQuestion),
  ];

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
