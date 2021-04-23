import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/stories/Button";
import DiagnosticTestForm from "../components/stories/DiagnosticTestForm";
import Dropdown from "../components/stories/Dropdown";
import QuestionSet from "../components/stories/QuestionSet";
import Toggle from "../components/stories/Toggle";
import {
  generateQuestionsForDiagnostic,
  TestLength,
  Topic,
} from "./api/questionGenerator";

enum STAGE {
  CREATE,
  TEST
}

export default function Diagnostic(props) {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [stage, setStage] = useState(STAGE.CREATE);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const inputElement = useRef(null);
  const submitGuess = (e) => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setGuess('')
    }
  }
  const createDiagnostic = (topics: Topic[]) => {
    setTopics(topics)
    setStage(STAGE.TEST)
  }

  useEffect(() => {
    setQuestions(generateQuestionsForDiagnostic(TestLength.SHORT, topics));
  }, [topics])

  let component;
  switch (stage) {
    case STAGE.CREATE:
      component = <DiagnosticTestForm onClick={createDiagnostic} />
      break;
    case STAGE.TEST:
      component = <QuestionSet
        title=""
        questionData={questions}
        index={index}
        guess={guess}
        setGuess={setGuess}
        inputElement={inputElement}
        submitGuess={submitGuess}
      />
      break;
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="p-8 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
}
