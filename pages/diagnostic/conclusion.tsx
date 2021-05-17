import React from "react";
import { useSelector } from "react-redux";
import DiagnosticConclusion from "../../components/stories/DiagnosticConclusion";
import DiagnosticData from "../../components/stories/DiagnosticData";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticConclusionPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div>
      <DiagnosticConclusion />
    </div>
  );
};

export default DiagnosticConclusionPage;
