import React from "react";
import { useSelector } from "react-redux";
import DiagnosticEvidence from "../../../components/assessment/DiagnosticEvidence";

import { diagnosticSelector } from "../../../redux/diagnosticSlice";

const DiagnosticEvidencePage = ({ slug }) => {
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <div className="p-4 flex flex-col items-center justify-center">
        <DiagnosticEvidence topic={slug} results={diagnosticResults} />
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default DiagnosticEvidencePage;
