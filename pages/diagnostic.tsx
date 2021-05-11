import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/stories/Button";
import DiagnosticResults from "../components/stories/DiagnosticResults";
import DiagnosticTestForm from "../components/stories/DiagnosticTestForm";
import Dropdown from "../components/stories/Dropdown";
import QuestionSet from "../components/stories/QuestionSet";
import Toggle from "../components/stories/Toggle";
import {
  generateQuestionsForDiagnostic,
  Question,
  TestLength,
  Topic,
} from "./api/questionGenerator";
import { QuestionType } from "./api/questionTypes";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
}

export default function Diagnostic(props) {
  const [topics, setTopics] = useState([]);
  const [testLength, setTestLength] = useState(TestLength.MEDIUM);
  const [stage, setStage] = useState(STAGE.CREATE);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [questionData, setQuestionData] = useState<Question[]>([
    { text: "", answer: 0, questionType: QuestionType.HORIZONTAL_EQUATION },
  ]);
  const inputElement = useRef(null);

  const submitGuess = (e) => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    }
    let isCorrect = Number.parseInt(e) == questionData[index].answer;
    if (isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
    }
    if (index == questionData.length - 1) {
      const correctAns = correctGuesses;
      const wrongAns = questionData.length - correctGuesses;
      console.log(correctAns);
      console.log(wrongAns);
    }
  };

  const createDiagnostic = (topics: Topic[], testLength: TestLength) => {
    setTopics(topics);
    setTestLength(testLength);
    setStage(STAGE.TEST);
  };

  useEffect(() => {
    setQuestionData(generateQuestionsForDiagnostic(testLength, topics));
  }, [topics, testLength]);

  let component;
  switch (stage) {
    case STAGE.CREATE:
      component = <DiagnosticTestForm onClick={createDiagnostic} />;
      break;
    case STAGE.TEST:
      component = (
        <QuestionSet
          title=""
          questionData={questionData}
          index={index}
          inputElement={inputElement}
          submitGuess={submitGuess}
        />
      );
      break;
    case STAGE.RESULTS:
      component = <DiagnosticResults />;
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      {correctGuesses}
      <div className="p-8 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
}
