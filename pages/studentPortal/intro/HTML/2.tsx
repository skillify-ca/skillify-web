import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const HTML2 = () => {
  const dispatch = useDispatch();
  const { showSessionEnd } = useSelector(quizSelector);

  useEffect(() => {
    const q1 = {
      text: "Which element is used to display text?",
      A: "<a>",
      B: "<img>",
      C: "<p>",
      D: "<div>",
      answer: "C",
    };
    const q2 = {
      text: "Which elements are used to display lists?",
      A: "<ul> and <ol>",
      B: "<ul> and <li>",
      C: "<ol> and <li>",
      D: "None of the above",
      answer: "A",
    };
    dispatch(setQuizQuestions([q1, q2]));
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
              <Link href="/studentPortal/intro/HTML/1">
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

export default HTML2;
