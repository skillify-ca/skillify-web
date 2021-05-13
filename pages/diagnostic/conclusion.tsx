import React from "react";
import { useSelector } from "react-redux";
import DiagnosticConclusion from "../../components/stories/DiagnosticConclusion";
import DiagnosticData from "../../components/stories/DiagnosticData";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticConclusionPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  const topics = diagnosticResults.topics;
  return (
    <div>
      <DiagnosticConclusion topics={topics} />
    </div>
  );
};

export default DiagnosticConclusionPage;
