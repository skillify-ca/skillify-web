import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import Navbar from "../../../components/Navbar";
import { questions } from "../../api/teachers/cye";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import { FETCH_ASSIGNMENT } from "../../../graphql/fetchAssignment";
import { UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT } from "../../../graphql/userAssignments/updateSolutionsReleasedForAssignment";
import dynamic from "next/dynamic";

const FreeDrawing = dynamic(
  () => import("../../../components/ui/FreeDrawing"),
  {
    ssr: false,
  }
);

const TeacherDashboardPage = ({ data }) => {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [solutionsReleased, setSolutionsReleased] = useState(false);
  const { loading, data: assignmentFetchData } = useQuery(FETCH_ASSIGNMENT, {
    variables: {
      assignmentId: "cye1",
    },
    onCompleted: (data) => {
      if (data && data.assignments && data.assignments[0]) {
        setSolutionsReleased(data.assignments[0].solutions_released);
      }
    },
  });
  const [updateSolutionsReleased] = useMutation(
    UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT
  );
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      {data && data.user_assignments && data.user_assignments[0] && (
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold text-xl p-4">
            Assignment Id: {data.user_assignments[0].assignment_id}
          </h1>
          {assignmentFetchData &&
            assignmentFetchData.assignments &&
            assignmentFetchData.assignments[0] && (
              <div className="flex gap-4 p-4">
                <p>Release Solutions</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    updateSolutionsReleased({
                      variables: {
                        solutions_released: e.target.checked,
                        assignment_id: "cye1",
                      },
                    });
                    setSolutionsReleased(e.target.checked);
                  }}
                  checked={solutionsReleased}
                />
              </div>
            )}
          <div className="bg-white mb-4 mx-4 p-4 rounded-xl shadow-lg flex flex-col gap-8">
            <select
              className="border-blue-400 border-2 p-4"
              value={currentStudentIndex}
              onChange={(e) =>
                setCurrentStudentIndex(Number.parseInt(e.target.value))
              }
            >
              {data.user_assignments.map((student, index) => (
                <option value={index}>{student.user.name}</option>
              ))}
            </select>
            {data.user_assignments[currentStudentIndex].user_solution.map(
              (guess, index) => (
                <div className="flex flex-col gap-2 p-4 items-center border-b-4 border-blue-400">
                  <p className="">Question #{index}</p>
                  <div>
                    <TeX block>{questions[index]}</TeX>
                  </div>
                  <p>
                    Student's Answer: <span className="font-bold">{guess}</span>
                  </p>
                  <div className="grid grid-cols-12">
                    <div className="col-start-4 col-span-4">
                      <FreeDrawing
                        saveImage={() => {}}
                        lines={
                          data.user_assignments[currentStudentIndex]
                            .user_drawn_lines[index]
                        }
                        setLines={() => {}}
                        historyStep={
                          data.user_assignments[currentStudentIndex]
                            .user_drawn_lines[index].length
                        }
                        setHistoryStep={() => {}}
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
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
