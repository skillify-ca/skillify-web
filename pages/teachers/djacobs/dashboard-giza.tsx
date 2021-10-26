//http://localhost:3000/teachers/djacobs/dashboard or http://localhost:3000/teachers/djacobs/dashboard-giza

import React from "react";
import { useState } from "react";
import Navbar from "../../../components/Navbar";

const GizaDashboardPage = () => {
  const getTimeSpent = () => {
    return "2 minutes and 33 seconds";
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-xl p-4">
          {"Giza Dashboard"}
        </h1>

        <div className="bg-blue-50 max-w-6xl mb-4 mx-4 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <p className="font-bold text-2xl w-full">Ms. Jacob's Classroom</p>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-4 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Average Time Spent</p>{" "}
              <p>{getTimeSpent()}</p>
            </div>
            <div className="col-span-4 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Hardest Question</p>{" "}
              <p>Question 16</p>
            </div>
            <div className="col-span-4 bg-white hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 rounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Missing Assignments</p> <p>0</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 max-w-6xl mb-4 mx-4 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <p className="font-bold text-2xl w-full">Students</p>
          <select
            className="border-blue-400 border-2 p-4"
            value={0}
            /*
              onChange={(e) =>
                setCurrentStudentIndex(0)
              }
            */
          ></select>
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-12 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
              <p className="text-2xl font-bold">Time Spent</p>{" "}
              <p>{getTimeSpent()}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-6 rounded-t-xl">
              <div className="grid grid-cols-12 rounded-t-xl font-bold items-center justify-between bg-yellow-600 py-4">
                <p className="col-span-2 text-center">#</p>
                <p className="col-span-8 text-center">Question</p>
                <p className="col-span-2 text-center">Guess</p>
              </div>
            </div>
            <div className="md:col-span-6 bg-green-400 rounded-t-xl">
              <p className="font-bold w-full text-xl py-2 px-4">Their Work</p>
              <div className="col-start-2 col-span-10 max-h-80 overflow-scroll"></div>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default GizaDashboardPage;
