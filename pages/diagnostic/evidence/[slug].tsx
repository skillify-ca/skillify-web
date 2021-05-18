import React from "react";
import { useSelector } from "react-redux";
import DiagnosticEvidence from "../../../components/stories/DiagnosticEvidence";

import { diagnosticSelector } from "../../../redux/diagnosticSlice";
import { Topic } from "../../api/skill";

const DiagnosticEvidencePage = ({ slug }) => {
  console.log(slug);
  const diagnosticResults = useSelector(diagnosticSelector);
  return (
    <div>
      <DiagnosticEvidence topic={slug} results={diagnosticResults} />
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
