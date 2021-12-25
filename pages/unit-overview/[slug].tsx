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
import { EMOJI_MASTERY, getEmoji, SkillData } from "../api/skill";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { studentProfileSelector } from "../../redux/studentProfileSlice";
import { FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT } from "../../graphql/fetchSkillDescriptionAndGrade";
import Head from "next/head";
import { useAuth } from "../../lib/authContext";
import { FETCH_SKILLS_FOR_UNIT } from "../../graphql/fetchSkillsForUnit";
import Image from "next/image";
import { getUserEmojiValue } from "../api/practiceTracker/emojiHelper";
import SkillCard from "../../components/stories/SkillCard";

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

  type SkillDataResponse = {
    skills: SkillData[];
  };

  const skillsForCurrentGrade = (skillData: SkillDataResponse) =>
    skillData.skills.filter(
      (skill) => skill.grade == gradeNum(studentGrade.grade.title)
    );

  type UserSkillData = {
    skill_id: number;
    emoji: number | null;
  };
  type FetchUnitOverviewResponse = {
    user_skills: UserSkillData[];
    user_quizzes: any[];
    user_badges: any[];
  };
  let { loading, error, data } = useQuery<FetchUnitOverviewResponse>(
    FETCH_UNIT_OVERVIEW,
    {
      variables: {
        userId: user?.uid,
        skillId:
          skillData &&
          skillData.skills
            .filter(
              (skill) =>
                skill.unit == slug &&
                skill.grade == gradeNum(studentGrade.grade.title)
            )
            .map((skill) => skill.id),
        badgeId: getBadgeId(slug, gradeNum(studentGrade.grade.title)),
      },
    }
  );

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
      const unmasteredSkills = skillsForCurrentGrade(skillData)
        .map((skill) => getUserEmojiValue(data, skill.id))
        .filter((emojiVal) => !emojiVal || emojiVal <= EMOJI_MASTERY);

      return unmasteredSkills.length > 0;
    }

    return false;
  };

  const quizComponent = (
    <div>
      <div className="grid grid-cols-12 bg-white shadow-lg rounded-xl p-8 space-y-8">
        <div className="col-span-8 flex flex-col space-y-4 justify-center">
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
            <div className="flex space-y-8">
              <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
                <Link
                  href={`/quiz/${slug}?level=` + gradeNum(studentGrade.grade.title)}
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
        <div className="col-span-4 m-4 flex flex-col space-y-8 justify-center items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 rounded-2xl h-72">
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
                  {/* <Canvas camera={{ position: [10, 2, -10], fov: 60 }}> */}
                    {/* <Preload all /> */}
                    {/* <group> 
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
                     </group> */}
                  {/* </Canvas> */}
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
      <div className="p-4 flex flex-col space-y-8">
        <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-4">
          <p className="text-2xl text-white">
            {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} Overview
          </p>
        </div>

        <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl space-y-8">
          <div className="space-y-8 p-4 sm:p-8">
            <div className="flex flex-col space-y-4">
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
          </div>
          <img
            className="object-cover rounded-xl max-h-80"
            alt="student-image"
            src="/images/practiceAdd.png"
          />
        </div>
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillData &&
            skillsForCurrentGrade(skillData).map((skill) => (
              <SkillCard loading={loading} data={data} skill={skill} />
            ))}
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
    query: FETCH_SKILLS_FOR_UNIT,
    variables: {
      unit: params.slug,
    },
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
      { params: { slug: "finance" } },
    ],
    fallback: true,
  };
}

export default UnitOverviewPage;
