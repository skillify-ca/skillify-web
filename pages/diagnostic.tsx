import React, { useEffect, useRef, useState } from "react";
import DiagnosticResults from "../components/assessment/DiagnosticResults";
import DiagnosticTestForm from "../components/assessment/DiagnosticTestForm";
import QuestionSet from "../components/stories/QuestionSet";
import { GuessData } from "./api/guessData";
import { Question } from "./api/question";
import { DiagnosticState, setDiagnostic } from "../redux/diagnosticSlice";
import { useAppDispatch } from "../redux/store";
import { Grade, Skill, Topic } from "./api/skill";
import { getNextQuestion } from "./api/diagnostic/diagnosticQuestionGenerator";
import { getWorkSheets } from "./api/worksheets";
import {
  getCalculatedGrade,
  getGradeLevelForTopic,
  getResultForSkill,
} from "./api/diagnostic/diagnosticGrader";
import { generateQuestionForSkill } from "./api/questionGenerator";
import Navbar from "../components/Navbar";
import getFourthGradeQuestion, { getFifthGradeQuestion, getSixthGradeQuestion } from "./api/diagnostic/juniorDiagnosticQuestionGenerator";

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
  const [grade, setGrade] = useState(Grade.GRADE_3);
  const [stage, setStage] = useState(STAGE.CREATE);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [guessAns, setGuessAns] = useState<Array<string>>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Question[]>([]);
  const [juniorDiagnosticQuestions, setJuniorDiagnosticQuestions] = useState<Question[]>([]);
  const [currentJuniorQuestion, setCurrentJuniorQuestion] = useState<number>(0)
  const [gradeLevel, setGradeLevel] = useState(Grade.GRADE_4) // 0 - 4th grade list, 1 - 5th grade list, 2 - 6th grade list

  const getGradeRange: () => string = () => {

    return [Grade.GRADE_1, Grade.GRADE_2, Grade.GRADE_3].includes(grade)
      ? "Primary"
      : "Junior";

  };

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

    await fetch(url, options);
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const juniorGrades = [Grade.GRADE_4, Grade.GRADE_5, Grade.GRADE_6]

  // looks at gradeLevel and returns questions
  const getGradeList = (gradeLevel) => {

    if (gradeLevel == Grade.GRADE_4) {
      return getFourthGradeQuestion()
    } else if (gradeLevel == Grade.GRADE_5) {
      return getFifthGradeQuestion()
    } else if (gradeLevel == Grade.GRADE_6) {
      return getSixthGradeQuestion()
    }
  }

  // Tells us whether we need to move to the next topic
  const shouldMoveToNextTopic = () => {
    const lastQuestionsInTopic = [2, 5, 8];
    if (lastQuestionsInTopic.includes(currentJuniorQuestion)) {
      return true;
    } else {
      return false
    }
  }

  const submitGuess = async (guessData: GuessData) => {
    if (guessData.guess == "" || guessData.guess == " groups of ") {
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
    updateGuess = guesses.concat(guessData.guess.toString());
    setGuesses(updateGuess);
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion];
    setAnsweredQuestions(newAnsweredQuestions);

    // If user is not at the end of the test
    if (newAnsweredQuestions.length < TOTAL_QUESTIONS) {
      setOpacity(0);
      await delay(150);
      setOpacity(1);

      if (getGradeRange() == "Junior") {
        setCurrentJuniorQuestion(currentJuniorQuestion + 1)

        if (shouldMoveToNextTopic()) {
          setJuniorDiagnosticQuestions(getFourthGradeQuestion())
          setGradeLevel(Grade.GRADE_4)
        } else if (guessData.isCorrect) {
          const newGradeLevel = juniorGrades[juniorGrades.indexOf(Grade.GRADE_4) + 1] // because they got it right move them up a grade
          const newQuestions = getGradeList(newGradeLevel) // get questions for new grade level
          setJuniorDiagnosticQuestions(newQuestions) // set new questions
          setGradeLevel(newGradeLevel)
          console.log(newGradeLevel)
        } else if (!guessData.isCorrect && juniorDiagnosticQuestions == getFifthGradeQuestion()) {
          setJuniorDiagnosticQuestions(getFourthGradeQuestion())
          setGradeLevel(Grade.GRADE_4)
        }

      } else {
        // Primary grades questions
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
    }

    // If user is at the end of the test
    if (newAnsweredQuestions.length >= TOTAL_QUESTIONS) {
      const results: DiagnosticState = {
        questions: newAnsweredQuestions,
        guessAns: updateGuessAns,
        guesses: updateGuess,
        grade: grade,
        email: email,
        firstName: name,
        lastName: lastName,
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
      isCorrect: false,
    });
  };

  useEffect(() => {
    setJuniorDiagnosticQuestions(getFourthGradeQuestion())
  }, []);

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
          firstName={name}
          setFirstName={setName}
          lastName={lastName}
          setLastName={setLastName}
          grade={grade}
          setGrade={setGrade}
        />
      );
      break;
    case STAGE.TEST:
      component = (
        <div>
          <div className="flex justify-between pt-4 px-8 items-center">
            <p className="font-semibold text-gray-500">
              Question: {answeredQuestions.length} / 12
            </p>
            <p
              onClick={onIDontKnowClick}
              className="bg-gray-200 hover:bg-blue-200 cursor-pointer p-2 rounded-xl shadow-md font-semibold text-gray-500"
            >
              I don't know 🤔
            </p>
          </div>
          <div
            className={isShaking ? "animate-shake" : ""}
            onAnimationEnd={() => setIsShaking(false)}
          >
            {(getGradeRange() == "Primary" && (
              <QuestionSet
                title=""
                questionData={[currentQuestion]}
                index={0}
                inputElement={inputElement}
                submitGuess={submitGuess}
                score={correctGuesses}
                diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
              />)) ||
              (getGradeRange() == "Junior" && (
                <QuestionSet
                  title=""
                  questionData={juniorDiagnosticQuestions}
                  index={currentJuniorQuestion}
                  inputElement={inputElement}
                  submitGuess={submitGuess}
                  score={correctGuesses}
                  diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
                />))}
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
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
