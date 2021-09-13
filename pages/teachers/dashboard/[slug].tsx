import { useQuery } from "@apollo/client";
import { session, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import { userId } from "../../../graphql/utils/constants";
import Navbar from "../../../components/Navbar";

const TeacherDashboardPage = ({ data }) => {
  const [session] = useSession();

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      {JSON.stringify(data)}
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
      assignment_id: params.slug,
    },
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data: data } };
}

export default TeacherDashboardPage;
