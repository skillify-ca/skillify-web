import React from "react";
import { useSelector } from "react-redux";
import DiagnosticEvidence from "../../components/stories/DiagnosticEvidence";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticEvidencePage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  const questionData = diagnosticResults.questions;
  const guessAns = diagnosticResults.guessAns;
  return (
    <div>
      <DiagnosticEvidence
        skills={questionData.map((question) => question.skill)}
      />
    </div>
  );
};

export default DiagnosticEvidencePage;
