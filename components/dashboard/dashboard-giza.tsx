import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { FETCH_GIZA_DATA } from "../../graphql/fetchGizaData";
import { measureTime } from "../../pages/api/time";
import Navbar from "../Navbar";
import { Button } from "../ui/Button";

const GizaDashboardPage = ({ data }) => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const questionData = [
    "The sum of the interior (inside) angles of a triangle add up to what?",
    "What is the measurement of <a? (Tip: Just write the number.) ",
    "Which 3 angles add up to 180 degrees?",
    "A triangle has 2 angles that are 50 degrees. Is it possible for the last angle to be obtuse?",
    "Which of the following letters has a right- angle in it?",
    "Use your protractor for this question! Which of the following are the interior angles of this pyramid?",
    "How would you classify this triangle?",
    "In the space provided, write a secret password (using UPPER CASE LETTERS* and NO spaces) using the triangle colours in the photo. Here is your clue: isosceles, scalene, right, equilateral, scalene.",
    "You're almost at the end of the tunnel! In the space provided, determine the secret password using the triangles provided (use UPPER CASE LETTERS and no spaces) Here is the clue: right- isosceles, small equilateral, large equilateral, obtuse- scalene.",
    "If <a is 65 degrees, what is <b?",
    "Which angle is 40 degrees?",
    "Your group comes across an ancient Egyptian sundial. If <b is 73 degrees, solve what <a is.",
    "What do all of these shapes have in common?",
    "What is the missing angle? Use your knowledge of complementary, supplementary, or opposite angles to help you. Tip: Only type the number.",
    "You're almost out! Using your knowledge of supplementary angles, what is <d?",
    "LAST QUESTION before you escape the clutches of the mummy! In the space provided, write a secret password by figuring out the missing angles of the triangle (the grey circles). Your secret password needs to be in numerical order with NO spaces (e.x. 1234567).",
  ];

  const getTimeSpentAvg = () => {
    return "2 minutes and 33 seconds";
  };

  const getTimeSpentStudent = () => {
    const startTime: number =
      data.giza_student_grades[currentStudentIndex].start_time;
    const endTime: number =
      data.giza_student_grades[currentStudentIndex].end_time;
    var calcuatedTime = measureTime(startTime, endTime);
    return (
      calcuatedTime.minutes +
      " minutes and " +
      calcuatedTime.secondsString +
      " seconds"
    );
  };

  // Determines if guess history item is for the currently selected question
  const isSelectedQuestion = (guessHistoryItem) => {
    return guessHistoryItem.key.startsWith(
      "Question" + (selectedQuestion + 1) + "."
    );
  };

  //Gets the attempt number to be displayed in dashboard
  const getAttemptNumber = (guessHistoryItem) => {
    return guessHistoryItem.key[guessHistoryItem.key.length - 1];
  };

  return (
    <div className="flex flex-col heropattern-architect-blue-100 bg-blue-300">
      <div className="flex flex-col gap-8 p-8 items-center">
        <div className="bg-blue-50 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <div>
            <p className="font-bold text-2xl w-full">Escape from Giza</p>
            <p className="">
              A virtual escape room that teaches students about geometry and
              angles.
            </p>
          </div>
          <Link href="/teachers/djacobs/giza">
            <Button
              label="Preview Assignment"
              backgroundColor="white"
              textColor="blue-500"
            />
          </Link>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-12 sm:col-span-4 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Average Time Spent</p>{" "}
              <p>{getTimeSpentAvg()}</p>
            </div>
            <div className="col-span-12 sm:col-span-4 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Hardest Question</p>{" "}
              <p>Question 16</p>
            </div>
            <div className="col-span-12 sm:col-span-4 bg-white hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 rounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Missing Assignments</p> <p>0</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <p className="font-bold text-2xl w-full">Students</p>
          <select
            className="border-blue-400 border-2 p-4"
            value={currentStudentIndex}
            onChange={(e) =>
              setCurrentStudentIndex(Number.parseInt(e.target.value))
            }
          >
            {data.giza_student_grades.map((student, index) => (
              <option value={index}>{student.student_name}</option>
            ))}
          </select>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-12 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Time Spent</p>{" "}
              <p>{getTimeSpentStudent()}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-12 rounded-t-xl">
              <div className="grid grid-cols-12 rounded-t-xl font-bold items-center justify-between bg-yellow-600 py-4 overflow-scroll">
                <p className="col-span-2 text-center">#</p>
                <p className="col-span-6 text-center">Question</p>
                <p className="col-span-4 text-center">Answer</p>
                {data.giza_student_grades[currentStudentIndex].guesses !==
                  null &&
                  data.giza_student_grades[currentStudentIndex].guesses.map(
                    (guessItem, index) => (
                      <div
                        onClick={() => setSelectedQuestion(index)}
                        className={`grid grid-cols-12 col-span-12 items-center justify-between ${
                          index === selectedQuestion
                            ? `bg-yellow-200 border-t-2 border-b-2 border-yellow-800`
                            : `bg-yellow-400`
                        } hover:bg-yellow-200 overflow-visible`}
                      >
                        <p className="col-span-2 text-center">{index + 1}</p>
                        <div className="col-span-6">
                          <p>{questionData[index]}</p>
                        </div>
                        <div className="col-span-4">
                          <p className="w-full">
                            {guessItem ? guessItem.guess : "No Answer Provided"}
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
            <div className="md:col-span-12 bg-green-400 rounded-t-xl">
              <p className="font-bold w-full text-xl py-2 px-4">
                Guess History
              </p>
              <div className="md:col-span-12">
                <div className="grid grid-cols-12 font-bold items-center justify-between bg-green-400 py-4">
                  <p className="col-span-6 text-center">Attempt #</p>
                  <p className="col-span-6 text-center">Guess Attempt</p>
                </div>
                {data.giza_student_grades[currentStudentIndex].guess_history !==
                  null &&
                  data.giza_student_grades[currentStudentIndex].guess_history
                    .filter((guessHistoryItem) =>
                      isSelectedQuestion(guessHistoryItem)
                    )
                    .map((guessHistoryItem) => (
                      <div className="grid grid-cols-12 font-bold items-center justify-between bg-white py-4">
                        <p className="col-span-6 text-center">
                          {getAttemptNumber(guessHistoryItem)}
                        </p>
                        <p className="col-span-6 text-center">
                          {guessHistoryItem.value.guess}
                        </p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default GizaDashboardPage;
