import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import SA_Q1 from "../../../components/surfaceArea/SA_Q1";
import { Button } from "../../../components/ui/Button";
import { GuessData } from "../../api/guessData";
import { measureTime } from "../../api/time";

enum Stage {
  START,
  QUIZ,
  END,
}

export default function djacobs(props) {
  const questionData = [
    "A net for the rectangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
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
  const [guessHistoryMultiple, setGuessHistoryMultiple] = useState<
    Map<String, GuessData[]>
  >(new Map());
  const [guessCounter, setGuessCounter] = useState(1);
  const [wrongAnswerCheck, setWrongAnswerCheck] = useState<Boolean>(true);
  const [shouldAnimate, setShouldAnimate] = useState<Boolean>(true);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [startTime, setStartTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();
  const [totalTimeMin, setTotalTimeMin] = useState<number>();
  const [totalTimeSec, setTotalTimeSec] = useState<String>();

  const onStartQuiz = () => {
    var sTime = new Date().getTime();
    setStartTime(sTime);
    setStage(Stage.QUIZ);
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
    console.log(guess);
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
    console.log(guess);
    guessHistory.set("Question" + questionCounter + "." + guessCounter, guess);
    console.log(guessHistory);
    setGuessCounter(guessCounter + 1);
    setWrongAnswerCheck(check);
    setShouldAnimate(true);
  };

  // End of Quiz: YOU MADE IT OUT! Head back to main session to collect your prize!
  const questionComponent = [SA_Q1(questionData[0], nextQuestion, isWrong)];

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
          <div>
            {stage == Stage.START && (
              <div className="flex flex-col items-center col gap-8 p-4">
                <div id="Description" className="text-center">
                  <p className="text-base">
                    Welcome to the Surface Area Assignment! Please fill out your
                    name in the name field below and begin!
                  </p>
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
        </div>
      </div>
    </div>
  );
}
