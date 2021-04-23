import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/stories/Button";
import Dropdown from "../components/stories/Dropdown";
import QuestionSet from "../components/stories/QuestionSet";
import Toggle from "../components/stories/Toggle";
import {
  generateQuestionsForDiagnostic,
  TestLength,
  Topic,
} from "./api/questionGenerator";

export default function Diagnostic(props) {
  const questions = generateQuestionsForDiagnostic(TestLength.SHORT, [
    Topic.MULTIPLICATION,
    Topic.DIVISION,
  ]);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
	const inputElement = useRef(null);
	const submitGuess = (e) => {
    console.log("V");
    if (index < questions.length - 1) {
			setIndex(index + 1);
    }
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="p-8 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white rounded-lg p-4 w-64 h-96">
          <p className="text-xl font-bold mb-8">Diagnostic Test</p>

          <div className="flex w-full gap-4 mb-8">
            <p className="text-sm font-bold text-gray-700">Topics</p>
            <div className="flex flex-col">
              <div className="flex gap-4">
                <Toggle />
                <p>Addition</p>
              </div>
              <div className="flex gap-4">
                <Toggle />
                <p>Subtraction</p>
              </div>
              <div className="flex gap-4">
                <Toggle />
                <p>Multiplication</p>
              </div>
              <div className="flex gap-4">
                <Toggle />
                <p>Division</p>
              </div>
            </div>
          </div>

          <div className="w-full mb-16">
            <Dropdown />
          </div>

          <Button backgroundColor="blue" label="Start" textColor="white" />

          <QuestionSet
            title="Diagnostic"
            questionData={questions}
            index={index}
            guess={guess}
            setGuess={setGuess}
            inputElement={inputElement}
            submitGuess={submitGuess}
          />
        </div>
      </div>
    </div>
  );
}
