import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/stories/Button";
import DiagnosticConclusion from "../components/stories/DiagnosticConclusion";
import DiagnosticData from "../components/stories/DiagnosticData";
import DiagnosticEvidence from "../components/stories/DiagnosticEvidence";
import DiagnosticResults from "../components/stories/DiagnosticResults";
import DiagnosticTestForm from "../components/stories/DiagnosticTestForm";
import Dropdown from "../components/stories/Dropdown";
import QuestionSet from "../components/stories/QuestionSet";
import Toggle from "../components/stories/Toggle";
import { GuessData } from "./api/guessData";
import { AnswerType, Question } from "./api/question";
import {
  generateQuestionsForDiagnostic,
  TestLength,
  Topic,
} from "./api/questionGenerator";
import { QuestionType } from "./api/questionTypes";
import { connect } from "react-redux";
import { setDiagnostic } from "../redux/diagnosticSlice";
import Link from "next/link";
import { useAppDispatch } from "../redux/store";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
  DATA,
  EVIDENCE,
  CONCLUSION,
}

const Diagnostic = () => {
  const dispatch = useAppDispatch();
  const [topics, setTopics] = useState([]);
  const [testLength, setTestLength] = useState(TestLength.MEDIUM);
  const [stage, setStage] = useState(STAGE.CREATE);
  const [index, setIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [guessAns, setGuessAns] = useState<Array<string>>([]);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
    },
  ]);
  const inputElement = useRef(null);

  const submitGuess = (guessData: GuessData) => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
    }

    if (guessData.isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
      setGuessAns((prevArray) => [...prevArray, "Correct"]);
    } else {
      setGuessAns((prevArray) => [...prevArray, "Incorrect"]);
    }
    if (index == questionData.length - 1) {
      dispatch(
        setDiagnostic({
          questions: questionData,
          guessAns: guessAns,
          topics: topics,
        })
      );
      setStage(STAGE.RESULTS);
    }
  };

  const createDiagnostic = (topics: Topic[], testLength: TestLength) => {
    setTopics(topics);
    setTestLength(testLength);
    setStage(STAGE.TEST);
  };

  const createDiagnosticData = () => {
    setStage(STAGE.DATA);
  };

  const createDiagnosticEvidence = () => {
    setStage(STAGE.EVIDENCE);
  };

  const createDiagnosticConclusion = () => {
    setStage(STAGE.CONCLUSION);
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
      component = (
        <DiagnosticResults correctGuesses={correctGuesses} index={index + 1} />
      );
      break;
    case STAGE.DATA:
      component = (
        <DiagnosticData
          questions={questionData.map((question) => question.text)}
          guessAns={guessAns}
          topics={topics}
        />
      );
      break;
    case STAGE.EVIDENCE:
      component = (
        <DiagnosticEvidence
          topic={topics}
          onClick={createDiagnosticConclusion}
        />
      );
      break;
    case STAGE.CONCLUSION:
      component = <DiagnosticConclusion />;
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="p-8 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
