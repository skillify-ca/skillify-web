import { useMutation, useQuery } from "@apollo/client";
import { Preload, OrbitControls, Stars } from "@react-three/drei";
import { session, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/Button";
import { FETCH_TOPIC_OVERVIEW } from "../../graphql/fetchTopicOverview";
import { userId } from "../../graphql/utils/constants";
import { getBadgeId } from "../api/badgeHelper";
import {
  getEmoji,
  getSkillId,
  getSkillsForTopicGrade,
  Grade,
  Skill,
  SkillDescription,
} from "../api/skill";

const Box = dynamic(() => import("../../components/stories/Box"));

const TopicOverviewPage = ({ slug }) => {
  const [session, user] = useSession();
  const [grade, setGrade] = useState(Grade.GRADE_1);
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
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

  let { loading, error, data } = useQuery(FETCH_TOPIC_OVERVIEW, {
    variables: {
      userId: userId(session),
      badgeId: getBadgeId(slug, gradeNum(grade)),
      skillId: getSkillsForTopicGrade(slug, grade).map((it) => getSkillId(it)),
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

  const levelComponent = (
    <div className="flex flex-row">
      <p className="flex items-center text-xl text-blue-900">
        {" "}
        Select a grade:{" "}
      </p>

      {slug == "numbers" ? (
        <select
          value={grade}
          onChange={onGradeChange}
          className="ml-4 w-56 text-sm text-blue-900 outline-none focus:outline-none border border-solid border-black rounded-xl bg-transparent flex items-center py-2"
        >
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
        </select>
      ) : (
        <select
          value={grade}
          onChange={onGradeChange}
          className="ml-4 w-56 text-sm text-blue-900 outline-none focus:outline-none border border-solid border-black rounded-xl bg-transparent flex items-center py-2"
        >
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
          <option>Grade 4</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
        </select>
      )}
    </div>
  );
  const skillComponent = (
    <div className="flex flex-col gap-8">
      {getSkillsForTopicGrade(slug, grade).map((skill) => (
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 gap-8">
          <div className="">
            <div className="flex flex-col gap-8">
              <img src="/images/learnPic.png" className="w-96" />
              <p className="text-2xl text-center font-bold flex items-center justify-center bg-blue-200 rounded-2xl">
                {" "}
                {SkillDescription(skill)}{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-1/2 gap-8 justify-center">
            <p className="text-4xl font-bold text-blue-900"> LEARN </p>
            <p className="text-xl">
              Learn to <b> {SkillDescription(skill).toLowerCase()}</b> by
              watching engaging videos and strengthen your knowledge with
              related math questions in Math Champ's Practice Tracker!
            </p>
            <div className="flex gap-8">
              <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
                <Link href={`/skill-overview/${skill}`}>
                  <Button
                    backgroundColor="blue"
                    textColor="white"
                    label="Go To Lesson"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-md font-bold text-blue-900 flex flex-col items-center">
            {" "}
            Confidence:{" "}
            <p className="text-6xl">
              {!loading &&
                data &&
                data.user_skills.length !== 0 &&
                getEmoji(
                  data.user_skills.filter((it) => it.skill_id == skill)[0].emoji
                )}{" "}
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 gap-8 mt-8">
        <div className="flex flex-col gap-4 justify-center md:w-2/3">
          <p className="text-4xl font-bold text-blue-900"> QUIZ TIME! </p>
          <p className="text-xl">
            Take a quiz to test out your {slug} skills. The quiz will cover
            topics at your grade level meaning it's personalized for you! You
            can take this quiz as many times as you wish to perfect your skills.
            Good luck!
          </p>
          <div className="flex gap-8">
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={`/quiz/${slug}?level=` + gradeNum(grade)}>
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Quiz Yourself"
                />
              </Link>
            </div>
          </div>
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
        </div>
        <div className="flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 sm:w-1/2 rounded-2xl h-72">
          {!loading &&
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
                  <Canvas camera={{ position: [10, 2, -10], fov: 60 }}>
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
                  </Canvas>
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
      <Navbar />
      <div className="p-4 flex flex-col gap-8">
        <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8">
          <p className="text-5xl text-white mb-4">
            {" "}
            {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} Topic
            Overview
          </p>
          <p className="text-lg text-white">
            Watch the videos on the lesson page to learn more and do the
            practice questions to apply your knowledge. Once you feel confident
            in your {slug} skills, take the quiz to evaluate your understanding!
          </p>
        </div>
        <div className="">{levelComponent}</div>
        <div>
          {skillComponent}
          {quizComponent}
        </div>
      </div>
    </div>
  );
};

/*
export async function getStaticPaths() {
  const ids = Array.from(Array(100).keys()).map((element) => {
    return { params: { slug: element.toString() } };
  });

  return {
    paths: ids, //can i use a map function here?? } } // See the "paths" section below

    fallback: true,
  };
}
/*
export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const videos = getVideosForSkill(Number.parseInt(params.slug));

  const { data } = await client.query({
    query: FETCH_SKILL_DESCRIPTION,
    variables: {
      skillId: params.slug,i
      //how did you know its slug??
    },
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { description: data, videos: videos } };
}
*/
export async function getStaticProps({ params }) {
  const skillIds: number[] = getSkillsForTopicGrade(params.slug, Grade.GRADE_1);

  return {
    props: {
      slug: params.slug,
      skillIds: skillIds,
    },
  };
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

export default TopicOverviewPage;
