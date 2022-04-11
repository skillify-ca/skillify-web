import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CSSQuiz from "../../../../components/coding/CSSQuiz";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import Quiz from "../../../../components/coding/studentPortal/quiz/Quiz";
import { Button } from "../../../../components/ui/Button";
import {
  continueRequested,
  quizSelector,
  setQuizQuestions,
} from "../../../../redux/quizSlice";

const CSS_QUIZ = () => {
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);

  useEffect(() => {
    const q1 = {
      text: "What CSS properties are used here?",
      A: "justify-content: flex-end;",
      B: "justify-content: flex-start;",
      C: "justify-content: reverse;",
      D: "align-items: center;",
      answer: "A",
      image: "/images/coding/units/Css/flex-end.png",
    };
    const q2 = {
      text: "What CSS properties are used here?",
      A: "align-items: center;",
      B: "justify-content: space-around;",
      C: "justify-content: center;",
      D: "flex-direction: row;",
      answer: "B",
      image: "/images/coding/units/Css/space-around.png",
    };
    const q3 = {
      text: "What CSS properties are used here?",
      A: "flex-direction: reverse;",
      B: "justify-content: flex-end;",
      C: "flex-direction: column;",
      D: "justify-content: flex-start;",
      answer: "C",
      image: "/images/coding/units/Css/column.png",
    };
    const q4 = {
      text: "What CSS properties are used here?",
      A: "justify-content: space-between;",
      B: "flex-direction: row;",
      C: "justify-content: flex-start;",
      D: "align-items: center;",
      answer: "A",
      image: "/images/coding/units/Css/space-between.png",
    };
    const q5 = {
      text: "What CSS properties are used here?",
      A: "flex-direction: flex-start;",
      B: "justify-content: center;",
      C: "justify-items: center;",
      D: "justify-contents: center;",
      answer: "B",
      image: "/images/coding/units/Css/center.png",
    };
    dispatch(setQuizQuestions([q1, q2, q3, q4, q5]));
  }, []);
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
              <Link href="/studentPortal/intro/CSS/5">
                <Button label="Continue" disabled={false} />
              </Link>
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
