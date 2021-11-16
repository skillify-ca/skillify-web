import { ApolloClient, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { FETCH_GIZA_DATA } from "../../graphql/fetchGizaData";
import { measureTime } from "../../pages/api/time";
import Navbar from "../Navbar";
import { Button } from "../ui/Button";

const TransformationDashboardPage = ({ data }) => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const questionData = [
    "A net for the rectangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the rectangular prisms in question 1, image also provided from question 1. Then find the surface area of the prism",
    "A net for the triangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the triangular prisms in question 3, image also provided from question 3. Then find the surface area of the prism",
    "Explain how the net of a prism helps you find the surface area of a prism",
  ];

  const getTimeSpentAvg = () => {
    return "2 minutes and 33 seconds";
  };

  return (
    <div className="flex flex-col heropattern-architect-blue-100 bg-blue-300">
      <div className="flex flex-col gap-8 p-8 items-center">
        <div className="bg-blue-50 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <div>
            <p className="font-bold text-2xl w-full">
              Transformation Assignment
            </p>
            <p className="">
              An assignment that tests students' knowledge about various image
              transformations
            </p>
          </div>
          <Link href="/teachers/djacobs/transformations">
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
              <p>Question 6</p>
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
              <p>{getTimeSpentAvg()}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-12 rounded-t-xl">
              <div className="grid grid-cols-12 rounded-t-xl font-bold items-center justify-between bg-yellow-600 py-4 overflow-scroll">
                <p className="col-span-2 text-center">#</p>
                <p className="col-span-6 text-center">Question</p>
                <p className="col-span-4 text-center">Answer</p>
                {questionData !== null &&
                  questionData.map((question, index) => (
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
                      <div className="col-span-4"></div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:col-span-12 bg-green-400 rounded-t-xl">
              <p className="font-bold w-full text-xl py-2 px-4">
                Guess History
              </p>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default TransformationDashboardPage;
