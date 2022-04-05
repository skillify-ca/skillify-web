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
    const q3 = {
      text: "What is the difference between <h1> and <h2> tags?",
      A: "<h1> tags are ranked higher in significance than <h2> and thus are slightly larger",
      B: "<h2> is larger than <h1>",
      C: "There is no difference in significance",
      D: "None of the above",
      answer: "A",
      image: "",
    };
    const q4 = {
      text: "What is the correct way to implement tags on a HTML page?",
      A: '<img from="skillify.jpg"/>',
      B: '<img src="skillify.jpg"/>',
      C: '<image src="skillify.jpg"/>',
      D: "All of the above",
      answer: "B",
      image: "",
    };
    const q5 = {
      text: "How can we implement square points in an unordered list?",
      A: '<ol style="list-style-type:square;">',
      B: '<ul type="box">',
      C: '<ul style="list-style-type:square;">',
      D: '<ol type="box">',
      answer: "C",
      image: "",
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
              <Link href="/studentPortal/intro/HTML/3">
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
