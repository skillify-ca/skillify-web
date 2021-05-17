import React from "react";
import { useSelector } from "react-redux";
import DiagnosticData from "../../components/stories/DiagnosticData";
import DiagnosticEvidence from "../../components/stories/DiagnosticEvidence";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticEvidencePage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  const questionData = diagnosticResults.questions;
  const guessAns = diagnosticResults.guessAns;
  const topics = diagnosticResults.topics;
  return (
    <div>
      <DiagnosticEvidence
        //questions={questionData.map((question) => question.text)}
        //guessAns={guessAns}
        topic={topics}
      />
    </div>
  );
};

export default DiagnosticEvidencePage;
