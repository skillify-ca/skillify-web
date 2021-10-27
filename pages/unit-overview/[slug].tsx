import { useMutation, useQuery } from "@apollo/client";
import { Preload, OrbitControls, Stars } from "@react-three/drei";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/Button";
import { FETCH_UNIT_OVERVIEW } from "../../graphql/fetchUnitOverview";
import { getBadgeId } from "../api/badgeHelper";
import { EMOJI_MASTERY, getEmoji } from "../api/skill";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { studentProfileSelector } from "../../redux/studentProfileSlice";
import { FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT } from "../../graphql/fetchSkillDescriptionAndGrade";
import Head from "next/head";
import { useAuth } from "../../lib/authContext";

const Box = dynamic(() => import("../../components/stories/Box"));

const UnitOverviewPage = ({ slug, skillData }) => {
  const { user } = useAuth();

  const studentGrade = useSelector(studentProfileSelector);

  let gradeNum = (grade: string) => {
    switch (grade) {
      case "Grade 1":
        return 1;
      case "Grade 2":
        return 2;
      case "Grade 3":
        return 3;
      case "Grade 4":
        return 4;
      case "Grade 5":
        return 5;
      case "Grade 6":
        return 6;
    }
  };
  const getColourForAccuracy = (accuracy: any) => {
    if (accuracy >= 75) {
      return "text-green-500";
    } else if (accuracy >= 50) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const unitSkills = (skillData) => 
    skillData.skills.filter(
      (skill) =>
        skill.unit == slug && skill.grade == gradeNum(studentGrade.grade)

    );
  
  let { loading, error, data } = useQuery(FETCH_UNIT_OVERVIEW, {
    variables: {
      userId: user?.uid,
      skillId:
        skillData &&
        skillData.skills
          .filter(
            (skill) =>
              skill.unit == slug && skill.grade == gradeNum(studentGrade.grade)
          )
          .map((skill) => skill.id),
      badgeId: getBadgeId(slug, gradeNum(studentGrade.grade)),
    },
  });

  const getMaxAccuracy = (userQuizzes) => {
    let accuracyList = [];
    let maxAccuracy;

    accuracyList = userQuizzes.map((it) => it.accuracy);
    if (accuracyList.length == 0) {
      maxAccuracy = "Not Attempted";
    } else {
      maxAccuracy = Math.max(...accuracyList);
    }

    return maxAccuracy;
  };

  const isQuizLocked = () => {
    if (!loading && data && data.user_skills.length !== 0) {
      const unmasteredSkills = unitSkills(skillData)
        .map(
          (skill) =>
            data.user_skills.filter((it) => it.skill_id == skill.id)[0].emoji
        )
        .filter((emojiVal) => !emojiVal || emojiVal <= EMOJI_MASTERY);

      return unmasteredSkills.length > 0;
    }

    return false;
  };

  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 gap-8">
        <div className="flex flex-col gap-4 justify-center md:w-2/3">
          {isQuizLocked() && (
            <p className="text-4xl font-bold text-blue-900">QUIZ LOCKED</p>
          )}
          {isQuizLocked() && (
            <p className="text">
              To unlock the quiz you must be confident with all of this unit's
              skills. Practice questions from above and rate each skill
              confidence with <span className="text-3xl">😄</span>
            </p>
          )}
          {!isQuizLocked() && (
            <p className="text-4xl font-bold text-blue-900"> QUIZ TIME! </p>
          )}
          {!isQuizLocked() && (
            <p className="text">
              Take a quiz to test out your {slug} skills. Get at least a Level 4
              to unlock a badge. You can take this quiz as many times as you
              wish to perfect your skills. Good luck!
            </p>
          )}
          {!isQuizLocked() && (
            <div className="flex gap-8">
              <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
                <Link
                  href={`/quiz/${slug}?level=` + gradeNum(studentGrade.grade)}
                >
                  <Button
                    backgroundColor="blue"
                    textColor="white"
                    label="Quiz Yourself"
                  />
                </Link>
              </div>
            </div>
          )}
          {!isQuizLocked() && (
            <div className="flex items-center text-lg flex-row">
              <p className="text-xl font-bold text-blue-900"> Best Attempt: </p>
              <p
                className={`${getColourForAccuracy(
                  data && !loading && getMaxAccuracy(data.user_quizzes)
                )} p-4 text-2xl font-extrabold`}
              >
                {!loading && data && getMaxAccuracy(data.user_quizzes)}
                {data &&
                !loading &&
                getMaxAccuracy(data.user_quizzes) != "Not Attempted"
                  ? "%"
                  : ""}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 sm:w-1/2 rounded-2xl h-72">
          {isQuizLocked() && <img src="/images/lock.png" className="w-28" />}
          {!isQuizLocked() &&
            !loading &&
            data &&
            data.user_badges.map((badge) => {
              return badge.locked ? (
                <>
                  <img src="/images/lock.png" className="w-28" />
                  <p className="text-md -mt-4 flex items-center">
                    {"   "}
                    Badge: <b> &nbsp;Locked</b>{" "}
                  </p>
                </>
              ) : (
                <>
                  {/* TODO fix importing react three fiber into this project */}
                  {/* <Canvas camera={{ position: [10, 2, -10], fov: 60 }}>
                    <Preload all />
                    <group>
                      <Box
                        url={
                          badge.badge.image
                            ? badge.badge.image
                            : "/images/lock.png"
                        }
                      />
                      <OrbitControls
                        hasEventListener={false}
                        removeEventListener={() => {}}
                        addEventListener={() => {}}
                        dispatchEvent={() => {}}
                      />
                      <Stars />
                    </group>
                  </Canvas> */}
                  <img src={badge.badge.image} className="w-32" />
                  <p className="text-md -mt-4 flex items-center">
                    {"   "}
                    Badge: <b> &nbsp;Unlocked</b>{" "}
                  </p>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <Head>
        <title>
          {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} Overview
        </title>
      </Head>
      <Navbar />
      <div className="p-4 flex flex-col gap-8">
        <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-4">
          <p className="text-2xl text-white">
            {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} Overview
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl gap-8">
          <div className="gap-8 p-4 sm:p-8">
            <div className="flex flex-col gap-4">
              <p className="text-4xl font-bold text-blue-900 capitalize">
                {" "}
                PRACTICE TIME
              </p>
              <p className="text">
                Select a skill to practice questions. You can practice as many
                times as you wish. At the end, you'll be asked to rate your
                skill confidence.
              </p>
            </div>

            <div className="my-8">
              <div className="grid grid-cols-3 items-center">
                <p className="font-bold text-center">Skill</p>
                <p className="font-bold text-center">Skill Confidence</p>
                <p className="font-bold text-center"></p>
              </div>
              {skillData &&
                unitSkills(skillData).map((skill) => (
                  <Link href={`/practice/${skill.id}`}>
                    <div className="grid grid-cols-3 cursor-pointer items-center transform transition duration-200 hover:bg-blue-200">
                      {" "}
                      <p className="text p-1 text-center flex items-center justify-center  rounded-2xl">
                        {`I can ${skill.description}`}
                      </p>
                      <p className="text-5xl text-center">
                        {!loading &&
                          data &&
                          data.user_skills.length !== 0 &&
                          getEmoji(
                            data.user_skills.filter(
                              (it) => it.skill_id == skill.id
                            )[0].emoji
                          )}{" "}
                      </p>
                      <Button
                        label="Practice Now"
                        backgroundColor="blue"
                        textColor="white"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <img
            className="object-cover rounded-xl"
            alt="student-image"
            src="/images/practiceAdd.png"
          />
        </div>
        <div>{quizComponent}</div>
      </div>
    </div>
  );
};
export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT,
  });
  if (!data) {
    return {
      notFound: true,
    };
  }
  //return multiple descriptions,
  return { props: { skillData: data, slug: params.slug } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "numbers" } },
      { params: { slug: "addition" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default UnitOverviewPage;
