import React from "react";
import { PracticeTopic } from "./PracticeTopic";
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

  const loggedInComponent = (
    <div className="max-w-screen-lg">
      <div className="flex justify-center mb-8 mt-4">
        <Card size="large">
          <div className="flex flex-col gap-8 items-center">
            <p className="text-xl font-bold font-sans">Math Knowledge Tree</p>
            <p className="text-sm mb-4">
              Practice skills to increase your math confidence. Then ace your
              quizzes to unlock badges!
            </p>
            <ProgressRing percentage={progress()} radius={24} />
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-8">
        {unlockedTopics.map((topic, index) => (
          <div key={topic.title}>
            <PracticeTopic
              key={topic.title}
              title={topic.title}
              image={topic.image}
              link={`${topic.title.toLowerCase()}`}
              rating={0}
            />
          </div>
        ))}
      </div>
      <div className="col-span-4 my-8">
        <p className="text-xl text-center font-bold">{"Locked"}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {lockedTopics.map((topic) => (
          <div key={topic}>
            <PracticeTopic key={topic} title={topic} disabled={true} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-4 mx-auto">
      {loggedInComponent}
    </div>
  );
}
