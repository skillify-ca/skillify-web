import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/stories/Button";
import DiagnosticResults from "../components/stories/DiagnosticResults";
import DiagnosticTestForm from "../components/stories/DiagnosticTestForm";
import Dropdown from "../components/stories/Dropdown";
import QuestionSet from "../components/stories/QuestionSet";
import Toggle from "../components/stories/Toggle";
import { GuessData } from "./api/guessData";
import { AnswerType, Question } from "./api/question";
import { QuestionType } from "./api/questionTypes";
import { connect } from "react-redux";
import { setDiagnostic } from "../redux/diagnosticSlice";
import Link from "next/link";
import { useAppDispatch } from "../redux/store";
import { Skill, Topic } from "./api/skill";
import { generateQuestionsForDiagnostic } from "./api/diagnostic/diagnosticQuestionGenerator";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
}

const Diagnostic = () => {
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState(1);
  const [active, setActive] = useState(false);
  const [grade, setGrade] = useState("");
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
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  const inputElement = useRef(null);

  const requestEmail = async (results: DiagnosticState) => {
    const workSheets = getWorkSheets(results);

    const url = "https://math-app-1.herokuapp.com/email";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        worksheets: workSheets,
        results: results,
      }),
    };
    await fetch(url, options);
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const shakeCheck = () => {
    setActive(true);
  };

  const submitGuess = async (guessData: GuessData) => {
    console.log(guessData.guess);
    if (guessData.guess == "") {
      return shakeCheck;
    } else if (index < questionData.length - 1) {
      setOpacity(0);
      await delay(150);
      setIndex(index + 1);
    }

    let updateGuessAns;
    if (guessData.isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
      updateGuessAns = guessAns.concat("Correct");
    } else {
      updateGuessAns = guessAns.concat("Incorrect");
    }
    setGuessAns(updateGuessAns);
    if (index == questionData.length - 1) {
      dispatch(
        setDiagnostic({
          questions: questionData,
          guessAns: updateGuessAns,
        })
      );
      setStage(STAGE.RESULTS);
    }
  };

  const createDiagnostic = (grade: string) => {
    setGrade(grade);
    setStage(STAGE.TEST);
  };
  useEffect(() => {
    setQuestionData(generateQuestionsForDiagnostic());
  }, [grade]);

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
