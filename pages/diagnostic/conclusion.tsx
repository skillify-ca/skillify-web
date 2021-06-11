import React from "react";
import { useSelector } from "react-redux";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";

import { diagnosticSelector } from "../../redux/diagnosticSlice";

import dynamic from 'next/dynamic'

const DiagnosticConclusion = dynamic(
  () => import('../../components/stories/DiagnosticConclusion'),
  { ssr: false }
)
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
