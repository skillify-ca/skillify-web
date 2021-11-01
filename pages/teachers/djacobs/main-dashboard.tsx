import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import dashboard from "../../../components/dashboard/dashboard";
import dashboard_giza from "../../../components/dashboard/dashboard-giza";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import { FETCH_GIZA_DATA } from "../../../graphql/fetchGizaData";
import TeacherDashboardPage from "../../../components/dashboard/dashboard";
import GizaDashboardPage from "../../../components/dashboard/dashboard-giza";

const MainDashboardPage = ({ data, giza_data }) => {
  const choices = ["Dashboard", "Giza Dashboard"];
  const [choiceIndex, setChoiceIndex] = useState(0);
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      <h1 className="text-center font-bold text-xl p-4">
        {"Dashboard Page for Ms.Jacobs"}
      </h1>
      <h2 className="text-center font-bold text-xl p-4">
        {"Please select an assignment from the dropdown below"}
      </h2>
      <select
        className="border-blue-400 border-2 p-4"
        value={choiceIndex}
        onChange={(e) => setChoiceIndex(Number.parseInt(e.target.value))}
      >
        <option value={0}>{choices[0]}</option>
        <option value={1}>{choices[1]}</option>
      </select>
      <p>{/*JSON.stringify(data)*/}</p>
      <p>{/*JSON.stringify(giza_data)*/}</p>
      {
        /*
      This will be where the component is going to be called, for some reason I am having issues with calling the component, may need some pair programming on this.
      This will be a part of next PR, for now this sample dashboard page will be the 1st step of creating this dashboard home
      */
        choiceIndex == 0 ? (
          <TeacherDashboardPage data={data} />
        ) : (
          <GizaDashboardPage data={giza_data} />
        )
      }
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
