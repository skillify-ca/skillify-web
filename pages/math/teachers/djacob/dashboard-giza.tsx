//http://localhost:3000/teachers/djacob/dashboard or http://localhost:3000/teachers/djacob/dashboard-giza

import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import Navbar from "../../../components/ui/Navbar";
import { FETCH_GIZA_DATA } from "../../../graphql/fetchGizaData";
import { measureTime } from "../../api/time";
import TeX from "@matejmazur/react-katex";

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
    <div className="flex flex-col h-screen overflow-auto bg-scroll bg-blue-100 heropattern-architect-blue-200">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="p-4 text-xl font-bold text-center">
          {"Giza Dashboard"}
        </h1>

        <div className="flex flex-col max-w-6xl gap-8 p-4 mx-4 mb-4 shadow-lg bg-blue-50 rounded-xl">
          <p className="w-full text-2xl font-bold">Ms. Jacob's Classroom</p>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Average Time Spent</p>{" "}
              <p>{getTimeSpentAvg()}</p>
            </div>
            <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Hardest Question</p>{" "}
              <p>Question 16</p>
            </div>
            <div className="flex flex-col col-span-4 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl">
              <p className="text-2xl font-bold">Missing Assignments</p> <p>0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-6xl gap-8 p-4 mx-4 mb-4 shadow-lg bg-blue-50 rounded-xl">
          <p className="w-full text-2xl font-bold">Students</p>
          <select
            className="p-4 border-2 border-blue-400"
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
            <div className="flex flex-col col-span-12 gap-8 p-8 text-center transition-all duration-500 ease-in-out transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105 erounded-xl">
              <p className="text-2xl font-bold">Time Spent</p>{" "}
              <p>{getTimeSpentStudent()}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-12 rounded-t-xl">
              <div className="grid items-center justify-between grid-cols-12 py-4 font-bold bg-yellow-600 rounded-t-xl">
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
                          <p>
                            {guessItem ? guessItem.guess : "No Answer Provided"}
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
            <div className="bg-green-400 md:col-span-12 rounded-t-xl">
              <p className="w-full px-4 py-2 text-xl font-bold">
                Guess History
              </p>
              <div className="md:col-span-12 rounded-t-xl">
                <div className="grid items-center justify-between grid-cols-12 py-4 font-bold bg-green-400 rounded-t-xl">
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
                      <div className="grid items-center justify-between grid-cols-12 py-4 font-bold bg-white rounded-t-xl">
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

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_GIZA_DATA,
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data } };
}

export default GizaDashboardPage;
