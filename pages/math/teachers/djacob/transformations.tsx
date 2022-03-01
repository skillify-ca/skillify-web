import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Navbar from "../../../../components/ui/Navbar";
import TQ from "../../../../components/math/transformations/transformation_question_template";
import { Button } from "../../../../components/ui/Button";
import { LineData } from "../../../../components/ui/FreeDrawing";
import { GuessData } from "../../../api/guessData";
import { measureTime } from "../../../api/time";

enum Stage {
  START,
  QUIZ,
  END,
}

export default function djacob(props) {
  const questionData = [
    "1) On one quadrant, draw your original image by plotting four or more points and connecting them. This is your pre-image" +
      "\n" +
      "2) Use EACH of the other quadrants to perform a translation, then a reflection, and then a rotation" +
      "\n" +
      "3) For every transformation, describe and label each transformation with detail, ex. A translation 5 units left and 2 units down" +
      "\n" +
      "4) Colour your pre-image and transformations" +
      "\n" +
      "5) Label the x-axis and y-axis, include the coordinate points for each transformation underneath the drawings",
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
  const [guessStringA, setGuessStringA] = useState<string>("");
  const [guessStringB, setGuessStringB] = useState<string>("");
  const [guessStringC, setGuessStringC] = useState<string>("");
  const [guessStringD, setGuessStringD] = useState<string>("");

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
    console.log(currentQuestionIndex);
    if (stage == Stage.END) {
      setStage(Stage.QUIZ);
    } else if (currentQuestionIndex == 0) {
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
    console.log(guess);
    guessHistory.set("Question" + questionCounter + "." + guessCounter, guess);
    console.log(guessHistory);
    setGuessCounter(guessCounter + 1);
    setWrongAnswerCheck(check);
    setShouldAnimate(true);
  };

  //Q1 useStates
  const EMPTY_ARRAY_OF_ARRAYSQ1 = [[], [], []];
  const [historyStepForQuestionsQ1, setHistoryStepForQuestionsQ1] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ1, setLinesForQuestionsQ1] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYSQ1);

  //Q2 useStates
  const EMPTY_ARRAY_OF_ARRAYSQ2 = [[], [], []];
  const [historyStepForQuestionsQ2, setHistoryStepForQuestionsQ2] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ2, setLinesForQuestionsQ2] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYSQ2);

  //Q3 useStates
  const EMPTY_ARRAY_OF_ARRAYSQ3 = [[], [], []];
  const [historyStepForQuestionsQ3, setHistoryStepForQuestionsQ3] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ3, setLinesForQuestionsQ3] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYSQ3);

  //Q4 useStates
  const EMPTY_ARRAY_OF_ARRAYSQ4 = [[], [], []];
  const [historyStepForQuestionsQ4, setHistoryStepForQuestionsQ4] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ4, setLinesForQuestionsQ4] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYSQ4);

  //Q5 useStates
  const EMPTY_ARRAY_OF_ARRAYSQ5 = [[], [], []];
  const [historyStepForQuestionsQ5, setHistoryStepForQuestionsQ5] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ5, setLinesForQuestionsQ5] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYSQ5);

  const questionComponent = () => {
    switch (currentQuestionIndex) {
      case 0:
        return (
          <TQ
            displayQuestion={questionData[0]}
            imagePath="/images/transformations/transformation_image.png"
            nextQuestion={nextQuestion}
            guessString={guessStringA}
            setGuessString={setGuessStringA}
            linesForQuestions={linesForQuestionsQ1}
            setLinesForQuestions={setLinesForQuestionsQ1}
            historyStepForQuestions={historyStepForQuestionsQ1}
            setHistoryStepForQuestions={setHistoryStepForQuestionsQ1}
          />
        );
    }
  };

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
          <p className="text-2xl text-center bg-blue-400">
            Transformation Assignment
          </p>
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
                  <div className="flex flex-col items-center gap-8 p-4 col">
                    <div id="Description" className="text-center">
                      <p className="text-base">
                        Welcome to the Transformation Assignment! Here in this
                        assignment, you will perform transformations on one of
                        your very own image that you will draw out on grid paper
                        Please note that you will have to take a photo based on
                        each instruction and upload it by clicking on the file
                        upload button in each instruction page. Please fill out
                        your name in the name field below and begin!
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
                      {questionComponent()}
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
                      <div id="End" className="flex flex-col items-center">
                        <Button
                          label="Back"
                          backgroundColor="blue"
                          textColor="white"
                          onClick={backToPrevious}
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
