import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_USER_ASSIGNMENTS } from "../../../graphql/userAssignments/fetchUserAssignments";
import Navbar from "../../../components/Navbar";
import TeX from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import { FETCH_ASSIGNMENT } from "../../../graphql/fetchAssignment";
import { UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT } from "../../../graphql/userAssignments/updateSolutionsReleasedForAssignment";
import dynamic from "next/dynamic";
import { answers, questions } from "../../api/teachers/djacobs";
import { Button } from "../../../components/ui/Button";

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
      assignmentId: "djacobs1",
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
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const getGrade = () => {
    const rightGuesses: boolean[] = data.user_assignments[
      currentStudentIndex
    ].user_solution.map((guess, index) => {
      return Number.parseInt(guess) === answers[index];
    });
    const correctGuesses: number = rightGuesses.filter(
      (it) => it === true
    ).length;

    const grade =
      (correctGuesses * 100) /
      data.user_assignments[currentStudentIndex].user_solution.length;

    return grade + "%";
  };
  const getTimeSpent = () => {
    return "2 minutes and 33 seconds";
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      {data && data.user_assignments && data.user_assignments[0] && (
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold text-xl p-4">
            {data.user_assignments[0].assignment.title}
          </h1>

          {assignmentFetchData &&
            assignmentFetchData.assignments &&
            assignmentFetchData.assignments[0] && (
              <div className="flex gap-4 p-4">
                <Button
                  label={
                    solutionsReleased ? "Lock Solutions" : "Release Solutions"
                  }
                  backgroundColor="blue"
                  textColor="white"
                  onClick={(e) => {
                    updateSolutionsReleased({
                      variables: {
                        solutions_released: !solutionsReleased,
                        assignment_id: "djacobs1",
                      },
                    });
                    setSolutionsReleased(!solutionsReleased);
                  }}
                />
              </div>
            )}
          <div className="bg-blue-50 max-w-6xl mb-4 mx-4 p-4 rounded-xl shadow-lg flex flex-col gap-8">
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
            <div className="grid grid-cols-12 gap-8 ">
              <div className="col-span-6 bg-white hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 rounded-xl p-8 text-center flex flex-col gap-8">
                <p className="text-2xl font-bold">Grade</p> <p>{getGrade()}</p>
              </div>
              <div className="col-span-6 bg-white rounded-xl hover:shadow-2xl transform transition-all hover:scale-105 shadow-lg ease-in-out duration-500 erounded-xl p-8 text-center flex flex-col gap-8">
                <p className="text-2xl font-bold">Time Spent</p>{" "}
                <p>{getTimeSpent()}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
              <div className="md:col-span-6 rounded-t-xl">
                <div className="grid grid-cols-12 rounded-t-xl font-bold items-center justify-between bg-yellow-600 py-4">
                  <p className="col-span-2 text-center">#</p>
                  <p className="col-span-8 text-center">Question</p>
                  <p className="col-span-2 text-center">Guess</p>
                </div>
                {data.user_assignments[currentStudentIndex].user_solution.map(
                  (guess, index) => (
                    <div
                      onClick={() => setSelectedQuestion(index)}
                      className={`grid grid-cols-12 items-center justify-between ${
                        index === selectedQuestion
                          ? `bg-yellow-200 border-t-2 border-b-2 border-yellow-800`
                          : `bg-yellow-400`
                      } hover:bg-yellow-200 overflow-visible`}
                    >
                      <p className="col-span-2 text-center">{index + 1}</p>
                      <div className="col-span-8">
                        <TeX block>{questions[index]}</TeX>
                      </div>
                      <p
                        className={`col-span-2 text-center gap-4 ${
                          Number.parseInt(guess) === answers[index]
                            ? "flex"
                            : ""
                        }`}
                      >
                        {guess}{" "}
                        {Number.parseInt(guess) === answers[index] && (
                          <img
                            src={"/images/checkmark.png"}
                            alt="skill image"
                            className="w-8"
                          />
                        )}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="md:col-span-6 bg-green-400 rounded-t-xl">
                <p className="font-bold w-full text-xl py-2 px-4">Their Work</p>
                <div className="col-start-2 col-span-10 max-h-80 overflow-scroll">
                  <FreeDrawing
                    saveImage={() => {}}
                    lines={
                      data.user_assignments[currentStudentIndex]
                        .user_drawn_lines[selectedQuestion]
                    }
                    setLines={() => {}}
                    historyStep={
                      data.user_assignments[currentStudentIndex]
                        .user_drawn_lines[selectedQuestion].length
                    }
                    setHistoryStep={() => {}}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
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
