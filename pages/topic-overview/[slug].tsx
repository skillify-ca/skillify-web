import { useMutation, useQuery } from "@apollo/client";
import { session, useSession } from "next-auth/client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/stories/Button";
import { FETCH_USER_SKILL_BADGE } from "../../graphql/fetchBadgeForSkill";
import { FETCH_USER_BADGES } from "../../graphql/fetchUserBadge";
import { FETCH_USER_QUIZZES } from "../../graphql/fetchUserQuiz";
import { INIT_USER_BADGES } from "../../graphql/initUserBadges";
import { userId } from "../../graphql/utils/constants";
import { getSkillsForTopicGrade, Grade } from "../api/skill";

const TopicOverviewPage = ({ slug }) => {
  const [session, user] = useSession();
  const [grade, setGrade] = useState(Grade.GRADE_3);
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
    <div>
      <div className="flex gap-8">
        <p className="font-bold"> Select Grade:</p>
        <select
          value={grade}
          onChange={onGradeChange}
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
        </select>
      </div>
    </div>
  );

  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl"> Quiz Time!</p>
          <p className="text-xl">
            Take a quiz to test out your Addition Skills. The quiz will cover
            topics at your grade level so it's personalized for you! You can
            take the quiz as many times as you wish to perfect your skills. Good
            luck, you got this!
          </p>
          <div className="flex gap-8">
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={"/quiz/addition?level=" + gradeNum(grade)}>
                <Button
                  backgroundColor="blue"
                  textColor="white"
                  label="Quiz Yourself"
                />
              </Link>
            </div>
          </div>
          Best Attempt: {maxAccuracy && maxAccuracy}
        </div>
        <img
          className="w-full sm:w-1/2 object-cover"
          alt="student-image"
          src="https://knowledgeone.ca/wp-content/uploads/2018/11/online-readiness-01.jpg"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center">
        {levelComponent}
        {getSkillsForTopicGrade(slug, grade).map((skill) => (
          <Link href={`/skill-overview/${skill}`}>
            <p className="border-blue-400 border-4"> Skills: {skill} </p>
          </Link>
        ))}
        {quizComponent}
      </div>
      badge pic:{" "}
      {skillBadge.map((badge) => (
        <img src={badge.badge.image} className="w-32" />
      ))}
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
