import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import Quiz from "../../../../components/coding/studentPortal/quiz/Quiz";
import { Button } from "../../../../components/ui/Button";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";
import {
  continueRequested,
  quizSelector,
  setQuizQuestions,
} from "../../../../redux/quizSlice";

const JSQuiz1 = () => {
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);

  useEffect(() => {
    const q1 = {
      text: "How do you declare and intialize a constant type?",
      A: "let a = 8;",
      B: "var b;",
      C: "constant b = 0;",
      D: "const x = 22;",
      answer: "D",
    };
    const q2 = {
      text: "What is the valid way to increment a variable by 1?",
      A: "x++;",
      B: "x += 1;",
      C: "x = x + 1;",
      D: "All of the above",
      answer: "D",
    };
    const q3 = {
      text: "Which one of the following is an incorrect way of declaring a variable",
      A: "variable x;",
      B: "var x;",
      C: "let x;",
      D: "All of the above are correct ways to declare a variable",
      answer: "A",
    };
    const q4 = {
      text: "Which of the following expressions evaluates as True",
      A: "4**0 > 1",
      B: "!(2 + 2 == 5)",
      C: "1 < 1 ** 1",
      D: "All of the above",
      answer: "B",
    };
    const q5 = {
      text: "Which of the following expressions evaluates as True",
      A: "-3 > 0 || 0 >= 0",
      B: "7**0 == 1 && 0 > -1",
      C: "0 == 0 && 1 > -1",
      D: "All of the above",
      answer: "D",
    };
    dispatch(setQuizQuestions([q1, q2, q3, q4, q5]));
  }, []);

  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleSessionEndContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 40,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 41,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro");
    });
  };
  return (
    <div className="flex flex-col">
      <div className="p-4 mb-4">
        <ProgressBar completed={100} />
      </div>
      <div className="flex flex-col">
        <Quiz />
        <div className="w-full p-8 h-36 ">
          <div className="flex justify-end w-full">
            {showSessionEnd ? (
              <Button
                label="Continue"
                disabled={false}
                onClick={handleSessionEndContinue}
              />
            ) : (
              <Button
                label="Continue"
                disabled={false}
                onClick={(e) => dispatch(continueRequested(null))}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSQuiz1;
