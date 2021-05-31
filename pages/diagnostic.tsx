import React, { useEffect, useRef, useState } from "react";
import DiagnosticResults from "../components/stories/DiagnosticResults";
import DiagnosticTestForm from "../components/stories/DiagnosticTestForm";
import QuestionSet from "../components/stories/QuestionSet";
import { GuessData } from "./api/guessData";
import { AnswerType, Question } from "./api/question";
import { QuestionType } from "./api/questionTypes";
import { DiagnosticState, setDiagnostic } from "../redux/diagnosticSlice";
import { useAppDispatch } from "../redux/store";
import { Skill, Topic } from "./api/skill";
import { generateQuestionsForDiagnostic } from "./api/diagnostic/diagnosticQuestionGenerator";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { getWorkSheets } from "./api/worksheets";
import {
  getCalculatedGrade,
  getGradeLevelForTopic,
} from "./api/diagnostic/diagnosticGrader";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
}

const Diagnostic = () => {
  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState(1);
  const [grade, setGrade] = useState("");
  const [stage, setStage] = useState(STAGE.CREATE);
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [guesses, setGuesses] = useState<Array<string>>([]);
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
        topicGrades: [
          getGradeLevelForTopic(Topic.ADDITION, results),
          getGradeLevelForTopic(Topic.SUBTRACTION, results),
          getGradeLevelForTopic(Topic.MULTIPLICATION, results),
          getGradeLevelForTopic(Topic.DIVISION, results),
        ],
      }),
    };
    console.log(options.body);

    await fetch(url, options);
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const submitGuess = async (guessData: GuessData) => {
    if (index < questionData.length - 1) {
      setOpacity(0);
      await delay(150);
      setIndex(index + 1);
      setOpacity(1);
    }

    // Save if they guessed the question correctly or not
    let updateGuessAns;
    if (guessData.isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
      updateGuessAns = guessAns.concat("Correct");
    } else {
      updateGuessAns = guessAns.concat("Incorrect");
    }
    setGuessAns(updateGuessAns);

    // Save the actual guess for reporting
    let updateGuess;
    updateGuess = guesses.concat(guessData.guess);
    setGuesses(updateGuess);

    if (index == questionData.length - 1) {
      const results: DiagnosticState = {
        questions: questionData,
        guessAns: updateGuessAns,
        guesses: updateGuess,
        grade: grade,
        email: email,
      };
      dispatch(setDiagnostic(results));
      requestEmail(results);
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
      component = (
        <DiagnosticTestForm
          onClick={createDiagnostic}
          email={email}
          setEmail={setEmail}
        />
      );
      break;
    case STAGE.TEST:
      component = (
        <QuestionSet
          title=""
          questionData={questionData}
          index={index}
          inputElement={inputElement}
          submitGuess={submitGuess}
          score={correctGuesses}
          diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
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
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <DiagnosticNavbar />
      <div className="p-4 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
