import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import React, { useRef, useState } from "react";
import { FETCH_BADGE } from "../../graphql/fetchBadge";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { userId } from "../../graphql/utils/constants";
import { Canvas, extend, useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { Preload, Stars, useTexture } from "@react-three/drei";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";
import { FETCH_ASSIGNMENT } from "../../graphql/fetchAssignment";
import QuestionSet from "../../components/stories/QuestionSet";
import { useRouter } from "next/router";
import { GuessData } from "../api/guessData";
import AssignmentGrade from "../../components/assignment-creator/AssignmentGrade";

const Assignment = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  const [index, setIndex] = useState(0);
  const [guesses, setGuesses] = useState<GuessData[]>([]);

  let assignmentResult = useQuery(FETCH_ASSIGNMENT, {
    variables: {
      assignmentId: slug,
    },
  });

  let questions;
  if (assignmentResult.data) {
    questions = assignmentResult.data.assignments[0];
  }

  const submitGuess = (guessData: GuessData) => {
    setIndex(index + 1);
    console.log(guessData);
    const newGuesses: GuessData[] = [...guesses];
    newGuesses.push(guessData);
    setGuesses(newGuesses);
  };

  return (
    <div>
      <div className="heropattern-hideout-blue-100 bg-gray-100 h-screen p-4">
        {assignmentResult &&
          assignmentResult.data &&
          index < assignmentResult.data.assignments[0].questions.length && (
            <QuestionSet
              questionData={assignmentResult.data.assignments[0].questions}
              index={index}
              submitGuess={submitGuess}
            />
          )}
        {assignmentResult &&
          assignmentResult.data &&
          index === assignmentResult.data.assignments[0].questions.length && (
            <AssignmentGrade
              guesses={guesses}
              questions={assignmentResult.data.assignments[0].questions}
            />
          )}
      </div>
    </div>
  );
};

export default Assignment;
