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
import { getSkillsForTopicGrade, Grade, SkillDescription } from "../api/skill";

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
      <span className="font-bold m-4"> Select Level:</span>
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
  );

  const skillComponent = (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8 m-4 w-1/2 h-72">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          {getSkillsForTopicGrade(slug, grade).map((skill) => (
            <Link href={`/skill-overview/${skill}`}>
              <p className="border-blue-400 border-4">
                {" "}
                {SkillDescription(skill)}{" "}
              </p>
            </Link>
          ))}
        </div>
        <div className="">
          {skillBadge.map((badge) => {
            return badge.locked ? (
              <div className="">
                <img src="/images/lockedPic.png" className="w-32" />
              </div>
            ) : (
              <img src={badge.badge.image} className="w-32" />
            );
          })}
        </div>
      </div>
    </div>
  );
  const quizComponent = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl p-4 gap-8 m-4">
        <div className="flex flex-col w-full sm:w-1/2 gap-8">
          <p className="text-5xl"> Quiz Time!</p>
          <p className="text-xl">
            Take a quiz to test out your {slug} skills. The quiz will cover
            topics at your grade level so it's personalized for you! You can
            take the quiz as many times as you wish to perfect your skills. Good
            luck, you got this!
          </p>
          <div className="flex gap-8">
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={`/quiz/${slug}?level= ` + gradeNum(grade)}>
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
      <div className="bg-blue-500 heropattern-architect-blue-400 rounded-xl shadow-lg flex-col text-center p-8 m-4">
        <p className="text-5xl text-white mb-4">Addition Topic Overview</p>
        <p className="text-xl text-white">
          Addition is taking two or more numbers and adding them together! Watch
          the videos on the explore tab to learn more and do the practice
          questions to apply your knowledge. Once you feel confident in your
          addition skills, take the quiz to evaluate your understanding!
        </p>
      </div>
      {levelComponent}
      {skillComponent}
      {quizComponent}
    </div>
  );
};

//   /* <div className="p-4 flex flex-col items-center justify-center">
//         {levelComponent}
//         <div className="">
//           {skillBadge.map((badge) => {
//             return badge.locked ? (
//               <div className="">
//                 <img src="/images/lockedPic.png" className="w-32" />
//               </div>
//             ) : (
//               <img src={badge.badge.image} className="w-32" />
//             );
//           })}
//         </div>
//         {getSkillsForTopicGrade(slug, grade).map((skill) => (
//           <Link href={`/skill-overview/${skill}`}>
//             <p className="border-blue-400 border-4">
//               {" "}
//               {SkillDescription(skill)}{" "}
//             </p>
//           </Link>
//         ))}
//         {quizComponent}
//       </div> */

/* <div className="">
{skillBadge.map((badge) => {
  return badge.locked ? (
    <div className="">
      <img src="/images/lockedPic.png" className="w-32" />
    </div>
  ) : (
    <img src={badge.badge.image} className="w-32" />
  );
})}
</div> */

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
