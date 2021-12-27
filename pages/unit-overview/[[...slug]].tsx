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
import { useDispatch, useSelector } from "react-redux";
import { studentProfileSelector } from "../../redux/studentProfileSlice";
import { FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT } from "../../graphql/fetchSkillDescriptionAndGrade";
import Head from "next/head";
import { useAuth } from "../../lib/authContext";
import { FETCH_SKILLS_FOR_UNIT } from "../../graphql/fetchSkillsForUnit";
import Image from "next/image";
import { getUserEmojiValue } from "../api/practiceTracker/emojiHelper";
import SkillCard from "../../components/stories/SkillCard";
import QuizPreview from "../../components/practiceTracker/unitOverview/QuizPreview";
import PracticePreview from "../../components/practiceTracker/unitOverview/PracticePreview";
import ExplorePreview from "../../components/practiceTracker/unitOverview/ExplorePreview";

const Box = dynamic(() => import("../../components/stories/Box"));

const UnitOverviewPage = ({ unitTitle, skillData, level }) => {
  const { user } = useAuth();

  type SkillDataResponse = {
    skills: SkillData[];
  };

  const skillsForCurrentGrade = (skillData: SkillDataResponse) =>
    skillData.skills.filter(
      (skill) => skill.grade == level
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
                skill.unit == unitTitle &&
                skill.grade == level
            )
            .map((skill) => skill.id),
        badgeId: getBadgeId(unitTitle, level),
      },
    }
  );

  console.log(getBadgeId(unitTitle, level));
  

  const isQuizLocked = () => {
    if (!loading && data && data.user_skills.length !== 0) {
      const unmasteredSkills = skillsForCurrentGrade(skillData)
        .map((skill) => getUserEmojiValue(data, skill.id))
        .filter((emojiVal) => !emojiVal || emojiVal <= EMOJI_MASTERY);

      return unmasteredSkills.length > 0;
    }

    return false;
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-blue-100 ">
      <Head>
        <title>
          {unitTitle && unitTitle.charAt(0).toUpperCase() + unitTitle.slice(1)} Overview
        </title>
      </Head>
      <Navbar />
      <div className="p-4 flex flex-col space-y-8">
        <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-4">
          <p className="text-2xl text-white">
            {unitTitle && unitTitle.charAt(0).toUpperCase() + unitTitle.slice(1)} Overview
          </p>
        </div>
        <ExplorePreview unitTitle={unitTitle} level={level} />
        {skillData && <PracticePreview loading={loading} data={data} skills={skillsForCurrentGrade(skillData)} />}
        <div>
          <QuizPreview isQuizLocked={isQuizLocked()} unitTitle={unitTitle} loading={loading} data={data} /></div>
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
      unit: params.slug[0],
    },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }
  
  const level = params.slug.length > 1 ? Number.parseInt(params.slug[1]) : 1
  //return multiple descriptions,
  return { props: { skillData: data, unitTitle: params.slug[0], level } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["numbers", "1"] } },
      { params: { slug: ["addition", "1"] } },
      { params: { slug: ["subtraction", "1"] } },
      { params: { slug: ["multiplication", "1"] } },
      { params: { slug: ["division", "1"] } },
      { params: { slug: ["finance", "1"] } },
    ],
    fallback: true,
  };
}

export default UnitOverviewPage;
