import React, { useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { PracticeTopic } from "./PracticeTopic";
import { signIn, useSession } from "next-auth/client";
import { userId } from "../graphql/utils/constants";
import Card from "./stories/Card";
import { Button } from "./stories/Button";
import ProgressRing from "./stories/ProgressRing";
import { lockedTopics, unlockedTopics } from "../pages/api/topics";
import LandingPage from "./stories/LandingPage";
import { INIT_USER_SKILLS } from "../graphql/initUserSkills";
import { FETCH_USER_EMOJIS } from "../graphql/fetchUserEmojis";
export default function Outline() {
  const [session, loading] = useSession();

  const getOverallProgress = () => {
    return 0; // TODO calculate progress based off unlocked badges / total badges
  };
  const [initUserSkillsData, initUserSkillsMutation] = useMutation(
    INIT_USER_SKILLS,
    {
      variables: {
        userId: userId(session),
      },
      refetchQueries: [
        {
          query: FETCH_USER_EMOJIS,
          variables: {
            userId: userId(session),
          },
        },
      ],
    }
  );
  let userSkillsData = useQuery(FETCH_USER_EMOJIS, {
    variables: {
      userId: userId(session),
    },
  });
  let userSkills = [];
  if (userSkillsData.data) {
    userSkills = userSkillsData.data.user_skills;
    if (userSkills.length == 0) {
      if (!initUserSkillsMutation.called) {
        initUserSkillsData();
      }
    }
  }

  const loggedInComponent = (
    <div className="max-w-screen-lg">
      <div className="flex justify-center mb-8 mt-4">
        <Card size="large">
          <div className="flex flex-col gap-8 items-center">
            <p className="text-xl font-bold font-sans">Math Knowledge Tree</p>
            <p className="text-sm mb-4">
              Practice different math-related skills
            </p>
            <ProgressRing percentage={getOverallProgress()} radius={24} />
          </div>
        </Card>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
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
      <div className="col-span-2 my-8">
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

  const loggedOutComponent = <LandingPage />;

  return (
    <div className="flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-4 mx-auto">
      {session || loading ? loggedInComponent : loggedOutComponent}
    </div>
  );
}
