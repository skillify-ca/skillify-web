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
                skill.grade == studentGrade.grade.ordinal
            )
            .map((skill) => skill.id),
        badgeId: getBadgeId(slug, gradeNum(studentGrade.grade.title)),
      },
    }
  );

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
        <ExplorePreview unitTitle={slug} level={studentGrade.grade.ordinal} />
        {skillData && <PracticePreview loading={loading} data={data} skills={skillsForCurrentGrade(skillData)} />}
        <div>
          <QuizPreview isQuizLocked={isQuizLocked()} unitTitle={slug} loading={loading} data={data} /></div>
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
