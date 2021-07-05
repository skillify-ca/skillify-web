import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import React, { useRef } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import { FETCH_BADGE } from "../../graphql/fetchBadge";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { userId } from "../../graphql/utils/constants";
import { Canvas, extend, useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { Preload, Stars, useTexture } from "@react-three/drei";
import dynamic from "next/dynamic";
import { OrbitControls } from '@react-three/drei'

const Box = dynamic(() => import('../../components/stories/Box'))

const BadgeDetailsPage = ({ slug }) => {
  const [session] = useSession();
  const badgeDetailResults = useQuery(FETCH_BADGE, {
    variables: {
      badgeId: slug,
    },
  });

  let badgeDetail;
  if (badgeDetailResults.data) {
    badgeDetail = badgeDetailResults.data.badges[0];
  }
  const userQuizzesQuery = useQuery(FETCH_USER_QUIZZES, {
    variables: {
      userId: userId(session),
      badgeId: slug,
    },
  });
  let userQuizzes;
  let accuracyList = [];
  let maxAccuracy;
  if (userQuizzesQuery.data) {
    userQuizzes = userQuizzesQuery.data.user_quizzes;
    accuracyList = userQuizzes.map((it) => it.accuracy);
    if (accuracyList.length == 0) {
      maxAccuracy = "Not Attempted";
    } else {
      maxAccuracy = Math.max(...accuracyList) + "%";
    }
  }
    
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en")
  }

  return (
    <div>
      <DiagnosticNavbar />
      <div className="heropattern-hideout-blue-100 bg-gray-100 h-screen p-4">
        {badgeDetail && (
          <div className="flex flex-col justify-center md:w-1/2 ml-auto mr-auto bg-white p-8 rounded-3xl">
            <p className="text-center text-3xl mb-4 font-semibold">
              {" "}
              {badgeDetail.title}{" "}
            </p>
            <div className="bg-blue-900 h-64">
            <Canvas camera={{ position: [10, 2, -10], fov: 60 }}>
            <Preload all />
            <group>
              <Box url={badgeDetail ? badgeDetail.image : "/images/lock.png"} />
              <OrbitControls hasEventListener={false} removeEventListener={() => {}} addEventListener={() => {}} dispatchEvent={() => {}} />
              <Stars />
            </group>
          </Canvas>
          </div>
            <p className="text-center mt-4"> {badgeDetail.description} </p>
            <p className="text-center mt-4 font-bold">
              Your Best Attempt is: {maxAccuracy}
            </p>
          </div>
        )}

        <div className="flex flex-col justify-center md:w-1/2 ml-auto mr-auto mt-8 bg-white p-8 rounded-3xl">
          <p className="text-center text-3xl mb-4 font-semibold">
            {" "}
            Quiz Attempts{" "}
          </p>
          <table className="border-b-2 text-center">
            <tr className="border-b-2">
              <th>Attempt</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
            {userQuizzes &&
              userQuizzes.map(
                (it) =>
                  it && (
                    <tr>
                      <td>{userQuizzes.indexOf(it) + 1}</td>
                      <td>{it.accuracy}</td>
                      <td>{formatDate(it.createdAt)}</td>
                    </tr>
                  )
              )}
          </table>
        </div>
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
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
      { params: { slug: "4" } },
      { params: { slug: "5" } },
      { params: { slug: "6" } },
      { params: { slug: "7" } },
      { params: { slug: "8" } },
      { params: { slug: "9" } },
      { params: { slug: "10" } },
      { params: { slug: "11" } },
      { params: { slug: "12" } },
    ],
    fallback: true,
  };
}

export default BadgeDetailsPage;
