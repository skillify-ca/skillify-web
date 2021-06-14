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
import {
  generateQuestionsForDiagnostic,
  getNextQuestion,
  Grade,
} from "./api/diagnostic/diagnosticQuestionGenerator";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { getWorkSheets } from "./api/worksheets";
import {
  getCalculatedGrade,
  getGradeLevelForTopic,
  getResultForSkill,
} from "./api/diagnostic/diagnosticGrader";
import { generateQuestionForSkill } from "./api/questionGenerator";
import { Button } from "../components/stories/Button";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
}

const Diagnostic = () => {
  const TOTAL_QUESTIONS = 12;
  const QUESTIONS_PER_TOPIC = 3;

  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [grade, setGrade] = useState(Grade.GRADE_THREE);
  const [stage, setStage] = useState(STAGE.CREATE);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [guessAns, setGuessAns] = useState<Array<string>>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Question[]>([]);

  const [questionsLeftInTopic, setQuestionsLeftInTopic] = useState<number>(
    QUESTIONS_PER_TOPIC
  );
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const inputElement = useRef(null);

  const requestEmail = async (results: DiagnosticState) => {
    const workSheets = getWorkSheets(results);
    const url = "https://math-app-1.herokuapp.com/email";
    const topicGrades = [
      getGradeLevelForTopic(Topic.ADDITION, results),
      getGradeLevelForTopic(Topic.SUBTRACTION, results),
      getGradeLevelForTopic(Topic.MULTIPLICATION, results),
      getGradeLevelForTopic(Topic.DIVISION, results),
    ];
    const skillGrades = [
      getResultForSkill(Skill.ADDITION_SINGLE, results),
      getResultForSkill(Skill.ADDITION_DOUBLE, results),
      getResultForSkill(Skill.ADDITION_TRIPLE, results),
      getResultForSkill(Skill.SUBTRACTION_SINGLE, results),
      getResultForSkill(Skill.SUBTRACTION_DOUBLE, results),
      getResultForSkill(Skill.SUBTRACTION_TRIPLE, results),
      getResultForSkill(Skill.EQUAL_GROUP_10_ITEMS, results),
      getResultForSkill(Skill.MULTIPLICATION_5, results),
      getResultForSkill(Skill.MULTIPLICATION_10, results),
      getResultForSkill(Skill.EQUAL_SHARING_8_ITEMS, results),
      getResultForSkill(Skill.DIVIDE_12_EQUALLY, results),
      getResultForSkill(Skill.DIVIDE_100, results),
    ];
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        worksheets: workSheets,
        calculatedGrade: getCalculatedGrade(results),
        topicGrades: topicGrades,
        skillGrades: skillGrades,
        results: results,
      }),
    };

    // await fetch(url, options);
    console.log(options.body);
    
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const submitGuess = async (guessData: GuessData) => {
    if (guessData.guess == "") {
      setIsShaking(true);
      return;
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
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion];
    setAnsweredQuestions(newAnsweredQuestions);

    if (newAnsweredQuestions.length < TOTAL_QUESTIONS) {
      setOpacity(0);
      await delay(150);
      setOpacity(1);

      const newQuestionsLeftInTopic =
        questionsLeftInTopic == 0
          ? QUESTIONS_PER_TOPIC - 1
          : questionsLeftInTopic - 1;
      const nextQuestion = getNextQuestion(
        currentQuestion,
        guessData.isCorrect,
        newQuestionsLeftInTopic
      );
      setCurrentQuestion(nextQuestion);
      setQuestionsLeftInTopic(newQuestionsLeftInTopic);
    }
    if (newAnsweredQuestions.length >= TOTAL_QUESTIONS) {
      const results: DiagnosticState = {
        questions: newAnsweredQuestions,
        guessAns: updateGuessAns,
        guesses: updateGuess,
        grade: grade,
        email: email,
        name: name,
      };
      dispatch(setDiagnostic(results));
      requestEmail(results);
      setStage(STAGE.RESULTS);
    }
  };

  const createDiagnostic = (grade: Grade) => {
    setGrade(grade);
    setStage(STAGE.TEST);
  };

  const onIDontKnowClick = () => {
    submitGuess({
      guess: "I don't know",
      isCorrect: false
    })
  }

  useEffect(() => {
    setCurrentQuestion(generateQuestionForSkill(Skill.ADDITION_SINGLE));
  }, [grade]);

  let component;
  switch (stage) {
    case STAGE.CREATE:
      component = (
        <DiagnosticTestForm
          onClick={createDiagnostic}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
        />
      );
      break;
    case STAGE.TEST:
      component = ( 
        <div>
          <div className="flex justify-between pt-4 px-8 items-center">
            <p className="font-semibold text-gray-500 ">
              Question: {answeredQuestions.length} / 12
            </p>
            <p onClick={onIDontKnowClick} className="bg-gray-200 hover:bg-blue-200 cursor-pointer p-2 rounded-xl shadow-md font-semibold text-gray-500 ">
              I don't know 🤔
            </p>
          </div>
          <div
            className={isShaking ? "animate-shake" : ""}
            onAnimationEnd={() => setIsShaking(false)}
          >     
          <QuestionSet
            title=""
            questionData={[currentQuestion]}
            index={0}
            inputElement={inputElement}
            submitGuess={submitGuess}
            score={correctGuesses}
            diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
          />
          </div>
        </div>
      );
      break;
    case STAGE.RESULTS:
      component = (
        <DiagnosticResults
          correctGuesses={correctGuesses}
          numberOfQuestions={TOTAL_QUESTIONS}
        />
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
