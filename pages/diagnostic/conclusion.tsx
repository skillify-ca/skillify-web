import React from "react";
import { useSelector } from "react-redux";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import DiagnosticConclusion from "../../components/stories/DiagnosticConclusion";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

const DiagnosticConclusionPage = () => {
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <div className="flex flex-col items-center justify-center">
        <DiagnosticConclusion results={diagnosticResults} />
      </div>
    </div>
  );
};

export default DiagnosticConclusionPage;
