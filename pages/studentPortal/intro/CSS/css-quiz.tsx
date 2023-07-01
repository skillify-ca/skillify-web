import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quiz from "../../../../components/studentPortal/quiz/Quiz";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";
import {
  continueRequested,
  quizSelector,
  setQuizQuestions,
} from "../../../../redux/quizSlice";

const CSS_QUIZ = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 51,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 52,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal");
    });
  };
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);

  const q1 = {
    text: "What CSS properties are used here?",
    A: "justify-content: flex-end;",
    B: "justify-content: flex-start;",
    C: "justify-content: reverse;",
    D: "align-items: center;",
    answer: "A",
    image: "/images/coding/units/css/flex-end.png",
  };
  const q2 = {
    text: "What CSS properties are used here?",
    A: "align-items: center;",
    B: "justify-content: space-around;",
    C: "justify-content: center;",
    D: "flex-direction: row;",
    answer: "B",
    image: "/images/coding/units/css/space-around.png",
  };
  const q3 = {
    text: "What CSS properties are used here?",
    A: "flex-direction: reverse;",
    B: "justify-content: flex-end;",
    C: "flex-direction: column;",
    D: "justify-content: flex-start;",
    answer: "C",
    image: "/images/coding/units/css/column.png",
  };
  const q4 = {
    text: "What CSS properties are used here?",
    A: "justify-content: space-between;",
    B: "flex-direction: row;",
    C: "justify-content: flex-start;",
    D: "align-items: center;",
    answer: "A",
    image: "/images/coding/units/css/space-between.png",
  };
  const q5 = {
    text: "What CSS properties are used here?",
    A: "flex-direction: flex-start;",
    B: "justify-content: center;",
    C: "justify-items: center;",
    D: "justify-contents: center;",
    answer: "B",
    image: "/images/coding/units/css/center.png",
  };

  useEffect(() => {
    dispatch(setQuizQuestions([q1, q2, q3, q4, q5]));
  }, []);
  
  return (
    <div className="flex flex-col">
      <div className="p-4 mb-4">
        <ProgressBar completed={100} />
      </div>
      <div className="flex flex-col">
        <Quiz quizData={{
          questions: [q1, q2, q3, q4, q5]
        }} />
        <div className="w-full p-8 h-36 ">
          <div className="flex justify-end w-full">
            {showSessionEnd ? (
              <Button
                label="Continue"
                disabled={false}
                onClick={handleContinue}
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

export default CSS_QUIZ;
