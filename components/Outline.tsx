import React from "react";
import { UnitCard } from "./UnitCard";
import { useSession } from "next-auth/client";
import { userId } from "../graphql/utils/constants";
import Card from "./ui/Card";
import ProgressRing from "./ui/ProgressRing";
import { lockedTopics, unlockedTopics } from "../pages/api/topics";
import { EMOJI_MASTERY } from "../pages/api/skill";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { useQuery } from "@apollo/client";
import { Session } from "next-auth";

interface OutlineProps {
  session: Session;
}

export default function Outline({ session }: OutlineProps) {
  let { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: userId(session),
    },
  });

  const progress = () => {
    if (
      !loading &&
      data &&
      data.user_badges &&
      data.user_skills &&
      data.user_badges.length > 0 &&
      data.user_skills.length > 0
    ) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      const masteredSkills = data.user_skills.filter(
        (it) => it.emoji > EMOJI_MASTERY
      );

      return Math.round(
        ((unlockedBadges.length + masteredSkills.length) * 100) /
          (data.user_badges.length + data.user_skills.length)
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="max-w-screen-lg flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-4 mx-auto">
      <div className="grid grid-cols-2 gap-8 bg-blue-50 rounded-lg shadow-lg p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-2xl"> Knowledge Tree </p>

          <p className="">
            {" "}
            Practice skills to increase your math confidence and ace the quizzes
            to unlock badges!{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 items-end pr-8">
          <p className="font-bold text-lg"> Overall Progress</p>
          <div className="p-4">
            <ProgressRing percentage={progress()} radius={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center gap-8 items-center">
        {unlockedTopics.map((topic, index) => (
          <div key={topic.title}>
            <UnitCard
              key={topic.title}
              title={topic.title}
              image={topic.image}
              link={`${topic.title.toLowerCase()}`}
              rating={0}
            />
          </div>
        ))}
        {lockedTopics.map((topic) => (
          <div key={topic}>
            <UnitCard key={topic} title={topic} disabled={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
