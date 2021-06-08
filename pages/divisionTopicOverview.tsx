import React, { useState } from "react";
import { Button } from "../components/stories/Button";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function divisionTopicOverview(props) {
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
      backgroundImage: `linear-gradient(rgba(143, 143, 143, 0.8), rgba(135, 80, 156, 0.8)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const videoComponent = (
    <div>
      <div className="bg-purple-300 shadow-inner flex-col p-2 grid-cols-none">
        <p className="text-xl text-white bg-purple-700 text-center">
          {" "}
          A Look Into The Future{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Link href="lessons/division/basic-division">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("biwYDuCHwXo")}
          >
            <p className="font-bold mb-4"> Basic Division</p>
          </div>
        </Link>
        <Link href="lessons/division/division-with-remainders">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("KGMf314LUc0")}
          >
            <p className="font-bold mb-4">Division with Remainders</p>
          </div>
        </Link>
        <Link href="lessons/division/fractions">
          <div
            className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
            style={cardStyle("362JVVvgYPE")}
          >
            <p className="font-bold mb-4"> Fractions </p>
          </div>
        </Link>
      </div>
    </div>
  );

  const practiceComponent = (
    <div>
      <div className="bg-green-300 shadow-inner flex-col p-2 grid-cols-none">
        <p className="text-xl text-white bg-green-700 text-center">
          {" "}
          Skills Catalog for Students{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
          <Link href="/practice/addition/single-digit">
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4"> Equal Sharing to 12 (Grade 1) </p>
              <img
                className="h-30 object-cover"
                src="https://pbs.twimg.com/media/EW6u028WkAIAqz9.jpg"
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
              <p className="font-bold mb-4"> Divide equally to 12 (Grade 2)</p>
              <img
                className="h-30 object-cover"
                src="https://oercommons.s3.amazonaws.com/media/editor/60284/fullsizeoutput_2165.jpeg"
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
              <p className="font-bold mb-4"> Divide equally to 100 (Grade 3)</p>
              <img
                className="h-full w-full"
                src=" https://www.tunstallsteachingtidbits.com/wp-content/uploads/2016/04/IMG_2402-800x533.jpg"
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
      <div className="bg-blue-300 shadow-inner flex-col p-2">
        <p className="text-xl text-white bg-blue-700 text-center">
          {" "}
          Time to Quiz Yourself{" "}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl"> Quiz Time!</p>
          <p className="text-xl">
            Take a quiz to test out your Division Skills. The topics we'll cover
            are based on your grade level. So it's completly personalized! You
            can take the quiz as many times as you wish to perfect your skills.
            Good luck, you got this!
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
              <Link href={"quiz/division?level=" + gradeSet(grade)}>
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
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />

      <div className="p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
            <p className="text-5xl text-white">Division Topic Overview</p>
            <p className="text-xl text-white">
              Here are some insights of Division. It will go through how
              Division will look like in the real world, a place where you can
              practice these essential skills, and finally an enviornment where
              you can evaluate yourself on your understanding of the material.
            </p>
          </div>

          <div className="flex mt-2 rounded-md bg-gray-100 relative tabs">
            <button
              className={
                "tabs-item active relative z-10 p-4 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none " +
                (stage == Stage.VIDEOS ? "bg-purple-700 text-white" : "")
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
                (stage == Stage.PRACTICE ? "bg-green-700 text-white" : "")
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
                (stage == Stage.QUIZ ? "bg-blue-700 text-white" : "")
              }
              onClick={() => {
                setStage(Stage.QUIZ);
              }}
            >
              Quiz
            </button>

            <span className={"tab-item-animate rounded-md bg-white"}></span>
          </div>

          {getComponentForStage()}
        </div>
      </div>
    </div>
  );
}
