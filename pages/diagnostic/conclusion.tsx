import React from "react";
import { useSelector } from "react-redux";
import DiagnosticConclusion from "../../components/stories/DiagnosticConclusion";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticConclusionPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div>
      <DiagnosticConclusion results={diagnosticResults} />
    </div>
  );
};

export default DiagnosticConclusionPage;
