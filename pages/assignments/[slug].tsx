import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_ASSIGNMENT } from "../../graphql/fetchAssignment";
import QuestionSet from "../../components/stories/QuestionSet";
import { useRouter } from "next/router";
import { GuessData } from "../api/guessData";
import AssignmentGrade from "../../components/assignment-creator/AssignmentGrade";
import Navbar from "../../components/ui/Navbar";

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
      <Navbar />
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
