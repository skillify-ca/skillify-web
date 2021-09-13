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
import { questions } from "../../api/teachers/cye";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";

const TeacherDashboardPage = ({ data }) => {
  const [session] = useSession();
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      {JSON.stringify(data)}
      {data && data.user_assignments && data.user_assignments[0] && (
        <div className="bg-white m-4 p-4 rounded-xl shadow-lg flex flex-col gap-8">
          <p className="font-bold">{data.user_assignments[0].user.name}</p>
          {data.user_assignments[0].user_solution.map((guess, index) => (
            <div className="flex flex-col gap-2 p-4 items-center border-b-4 border-blue-400">
              <p className="">Question #{index}</p>
              <div>
                <TeX block>{questions[index]}</TeX>
              </div>
              <p>
                Student's Answer: <span className="font-bold">{guess}</span>
              </p>
            </div>
          ))}
        </div>
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
