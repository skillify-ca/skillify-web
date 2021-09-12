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

  const Q3 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[0]}
        option1={{
          id: "option1",
          text: "<1 + <2 + <3",
        }}
        option2={{
          id: "option2",
          text: "<2 + <3 + <4",
        }}
        option3={{
          id: "option3",
          text: "<3 + <4 + <5",
        }}
        answer="<3 + <4 + <5"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );

  const Q4Data: Question = {
    text: questionData[3],
    answer: "False",
    answerType: AnswerType.BOOLEAN,
    questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
    skill: Skill.NUMBERS_50,
  };

  const Q4 = (
    <React.Fragment>
      <TrueorFalse
        question={Q4Data}
        answer="False"
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

  const Q6 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[5]}
        option1={{
          id: "option1",
          text: "60 degrees + 60 degrees + 60 degrees",
        }}
        option2={{
          id: "option2",
          text: "65 degrees + 65 degrees + 50 degrees",
        }}
        option3={{
          id: "option3",
          text: "90 degrees + 40 degrees + 50 degrees",
        }}
        answer="60 degrees + 60 degrees + 60 degrees"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  /*
  Acute Isosceles Triangle
  Obtuse Scalene Triangle
  Obtuse Isosceles Triangle
  Acute Scalene Triangle
  */
  const Q7 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[6]}
        option1={{
          id: "option1",
          text: "Acute Isosceles Triangle",
        }}
        option2={{
          id: "option2",
          text: "Acute Scalene Triangle",
        }}
        option3={{
          id: "option3",
          text: "Obtuse Isosceles Triangle",
        }}
        answer="Obtuse Isosceles Triangle"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  //PINKYELLOWBLUEPURPLEGREEN
  const Q8 = (
    <React.Fragment>
      <p className="text-2xl text-center">{questionData[7]}</p>
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
  //DGFH
  const Q9 = (
    <React.Fragment>
      <p className="text-2xl text-center">{questionData[8]}</p>
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
  /*
  115 degrees
  295 degrees
  65 degrees - right answer
  15 degrees
  */
  const Q10 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[9]}
        option1={{
          id: "option1",
          text: "115 degrees",
        }}
        option2={{
          id: "option2",
          text: "65 degrees",
        }}
        option3={{
          id: "option3",
          text: "15 degrees",
        }}
        answer="65 degrees"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  /*
  <a
  <b - Right answer
  <c
  None of the above.
  */
  const Q11 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[10]}
        option1={{
          id: "option1",
          text: "<a",
        }}
        option2={{
          id: "option2",
          text: "<b",
        }}
        option3={{
          id: "option3",
          text: "<c",
        }}
        answer="<b"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  /* 
 107 degrees
287 degrees
17 degrees
None of the above
 */
  const Q12 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[11]}
        option1={{
          id: "option1",
          text: "107 degrees",
        }}
        option2={{
          id: "option2",
          text: "287 degrees",
        }}
        option3={{
          id: "option3",
          text: "17 degrees",
        }}
        answer="107 degrees"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  /*
  They all have at least one right angle.
  Their interior angles add up to 360 degrees.
  Their interior angles add up to 180 degrees.
  They all have at least one obtuse angle.
  */
  const Q13 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[12]}
        option1={{
          id: "option1",
          text: "They all have at least one right angle.",
        }}
        option2={{
          id: "option2",
          text: "Their interior angles add up to 360 degrees.",
        }}
        option3={{
          id: "option3",
          text: "They all have at least one obtuse angle.",
        }}
        answer="Their interior angles add up to 360 degrees."
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  //76
  const Q14 = (
    <React.Fragment>
      <p className="text-2xl text-center">{questionData[13]}</p>
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
  /*
  90 degrees
  100 degrees
  95 degrees
  105 degrees
  */
  const Q15 = (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={questionData[14]}
        option1={{
          id: "option1",
          text: "90 degrees",
        }}
        option2={{
          id: "option2",
          text: "100 degrees",
        }}
        option3={{
          id: "option3",
          text: "95 degrees",
        }}
        answer="Their interior angles add up to 360 degrees."
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
  //426573
  const Q16 = (
    <React.Fragment>
      <p className="text-2xl text-center">{questionData[15]}</p>
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

  // End of Quiz: YOU MADE IT OUT! Head back to main session to collect your prize!
  const questionComponent = [
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6,
    Q7,
    Q8,
    Q9,
    Q10,
    Q11,
    Q12,
    Q13,
    Q14,
    Q15,
    Q16,
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
