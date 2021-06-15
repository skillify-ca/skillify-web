import React, { useState } from "react";
import { Button } from "../components/stories/Button";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function subtractionTopicOverview(props) {
  const [grade, setGrade] = useState("Grade 3");
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
  let gradeNum = (grade: string) => {
    switch (grade) {
      case "Grade 1":
        return 1;
      case "Grade 2":
        return 2;
      case "Grade 3":
        return 3;
    }
  };
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const videoComponent = (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Link href="lessons/subtraction/single-digit">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("rqiu_xcvSk4")}
          >
            <p className="font-bold mb-4"> Single Digit Subtraction </p>
          </div>
        </Link>
        <Link href="lessons/subtraction/double-digit">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("qKxQ33KcRWQ")}
          >
            <p className="font-bold mb-4"> Double Digit Subtraction</p>
          </div>
        </Link>
        <Link href="lessons/subtraction/triple-digit">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("xF0LKqExY80")}
          >
            <p className="font-bold mb-4"> Triple Digit Subtraction </p>
          </div>
        </Link>
      </div>
    </div>
  );

  const practiceComponent = (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/subtraction/single-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                I Can Subtract Single Digit Numbers (Grade 1){" "}
              </p>
              <img
                className="h-30 object-cover"
                src="/images/numberLineSub.png"
              ></img>
              <div className="flex items-center">
                Latest Confidence Rating: <span className="text-4xl">😄</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/subtraction/double-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                I Can Subtract Double Digit Numbers (Grade 2)
              </p>
              <img
                className="h-30 object-cover"
                src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%202DIGITS.png"
              ></img>
              <div className="flex items-center">
                Latest Confidence Rating: <span className="text-4xl">😐</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/subtraction/triple-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                I Can Subtract Triple Digit Numbers (Grade 3)
              </p>
              <img
                className="h-full w-full"
                src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png"
              ></img>
              <div className="flex items-center">
                Latest Confidence Rating: <span className="text-4xl">❓</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl"> Quiz Time!</p>
          <p className="text-xl">
            Take a quiz to test out your Subtraction Skills. The quiz will cover
            topics at your grade level so it's personalized for you! You can
            take the quiz as many times as you wish to perfect your skills. Good
            luck, you got this!
          </p>
          <div className="flex gap-8">
            <p className="font-bold"> Select Grade:</p>
            <select
              value={grade}
              onChange={onGradeChange}
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
            </select>
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={"quiz/subtraction?level=" + gradeNum(grade)}>
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Quiz Yourself"
                />
              </Link>
            </div>
          </div>
          Best Attempt: 68%
        </div>
        <img
          className="w-full sm:w-1/2 object-cover"
          alt="student-image"
          src="https://knowledgeone.ca/wp-content/uploads/2018/11/online-readiness-01.jpg"
        />
      </div>
    </div>
  );

  enum Stage {
    VIDEOS,
    PRACTICE,
    QUIZ,
  }

  const [stage, setStage] = useState(Stage.VIDEOS);

  const getComponentForStage = () => {
    switch (stage) {
      case Stage.VIDEOS:
        return videoComponent;
      case Stage.PRACTICE:
        return practiceComponent;
      case Stage.QUIZ:
        return quizComponent;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
            <p className="text-5xl text-white mb-4">
              Subtraction Topic Overview
            </p>
            <p className="text-xl text-white">
              Subtraction is taking one number away from another number to find
              the difference! Watch the videos on the explore tab to learn more
              and do the practice questions to apply your knowledge. Once you
              feel confident in your subtraction skills, take the quiz to
              evaluate your understanding!
            </p>
          </div>

          <div className="flex mt-2 rounded-md bg-gray-100 relative tabs">
            <button
              className={
                "tabs-item active relative z-10 p-4 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none " +
                (stage == Stage.VIDEOS ? "bg-blue-500 text-white" : "")
              }
              onClick={() => {
                setStage(Stage.VIDEOS);
              }}
            >
              Explore
            </button>
            <button
              className={
                "tabs-item w-full relative z-10 p-4 my-2 ml-2 text-center rounded-md  text-sm cursor-pointer select-none focus:outline-none " +
                (stage == Stage.PRACTICE ? "bg-blue-500 text-white" : "")
              }
              onClick={() => {
                setStage(Stage.PRACTICE);
              }}
            >
              Practice
            </button>
            <button
              className={
                "tabs-item w-full relative z-10 p-4 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none " +
                (stage == Stage.QUIZ ? "bg-blue-500 text-white" : "")
              }
              onClick={() => {
                setStage(Stage.QUIZ);
              }}
            >
              Quiz
            </button>

            <span className={"tab-item-animate rounded-md bg-white"}></span>
          </div>
          <p className="text-xl">
            {stage == Stage.VIDEOS && "Watch videos to explore this topic"}
            {stage == Stage.PRACTICE &&
              "Practice skills and rate your confidence level"}
            {stage == Stage.QUIZ && "Test your speed and accuracy"}
          </p>
          {getComponentForStage()}
        </div>
      </div>
    </div>
  );
}
