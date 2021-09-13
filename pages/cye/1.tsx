import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Button } from "../../components/ui/Button";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import bedmasRulesImg from "../../public/images/cye/rules.png";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { LineData } from "../../components/ui/FreeDrawing";
import { FETCH_USER_ASSIGNMENT } from "../../graphql/userAssignments/fetchUserAssignment";
import { useMutation, useQuery } from "@apollo/client";
import { userId } from "../../graphql/utils/constants";
import { useSession } from "next-auth/client";
import { CREATE_USER_ASSIGNMENT } from "../../graphql/userAssignments/createUserAssignment";
import { UPDATE_USER_ASSIGNMENT } from "../../graphql/userAssignments/updateUserAssignment";

const FreeDrawing = dynamic(() => import("../../components/ui/FreeDrawing"), {
  ssr: false,
});

enum Stage {
  RULES,
  ASSIGNMENT,
}

export default function cye(props) {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [stage, setStage] = useState(Stage.RULES);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [historyStepForQuestions, setHistoryStepForQuestions] = useState<
    number[]
  >([]);
  const [linesForQuestions, setLinesForQuestions] = React.useState<
    LineData[][]
  >([]);
  const [userSolution, setUserSolution] = useState({});
  const [session] = useSession();

  const { loading, data: userAssignmentFetchData } = useQuery(
    FETCH_USER_ASSIGNMENT,
    {
      variables: {
        user_id: userId(session),
        assignment_id: "cye-1",
      },
      onCompleted: (data: any) => {
        console.log("data", data);
      },
    }
  );

  const [createUserAssignment] = useMutation(CREATE_USER_ASSIGNMENT);
  const [updateUserAssignment] = useMutation(UPDATE_USER_ASSIGNMENT);

  // on page load query the user assignment, and create it if doesn't exist
  useEffect(() => {
    console.log("effect", userAssignmentFetchData);
    if (
      session &&
      userAssignmentFetchData &&
      userAssignmentFetchData.user_assignments.length === 0
    ) {

      const result = createUserAssignment({
        variables: {
          user_id: userId(session),
          assignment_id: "cye-1",
        },
        refetchQueries: [
          {
            query: FETCH_USER_ASSIGNMENT,
            variables: {
              userId: userId(session),
              assignment_id: "cye-1",
            },
          },
        ],
      });
    } else if (
      session &&
      userAssignmentFetchData &&
      userAssignmentFetchData.user_assignments.length > 0
    ) {
      setGuesses(userAssignmentFetchData.user_assignments[0].user_solution);
    }
  }, [userAssignmentFetchData]);

  const onNextQuestion = () => {
    // update user assignment and cache the returned assignment
    updateUserAssignment({
      variables: {
        user_id: userId(session),
        assignment_id: "cye-1",
        user_solution: guesses,
      },
      refetchQueries: [
        {
          query: FETCH_USER_ASSIGNMENT,
          variables: {
            userId: userId(session),
            assignment_id: "cye-1",
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
        user_id: userId(session),
        assignment_id: "cye-1",
        user_solution: guesses,
      },
      refetchQueries: [
        {
          query: FETCH_USER_ASSIGNMENT,
          variables: {
            userId: userId(session),
            assignment_id: "cye-1",
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

  const questions = [
    "[(3 - 2)(2 - 3)]3[(—4) - 2)] + (+6)(2) - (-3)",
    "-[(6-3)(8-4)] + (-5)(-2) + 1 - (2)",
    "\\left[\\left(\\frac{(-5)(-8) - (4)(5)}{(8)-(-2)}\\right)^2\\right]^3",
    "\\frac{(6)(-5) + (-3)-(2)}{(-4)(-2)+1}",
    "[(2)(—2)+2—4][(2)—2]",
    "\\frac{(4)(4)+4-(2)2^3}{3}",
    "(7)(2) — 4(2 — 4) + 6(—1)(—2)",
    "(4-1)^2 + 2(3-4)^3 + 6^2 - (8)(—3)",
    "(—2)(—4)(—3) + 4(—3) - 2(4)",
    "12 - (-4) + 6(-2) - \\frac{1-4}{3}",
    "[(4-2)+(3+2)][—2(4)+(5+8)-2]+4",
    "(4-1)^2 + 2(3-4)^3 + 6^2 - (8)(—3)",
    "\\frac{[(—4+3)(3+1)]^2—8(6—2)}{(4)(-2)(-3)}",
    "3 - 2(4 + 2) + 5(-2 - 3) - \\frac{2^3(3^3)}{(2)(3)}",
  ];

  useEffect(() => {
    setGuesses(["", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
    setLinesForQuestions([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]);
    setHistoryStepForQuestions([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }, []);

  return (
    <div className="flex flex-col bg-blue-50">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-12 p-4">
          {stage == Stage.RULES && (
            <div className="flex flex-col gap-8">
              <Image
                src={bedmasRulesImg}
                objectFit="contain"
                alt="Bedmas Rules"
                className="w-full h-full"
              />
              <Button
                label="Start"
                backgroundColor="blue"
                textColor="white"
                onClick={onStartAssignment}
              />
            </div>
          )}
          {stage == Stage.ASSIGNMENT && (
            <div className="flex flex-col items-center gap-4 w-full overflow-auto p-4 bg-blue-300">
              <div className="flex gap-8 w-full items-center justify-between">
                <Button
                  label="Previous"
                  onClick={onPreviousQuestion}
                  backgroundColor="white"
                  textColor="blue-600"
                />
                <p>Question #{currentQuestionIndex + 1}</p>

                <Button
                  label="Next"
                  onClick={onNextQuestion}
                  backgroundColor="blue"
                  textColor="white"
                />
              </div>
              <div className="font-bold text-xl">
                <TeX block>{questions[currentQuestionIndex]}</TeX>
              </div>
              <label>Final Answer</label>
              <input
                className="p-4 text-lg"
                placeholder="eg. 3/8"
                value={guesses[currentQuestionIndex]}
                onChange={(e) => onGuessChanged(e.target.value)}
              ></input>
              <FreeDrawing
                lines={linesForQuestions[currentQuestionIndex]}
                setLines={setLinesForCurrentQuestion}
                historyStep={historyStepForQuestions[currentQuestionIndex]}
                setHistoryStep={setHistoryForCurrentQuestion}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
