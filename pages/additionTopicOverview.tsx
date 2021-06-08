import React, { useState } from "react";
import { Button } from "../components/stories/Button";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function additionTopicOverview(props) {
  const [grade, setGrade] = useState("Grade 3");
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
  let gradeSet = (grade: string) => {
    let gradeNum;
    switch (grade) {
      case "Grade 1":
        gradeNum = 1;
        break;
      case "Grade 2":
        gradeNum = 2;
        break;
      case "Grade 3":
        gradeNum = 3;
        break;
    }
    return gradeNum;
  };
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const videoComponent = (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Link href="lessons/addition/basic-addition">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("uONIJ5TQ2DA")}
          >
            <p className="font-bold mb-4"> Basic Addition</p>
          </div>
        </Link>
        <Link href="lessons/addition/addition-vs-multiplication">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("NVhA7avdTAw")}
          >
            <p className="font-bold mb-4">Addition vs Multiplication</p>
          </div>
        </Link>
        <Link href="lessons/addition/order-of-operations">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("tyrz0EJ0InQ")}
          >
            <p className="font-bold mb-4"> Order of Operations</p>
          </div>
        </Link>
      </div>
    </div>
  );

  const practiceComponent = (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/addition/single-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                Adding Single Digit Numbers (Grade 1){" "}
              </p>
              <img
                className="h-30 object-cover"
                src="https://www.broadwater.w-sussex.sch.uk/_data/site/20/pg/366/8.jpg"
              ></img>
              <div className="flex items-center">
                Latest Confidence Rating: <span className="text-4xl">😄</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/addition/double-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                Adding Double Digit Numbers (Grade 2)
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
          <Link href="/practice/addition/triple-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">
                {" "}
                Adding Triple Digit Numbers (Grade 3)
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
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/addition/properties">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4"> Addition Properties (Grade 3)</p>
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
            Take a quiz to test out your Addition Skills. The quiz will cover
            topics at your grade level so it's personalized for you! You can
            take the quiz as many times as you wish to perfect your skills. Good
            luck, you got this!
          </p>
          <div className="flex gap-8">
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
              <Link href={"quiz/addition?level=" + gradeSet(grade)}>
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Quiz Yourself"
                />
              </Link>
            </div>
          </div>
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
            <p className="text-5xl text-white mb-4">Addition</p>
            <p className="text-xl text-white">
              Addition is taking two or more numbers and adding them together!
              Watch the videos on the explore tab to learn more and do the
              practice questions to apply your knowledge. Once you feel
              confident in your addition skills, take the quiz to evaluate your
              understanding!
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
