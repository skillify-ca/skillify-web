import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/Button";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { LineData } from "../../../components/ui/FreeDrawing";
import { FETCH_USER_ASSIGNMENT } from "../../../graphql/userAssignments/fetchUserAssignment";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER_ASSIGNMENT } from "../../../graphql/userAssignments/createUserAssignment";
import { UPDATE_USER_ASSIGNMENT } from "../../../graphql/userAssignments/updateUserAssignment";
import { questions, solutions } from "../../api/teachers/djacobs";
import { UPDATE_USER_ASSIGNMENT_IMAGES } from "../../../graphql/userAssignments/updateUserAssignmentImages";
import { useAuth } from "../../../lib/authContext";
import SlideContainer from "../../../components/ui/SlideContainer";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const FreeDrawing = dynamic(
  () => import("../../../components/ui/FreeDrawing"),
  {
    ssr: false,
  }
);

enum Stage {
  RULES,
  ASSIGNMENT,
}

export default function djacobs1(props) {
  const EMPTY_ARRAY_OF_STRING = ["", "", "", ""];
  const EMPTY_ARRAY_OF_ARRAYS = [[], [], [], []];
  const [guesses, setGuesses] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [stage, setStage] = useState(Stage.RULES);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [historyStepForQuestions, setHistoryStepForQuestions] = useState<
    number[]
  >([]);
  const [linesForQuestions, setLinesForQuestions] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYS);
  const [showSolutions, setShowSolutions] = useState(false);
  const { signOut, user } = useAuth();

  const { loading, data: userAssignmentFetchData } = useQuery(
    FETCH_USER_ASSIGNMENT,
    {
      variables: {
        user_id: user.uid,
        assignment_id: "djacobs1",
      },
      onCompleted: (data: any) => {
        if (data.user_assignments.length > 0) {
          initUI(data.user_assignments[0]);
        }
      },
    }
  );

  const initUI = (assignmentData: any) => {
    console.log("data", assignmentData);
    setGuesses(assignmentData.user_solution);
    if (assignmentData.assignment) {
      setShowSolutions(assignmentData.assignment.solutions_released);
    }
    if (assignmentData.user_images) {
      setImages(assignmentData.user_images);
    } else {
      setImages(EMPTY_ARRAY_OF_STRING);
    }
    if (assignmentData.user_drawn_lines) {
      setLinesForQuestions(assignmentData.user_drawn_lines);
      const historySteps = assignmentData.user_drawn_lines.map(
        (lines) => lines.length
      );
      setHistoryStepForQuestions(historySteps);
    } else {
      setLinesForQuestions([[], [], [], []]);
      setHistoryStepForQuestions([0, 0, 0, 0]);
    }
  };

  const [createUserAssignment] = useMutation(CREATE_USER_ASSIGNMENT);
  const [updateUserAssignment] = useMutation(UPDATE_USER_ASSIGNMENT);
  const [updateUserAssignmentImages] = useMutation(
    UPDATE_USER_ASSIGNMENT_IMAGES
  );

  // on page load query the user assignment, and create it if doesn't exist
  useEffect(() => {
    console.log("effect", userAssignmentFetchData);
    if (
      user &&
      userAssignmentFetchData &&
      userAssignmentFetchData.user_assignments.length === 0
    ) {
      const result = createUserAssignment({
        variables: {
          user_id: user.uid,
          assignment_id: "djacobs1",
          user_solution: EMPTY_ARRAY_OF_STRING,
          user_images: EMPTY_ARRAY_OF_STRING,
          user_drawn_lines: EMPTY_ARRAY_OF_ARRAYS,
        },
        refetchQueries: [
          {
            query: FETCH_USER_ASSIGNMENT,
            variables: {
              userId: user.uid,
              assignment_id: "djacobs1",
            },
          },
        ],
      }).then((data) => {
        initUI(data["data"]["insert_user_assignments"]["returning"][0]);
      });
    }
  }, [userAssignmentFetchData]);

  const updateImage = (uri: string) => {
    const newImages = images.map((image, index) => {
      if (index === currentQuestionIndex) {
        return uri;
      } else {
        return image;
      }
    });
    setImages(newImages);
    updateUserAssignmentImages({
      variables: {
        user_id: user.uid,
        assignment_id: "djacobs1",
        user_images: newImages,
      },
      refetchQueries: [
        {
          query: FETCH_USER_ASSIGNMENT,
          variables: {
            userId: user.uid,
            assignment_id: "djacobs1",
          },
        },
      ],
    });
  };

  const clearFutureHistoryForCurrentQuestion = () => {
    const isLatestStep =
      historyStepForQuestions[currentQuestionIndex] ===
      linesForQuestions[currentQuestionIndex].length;

    if (!isLatestStep) {
      //  clear all lines in the future
      const newLines = linesForQuestions[currentQuestionIndex].slice(
        0,
        historyStepForQuestions[currentQuestionIndex]
      );
      setHistoryForCurrentQuestion(
        historyStepForQuestions[currentQuestionIndex] + 1
      );
      setLinesForCurrentQuestion(newLines);
    }
  };

  const onNextQuestion = () => {
    clearFutureHistoryForCurrentQuestion();

    // update user assignment and cache the returned assignment
    updateUserAssignment({
      variables: {
        user_id: user.uid,
        assignment_id: "djacobs1",
        user_solution: guesses,
        user_drawn_lines: linesForQuestions,
      },
      refetchQueries: [
        {
          query: FETCH_USER_ASSIGNMENT,
          variables: {
            userId: user.uid,
            assignment_id: "djacobs1",
          },
        },
      ],
    });
    // TODO only udpate if user assignment is different from the cached assignment
    setCurrentQuestionIndex(
      Math.min(questions.length - 1, currentQuestionIndex + 1)
    );
  };
  const onPreviousQuestion = () => {
    updateUserAssignment({
      variables: {
        user_id: user.uid,
        assignment_id: "djacobs1",
        user_solution: guesses,
        user_drawn_lines: linesForQuestions,
      },
      refetchQueries: [
        {
          query: FETCH_USER_ASSIGNMENT,
          variables: {
            userId: user.uid,
            assignment_id: "djacobs1",
          },
        },
      ],
    });
    if (currentQuestionIndex == 0) {
      setStage(Stage.RULES);
    } else {
      setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
    }
  };
  const onStartAssignment = () => {
    setStage(Stage.ASSIGNMENT);
  };
  const onGuessChanged = (currentGuess: string) => {
    const newGuesses = guesses.map((guess, index) => {
      if (index === currentQuestionIndex) {
        return currentGuess;
      } else {
        return guess;
      }
    });
    setGuesses(newGuesses);
  };

  const setLinesForCurrentQuestion = (lines: LineData[]) => {
    const newLines = linesForQuestions.map((l, index) => {
      if (index === currentQuestionIndex) {
        return lines;
      } else {
        return l;
      }
    });
    setLinesForQuestions(newLines);
  };

  const setHistoryForCurrentQuestion = (historyStep: number) => {
    const newHistory = historyStepForQuestions.map((h, index) => {
      if (index === currentQuestionIndex) {
        return historyStep;
      } else {
        return h;
      }
    });
    setHistoryStepForQuestions(newHistory);
  };

  return (
    <div className="flex flex-col bg-blue-50 items-center">
      <div className="grid grid-cols-12 max-w-7xl">
        <div className="col-span-12">
          {stage == Stage.RULES && (
            <div className="flex flex-col gap-8 p-8">
              <p>
                Welcome! Here are 4 questions for you to work through. Good
                Luck!
              </p>
              <Button
                label="Start"
                backgroundColor="blue"
                textColor="white"
                onClick={onStartAssignment}
              />
            </div>
          )}
          {stage == Stage.ASSIGNMENT && (
            <div className="flex flex-col items-center gap-4 w-full overflow-y-auto p-4 h-full bg-blue-300">
              <div className="flex gap-8 w-full items-center justify-between">
                <Button
                  label="Previous"
                  onClick={onPreviousQuestion}
                  backgroundColor="white"
                  textColor="blue-600"
                />
                <Button
                  label="Next"
                  onClick={onNextQuestion}
                  backgroundColor="blue"
                  textColor="white"
                />
              </div>
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
              <SwitchTransition mode={"out-in"}>
                <CSSTransition
                  key={currentQuestionIndex}
                  addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade"
                >
                  <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-8 h-full">
                    <div
                      className={`flex flex-col gap-8 bg-blue-100 items-center rounded-xl ${
                        showSolutions ? "sm:col-span-4" : "col-span-6"
                      }`}
                    >
                      <p className="w-full bg-red-400 py-2 px-4 font-bold text-xl rounded-t-xl">
                        Question #{currentQuestionIndex + 1}
                      </p>
                      <div className="flex gap-8 w-full items-center justify-center"></div>
                      <div className="font-bold text-xl">
                        <TeX block>{questions[currentQuestionIndex]}</TeX>
                      </div>
                      <div className="flex gap-4 items-center p-4">
                        <label>Guess</label>
                        <input
                          className="p-4 text-lg w-full"
                          placeholder="eg. 3/8"
                          value={guesses[currentQuestionIndex]}
                          onChange={(e) => onGuessChanged(e.target.value)}
                          disabled={showSolutions}
                        ></input>
                      </div>
                    </div>
                    <div
                      className={`${
                        showSolutions ? "col-span-8" : "col-span-6"
                      } overflow-y-auto`}
                    >
                      {showSolutions ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
                          <div className="flex flex-col bg-yellow-400 items-center justify-center rounded-xl">
                            <p className="bg-green-300 w-full font-bold text-xl py-2 px-4 rounded-t-xl">
                              Your Solution
                            </p>

                            <div className="bg-white h-80 w-full overflow-auto">
                              <FreeDrawing
                                saveImage={() => {}}
                                lines={linesForQuestions[currentQuestionIndex]}
                                setLines={() => {}}
                                historyStep={
                                  historyStepForQuestions[currentQuestionIndex]
                                }
                                setHistoryStep={() => {}}
                                disabled={true}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col bg-blue-100 items-center justify-center rounded-t-xl">
                          <p className="bg-yellow-500 w-full font-bold text-xl py-2 px-4 rounded-t-xl">
                              Teacher's Solution
                            </p>

                            <div className="flex flex-col items-center justify-center bg-gray-100 h-full w-full">
                              {solutions[currentQuestionIndex].map((step) => (
                                <TeX block>{step}</TeX>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        linesForQuestions[currentQuestionIndex] && (
                          <FreeDrawing
                            saveImage={updateImage}
                            lines={linesForQuestions[currentQuestionIndex]}
                            setLines={setLinesForCurrentQuestion}
                            historyStep={
                              historyStepForQuestions[currentQuestionIndex]
                            }
                            setHistoryStep={setHistoryForCurrentQuestion}
                            disabled={showSolutions}
                          />
                        )
                      )}
                    </div>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

djacobs1.auth = true;
