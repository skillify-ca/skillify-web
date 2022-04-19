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

const JSQuiz2 = () => {
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);

  useEffect(() => {
    const q1 = {
      text: "How many times will this loop run? \nfor (int i = 1; i <= 10; i++)",
      A: "10",
      B: "5",
      C: "9",
      D: "11",
      answer: "A",
    };
    const q2 = {
      text: 'What value does phone[3] have in the following Array. const phones = [ "BlackBerry", "Samsung", "iPhone", "Pixel"];',
      A: "Samsung",
      B: "iPhone",
      C: "Pixel",
      D: "BlackBerry",
      answer: "C",
    };
    const q3 = {
      text: "How do you declare an array?",
      A: "let cars = [];",
      B: "array cars = []",
      C: "cars[] = Array;",
      D: "None of the above",
      answer: "A",
    };
    const q4 = {
      text: "How many times will this loop run? \nfor(int i = 0; i < 20; i--) ",
      A: "20",
      B: "0",
      C: "2",
      D: "infinite",
      answer: "infinite",
    };
    const q5 = {
      text: "What loop is displayed?",
      A: "For loop",
      B: "While Loop",
      C: "For each loop",
      D: "Do while loop",
      answer: "B",
      image: "/images/studentPortal/while_loop_example.png",
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
        node_id: 45,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 46,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/6");
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

export default JSQuiz2;
