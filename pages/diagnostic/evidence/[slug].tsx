import React, { useState } from "react";
import { useSelector } from "react-redux";
import DiagnosticEvidence from "../../../components/assessment/DiagnosticEvidence";
import Navbar from "../../../components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { diagnosticSelector } from "../../../redux/diagnosticSlice";
import { FETCH_DIAGNOSTIC_DESCRIPTION_ON_UNIT } from "../../../graphql/fetchDiagnosticDescriptionsOnUnit";

export type FetchDescriptionOnUnit = {
  diagnostics: DiagnosticData[];
};

export type DiagnosticData = {
  description: string;
  grade: number;
  id: number;
};
const DiagnosticEvidencePage = ({ slug, data }) => {
  const diagnosticResults = useSelector(diagnosticSelector);

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />
      {data && (
        <div className="p-4 flex flex-col items-center justify-center">
          <DiagnosticEvidence
            topic={slug}
            results={diagnosticResults}
            skillDescription={data}
          />
        </div>
      )}
    </div>
  );
};

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_DIAGNOSTIC_DESCRIPTION_ON_UNIT,
    variables: {
      unit: params.slug,
    },
  });
  return {
    props: {
      slug: params.slug,
      data: data,
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
