import React from "react";
import { useSelector } from "react-redux";
import DiagnosticEvidence from "../../components/stories/DiagnosticEvidence";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticEvidencePage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div>
      <DiagnosticEvidence
        topic="Addition"
        results={diagnosticResults}
      />
    </div>
  );
};

export default DiagnosticEvidencePage;
