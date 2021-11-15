import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { GuessData } from "../../api/guessData";
import { Button } from "../../../components/ui/Button";
import Q1 from "../../../components/giza/Q1";
import Q2 from "../../../components/giza/Q2";
import Q3 from "../../../components/giza/Q3";
import Q4 from "../../../components/giza/Q4";
import Q5 from "../../../components/giza/Q5";
import Q6 from "../../../components/giza/Q6";
import Q7 from "../../../components/giza/Q7";
import Q8 from "../../../components/giza/Q8";
import Q9 from "../../../components/giza/Q9";
import Q10 from "../../../components/giza/Q10";
import Q11 from "../../../components/giza/Q11";
import Q12 from "../../../components/giza/Q12";
import Q13 from "../../../components/giza/Q13";
import Q14 from "../../../components/giza/Q14";
import Q15 from "../../../components/giza/Q15";
import Q16 from "../../../components/giza/Q16";
import MiddleOfQuiz from "../../../components/giza/MiddleOfQuiz";
import { start } from "repl";
import { measureTime } from "../../api/time";

enum Stage {
  START,
  QUIZ,
  END,
}

export default function djacobs(props) {
  const questionData = [
    "The sum of the interior (inside) angles of a triangle add up to what?",
    "What is the measurement of <a? (Tip: Just write the number.) ",
    "Which 3 angles add up to 180 degrees?",
    "A triangle has 2 angles that are 50 degrees. Is it possible for the last angle to be obtuse?",
    "Which of the following letters has a right- angle in it?",
    "Use your protractor for this question! Which of the following are the interior angles of this pyramid?",
    "Your group has found a secret tunnel! Put on your thinking caps, the questions are getting harder!",
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

  const [stage, setStage] = useState(Stage.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [groupName, setGroupName] = useState<string>();
  const [studentName, setStudentName] = useState<string>();
  const [guesses, setGuess] = useState<GuessData[]>([]);
  const [score, setScore] = useState<Number>();
  const [isVisible, setIsVisible] = useState<Boolean>();
  const [guessHistory, setGuessHistory] = useState<Map<String, GuessData>>(
    new Map()
  );
  const [guessCounter, setGuessCounter] = useState(1);
  const [wrongAnswerCheck, setWrongAnswerCheck] = useState<Boolean>(true);
  const [shouldAnimate, setShouldAnimate] = useState<Boolean>(true);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [startTime, setStartTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();
  const [totalTimeMin, setTotalTimeMin] = useState<number>();
  const [totalTimeSec, setTotalTimeSec] = useState<String>();

  const onSubmit = (guess: GuessData) => {
    console.log(guess);
  };

  const onStartQuiz = () => {
    var sTime = new Date().getTime();
    setStartTime(sTime);
    setStage(Stage.QUIZ);
  };

  const onGroupNameChange = (currentGroupName: string) => {
    const GN = currentGroupName;
    setGroupName(GN);
  };

  const onStudentNameChange = (currentStudentName: string) => {
    const SN = currentStudentName;
    setStudentName(SN);
  };

  const backToPrevious = () => {
    if (currentQuestionIndex == 0) {
      setStage(Stage.START);
    } else {
      setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
    }
  };
  //Future thing: Use this function to add the guessData from each question page into the guessDataArray
  const nextQuestion = (guess: GuessData) => {
    guesses[currentQuestionIndex] = guess;
    setWrongAnswerCheck(true);
    setQuestionCounter(questionCounter + 1);
    setGuessCounter(1);
    //another method to count the amounts of trues / total question length
    var eTime = new Date().getTime();
    setEndTime(eTime);
    setCurrentQuestionIndex(
      Math.min(questionData.length - 1, currentQuestionIndex + 1)
    );
    if (currentQuestionIndex == questionData.length - 1) {
      setScore(
        Math.round(
          (guesses.filter((guess) => guess.isCorrect == true).length /
            (questionData.length - 1)) *
            100
        )
      );
      var value = measureTime(startTime, eTime);
      setTotalTimeMin(value.minutes);
      setTotalTimeSec(value.secondsString);
      setStage(Stage.END);
      //Your group {groupName} have scored {score} percent!
    }
  };

  const isWrong = (check: Boolean, guess: GuessData) => {
    guessHistory.set("Question" + questionCounter + "." + guessCounter, guess);
    setGuessCounter(guessCounter + 1);
    setWrongAnswerCheck(check);
    setShouldAnimate(true);
  };

  const nextQuestionfromMiddle = () => {
    setCurrentQuestionIndex(
      Math.min(questionData.length - 1, currentQuestionIndex + 1)
    );
  };

  // End of Quiz: YOU MADE IT OUT! Head back to main session to collect your prize!
  const questionComponent = [
    Q1(questionData[0], nextQuestion, isWrong),
    Q2(questionData[1], nextQuestion, isWrong),
    Q3(questionData[2], nextQuestion, isWrong),
    Q4(questionData[3], nextQuestion, isWrong),
    Q5(questionData[4], nextQuestion, isWrong),
    Q6(questionData[5], nextQuestion, isWrong),
    MiddleOfQuiz(questionData[6], nextQuestionfromMiddle),
    Q7(questionData[7], nextQuestion, isWrong),
    Q8(questionData[8], nextQuestion, isWrong),
    Q9(questionData[9], nextQuestion, isWrong),
    Q10(questionData[10], nextQuestion, isWrong),
    Q11(questionData[11], nextQuestion, isWrong),
    Q12(questionData[12], nextQuestion, isWrong),
    Q13(questionData[13], nextQuestion, isWrong),
    Q14(questionData[14], nextQuestion, isWrong),
    Q15(questionData[15], nextQuestion, isWrong),
    Q16(questionData[16], nextQuestion, isWrong),
  ];

  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <style jsx>{`
        .fade-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%);
        }
        .fade-enter-active,
        .fade-exit-active {
          transition: opacity 500ms, transform 500ms;
        }
      `}</style>
      <Navbar />
      <div id="Form">
        <div className="flex flex-col gap-8">
          <p className="text-2xl text-center bg-blue-400">Escape From Giza</p>
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={stage + currentQuestionIndex}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div>
                {stage == Stage.START && (
                  <div className="flex flex-col items-center col gap-8 p-4">
                    <div id="Description" className="text-center">
                      <p className="text-base">
                        You and your group are trapped in a pyramid. Together
                        you must solve a variety of questions about angles,
                        triangles, and some quadrilaterals to help you escape.
                        GOOD LUCK!
                      </p>
                    </div>
                    <div id="GroupNameLayout">
                      <div className="flex flex-row gap-8 text-center">
                        <div className="text-center">
                          <label>Group Name</label>
                        </div>
                        <input
                          className="p-4 text-lg"
                          value={groupName}
                          onChange={(e) => onGroupNameChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <div id="StudentNameLayout">
                      <div className="flex flex-row gap-3">
                        <label>Student Names</label>
                        <input
                          className="p-4 text-lg"
                          placeholder="(seperate by ,)"
                          value={studentName}
                          onChange={(e) => onStudentNameChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button
                      label="Start"
                      backgroundColor="blue"
                      textColor="white"
                      onClick={onStartQuiz}
                    />
                    <Image
                      className="transform transition ease-in-out duration-500 hover:scale-110"
                      width={256}
                      height={256}
                      alt="Pyramid"
                      src="/images/giza/intro_pyramid.jpg"
                    />
                  </div>
                )}
                {stage == Stage.QUIZ && (
                  <div id="QuizForm" className="flex flex-col gap-8 p-4">
                    <div id="FormBody" className="flex flex-col gap-8">
                      {!wrongAnswerCheck && (
                        <p
                          className={
                            shouldAnimate
                              ? "animate-fadeIn delay-1000 text-center text-red-600"
                              : "visibility: hidden"
                          }
                          onAnimationEnd={(e) => setShouldAnimate(false)}
                        >
                          Wrong Answer
                        </p>
                      )}
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
                {stage == Stage.END && (
                  <div id="Result" className="flex flex-col gap-8 p-4">
                    <div id="FormBody" className="flex flex-col gap-8">
                      <p className="text-2xl text-center">
                        Congratulations! Your group {groupName} have made it out
                        within {totalTimeMin} : {totalTimeSec} !
                      </p>
                    </div>
                    <div id="FormEnd" className="flex flex-col items-center">
                      <div id="ButtonLayout" className="flex flex-row gap-8">
                        <Button
                          label="Continue"
                          backgroundColor="blue"
                          textColor="white"
                        />
                        <Button
                          label="Retry"
                          backgroundColor="blue"
                          textColor="white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
}
