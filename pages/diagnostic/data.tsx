import React from "react";
import { useSelector } from "react-redux";
import DiagnosticData from "../../components/stories/DiagnosticData";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticDataPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  const questionData = diagnosticResults.questions;
  const guessAns = diagnosticResults.guessAns;
  const topics = diagnosticResults.guessAns;
  return (
    <div>
      <DiagnosticData
        questions={questionData.map((question) => question.text)}
        guessAns={guessAns}
        topics={topics}
      />
    </div>
  );
};

export default DiagnosticDataPage;
