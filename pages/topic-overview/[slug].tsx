import { useMutation, useQuery } from "@apollo/client";
import { session, useSession } from "next-auth/client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/stories/Button";
import { FETCH_USER_SKILL_BADGE } from "../../graphql/fetchBadgeForSkill";
import { FETCH_USER_BADGES } from "../../graphql/fetchUserBadge";
import { FETCH_USER_EMOJI } from "../../graphql/fetchUserEmoji";
import { FETCH_USER_EMOJIS } from "../../graphql/fetchUserEmojis";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { INIT_USER_BADGES } from "../../graphql/initUserBadges";
import { userId } from "../../graphql/utils/constants";
import {
  getSkillsForTopicGrade,
  Grade,
  Skill,
  SkillDescription,
} from "../api/skill";

const TopicOverviewPage = ({ slug }) => {
  const [session, user] = useSession();
  const [grade, setGrade] = useState(Grade.GRADE_1);
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
  let skill;
  let getSkillId = (skill: Skill) => {
    //Note: The skill Ids are determined based of the values save in the skills table with graph
    switch (skill) {
      case Skill.ADDITION_SINGLE:
        return 1;
      case Skill.ADDITION_DOUBLE:
        return 2;
      case Skill.ADDITION_TRIPLE:
        return 3;
      case Skill.ADDITION_PROPERTIES:
        return 4;
      case Skill.SUBTRACTION_SINGLE:
        return 34;
      case Skill.SUBTRACTION_DOUBLE:
        return 35;
      case Skill.SUBTRACTION_TRIPLE:
        return 36;
      case Skill.EQUAL_GROUP_10_ITEMS:
        return 37;
      case Skill.MULTIPLICATION_5:
        return 38;
      case Skill.MULTIPLICATION_10:
        return 39;

      case Skill.EQUAL_SHARING_8_ITEMS:
        return 40;
      case Skill.DIVIDE_12_EQUALLY:
        return 41;
      case Skill.DIVIDE_100:
        return 42;
    }
  };
  let gradeNum = (grade: string) => {
    switch (grade) {
      case "Grade 1":
        return 1;
      case "Grade 2":
        return 2;
      case "Grade 3":
        return 3;
    }
  };
  let getEmoji = (emojiNum: number | null) => {
    if (emojiNum == null) {
      return "❓";
    } else if (emojiNum >= 0 && emojiNum <= 33) {
      return "😔";
    } else if (emojiNum >= 34 && emojiNum <= 66) {
      return "😐";
    } else {
      return "😄";
    }
  };

  const userQuizzesQuery = useQuery(FETCH_USER_QUIZZES, {
    variables: {
      userId: userId(session),
      badgeId: gradeNum(grade),
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
  const userSkillsQuery = useQuery(FETCH_USER_EMOJIS, {
    variables: {
      userId: userId(session),
      skillId: getSkillsForTopicGrade(slug, grade).map((it) => getSkillId(it)),
    },
  });
  let userSkills = [];
  if (userSkillsQuery.data) {
    userSkills = userSkillsQuery.data.user_skills;
    // console.log(
    //   "hello",
    //   userSkills.filter((it) => it.skillId == getSkillId(skill))[0].emoji
    // );
  }

  const skillBadgeQuery = useQuery(FETCH_USER_SKILL_BADGE, {
    variables: {
      userId: userId(session),
      badgeId: gradeNum(grade),
    },
  });

  let skillBadge = [];
  if (skillBadgeQuery.data) {
    skillBadge = skillBadgeQuery.data.user_badges;
  }

  const levelComponent = (
    <div className="flex flex-row">
      <p className="flex items-center text-xl text-blue-900">
        {" "}
        Select a grade:{" "}
      </p>
      <select
        value={grade}
        onChange={onGradeChange}
        className="ml-4 w-56 text-sm text-blue-900 outline-none focus:outline-none border border-solid border-black rounded-xl bg-transparent flex items-center py-2"
      >
        <option>Grade 1</option>
        <option>Grade 2</option>
        <option>Grade 3</option>
      </select>
    </div>
  );
  const skillComponent = (
    <div>
      {getSkillsForTopicGrade(slug, grade).map((skill) => (
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 m-12 mt-8 mb-4">
          <div className="mr-28">
            <div className="flex flex-col gap-4">
              <img src="/images/learnPic.png" className="w-96" />
              <p className="text-2xl font-bold flex items-center justify-center bg-blue-200 rounded-2xl">
                {" "}
                {SkillDescription(skill)}{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-1/2 gap-4 justify-center mr-12">
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
              {" "}
              {userSkills.length !== 0 &&
                getEmoji(
                  userSkills.filter((it) => it.skill_id == getSkillId(skill))[0]
                    .emoji
                )}{" "}
            </p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-8 gap-8 m-12 mt-8">
        <div className="flex flex-col gap-4 justify-center w-2/3">
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
          <p className="flex items-center text-lg">
            {" "}
            Best Attempt: {maxAccuracy && maxAccuracy}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 w-1/2 rounded-2xl h-72">
          {skillBadge.map((badge) => {
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
                <img src={badge.badge.image} className="w-40" />
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
      <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8 m-12 mt-8">
        <p className="text-5xl text-white mb-4">
          {" "}
          {slug && slug.charAt(0).toUpperCase() + slug.slice(1)} Topic Overview
        </p>
        <p className="text-lg text-white">
          Watch the videos on the lesson page to learn more and do the practice
          questions to apply your knowledge. Once you feel confident in your{" "}
          {slug} skills, take the quiz to evaluate your understanding!
        </p>
      </div>
      <div className="ml-12">{levelComponent}</div>
      <div>
        {skillComponent}
        {quizComponent}
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
      { params: { slug: "addition" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default TopicOverviewPage;
