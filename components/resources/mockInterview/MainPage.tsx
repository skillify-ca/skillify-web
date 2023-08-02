import React, { useState } from "react";

const MainPage = ({ onNext }) => {
  const [selectedMode, setSelectedMode] = useState(
    "Technical Recruiter Screen"
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gray-200">
      <h1 className="text-2xl">Welcome to Mock Interview Prep. </h1>
      <p>
        Use this tool to record yourself answering questions to the most common
        interview questions.
      </p>
      <select
        value={selectedMode}
        onChange={(e) => setSelectedMode(e.target.value)}
        className="border-2 border-gray-400 rounded-lg"
      >
        {[
          "Technical Recruiter Screen",
          "Technical Phone Screen",
          "Hiring Manager Screen",
          "Onsite Interview",
        ].map((it, index) => (
          <option key={index}>{it}</option>
        ))}
      </select>
      <ModeButton
        disabled={selectedMode !== "Technical Recruiter Screen"}
        text="Start"
        onClick={() => {
          if (selectedMode === "Technical Recruiter Screen") {
            onNext();
          }
        }}
      />
    </div>
  );
};

const ModeButton = ({ disabled, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        disabled
          ? "bg-gray-400"
          : "bg-orange-400 cursor-pointer hover:bg-orange-500"
      } px-4 py-2 rounded-lg font-bold text-white`}
    >
      {text}
    </div>
  );
};

export default MainPage;
