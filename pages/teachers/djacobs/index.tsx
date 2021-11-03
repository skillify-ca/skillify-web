import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import { FETCH_GIZA_DATA } from "../../../graphql/fetchGizaData";
import TeacherDashboardPage from "../../../components/dashboard/solving-for-variables-dashboard";
import GizaDashboardPage from "../../../components/dashboard/dashboard-giza";
import SolvingForVariablesDashboard from "../../../components/dashboard/solving-for-variables-dashboard";

const MainDashboardPage = ({ data, giza_data }) => {
  const choices = ["Solving for Variables", "Escape from Giza"];
  const [choiceIndex, setChoiceIndex] = useState(0);
  return (
    <div className="flex flex-col heropattern-architect-blue-200 bg-blue-100">
      <Navbar />
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center bg-gray-700">
        <div className="p-4 bg-gray-700">
          <img src="/images/djacobs/logo.png" />
        </div>
        <div className="bg-gray-700 flex flex-col items-center p-4 gap-4">
          <h2 className="text-center text-gray-50 font-bold">
            {"Please select an assignment"}
          </h2>
          <select
            className="border-blue-400 border-2 p-4 mx-8"
            value={choiceIndex}
            onChange={(e) => setChoiceIndex(Number.parseInt(e.target.value))}
          >
            <option value={0}>{choices[0]}</option>
            <option value={1}>{choices[1]}</option>
          </select>
        </div>
      </div>
      {choiceIndex == 0 ? (
        <SolvingForVariablesDashboard data={data} />
      ) : (
        <GizaDashboardPage data={giza_data} />
      )}
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
      assignment_id: "djacobs1",
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
