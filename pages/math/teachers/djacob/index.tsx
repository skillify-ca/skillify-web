import React, { useState } from "react";
import Navbar from "../../../../components/ui/Navbar";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../../graphql/userAssignments/fetchUserAssignments";
import { FETCH_GIZA_DATA } from "../../../../graphql/fetchGizaData";
import TeacherDashboardPage from "../../../../components/math/geometry/dashboard/solving-for-variables-dashboard";
import GizaDashboardPage from "../../../../components/math/geometry/dashboard/dashboard-giza";
import SolvingForVariablesDashboard from "../../../../components/math/geometry/dashboard/solving-for-variables-dashboard";
import SurfaceAreaDashboardPage from "../../../../components/math/geometry/dashboard/dashboard-surfaceArea";
import TransformationDashboardPage from "../../../../components/math/geometry/dashboard/dashboard-transformations";

const MainDashboardPage = ({ data, giza_data }) => {
  const choices = [
    "Solving for Variables",
    "Escape from Giza",
    "Surface Area Assignment",
    "Transformation Assignment",
  ];
  const [choiceIndex, setChoiceIndex] = useState(0);
  return (
    <div className="flex flex-col bg-blue-100 heropattern-architect-blue-200">
      <Navbar />
      <div className="flex flex-col justify-center bg-gray-700 sm:flex-row sm:justify-between">
        <div className="p-4 bg-gray-700">
          <img src="/images/djacob/logo.png" />
        </div>
        <div className="flex flex-col items-center gap-4 p-4 bg-gray-700">
          <h2 className="font-bold text-center text-gray-50">
            {"Please select an assignment"}
          </h2>
          <select
            className="p-4 mx-8 border-2 border-blue-400"
            value={choiceIndex}
            onChange={(e) => setChoiceIndex(Number.parseInt(e.target.value))}
          >
            <option value={0}>{choices[0]}</option>
            <option value={1}>{choices[1]}</option>
            <option value={2}>{choices[2]}</option>
            <option value={3}>{choices[3]}</option>
          </select>
        </div>
      </div>
      {choiceIndex == 0 && <SolvingForVariablesDashboard data={data} />}
      {choiceIndex == 1 && <GizaDashboardPage data={giza_data} />}
      {choiceIndex == 2 && <SurfaceAreaDashboardPage data={giza_data} />}
      {choiceIndex == 3 && <TransformationDashboardPage data={giza_data} />}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_USER_ASSIGNMENTS,
    variables: {
      assignment_id: "djacob1",
    },
  });

  const { data: giza_data } = await client.query({
    query: FETCH_GIZA_DATA,
  });
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { data: data, giza_data } };
}

export async function getServerSideProps2({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: FETCH_GIZA_DATA,
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  const giza_data = data;
  return { props: { data: giza_data } };
}

export default MainDashboardPage;
