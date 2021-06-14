import React, { useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { PracticeTopic } from "./PracticeTopic";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import { signIn, useSession } from "next-auth/client";
import { INIT_USER_SKILLS } from "../graphql/initUserSkills";
import { userId } from "../graphql/utils/constants";
import Card from "./stories/Card";
import { Button } from "./stories/Button";
import ProgressRing from "./stories/ProgressRing";
import { lockedTopics, unlockedTopics } from "../pages/api/topics";
import LandingPage from "./stories/LandingPage";
export default function Outline() {
  const [session, loading] = useSession();

  const userSkillsData = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: userId(session),
    },
  });
  const [initUserSkills, { data, error }] = useMutation(INIT_USER_SKILLS, {
    refetchQueries: [
      {
        query: FETCH_USER_SKILLS,
        variables: {
          userId: userId(session),
        },
      },
    ], // whenever we update a skill, we should refetch
  });

  useEffect(() => {
    // Don't run if the session hasn't loaded yet
    if (userSkillsData.data && userId(session) != "-1") {
      if (false) {
        // TODO new user doesn't have any unlocked badges. We should initialize them in GraphQL
        initUserSkills({
          variables: {
            userId: userId(session),
          },
        });
      }
    }
  }, [userSkillsData, session]);

  const getOverallProgress = () => {
    return 0; // TODO calculate progress based off unlocked badges / total badges
  };

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
        {userSkillsData.loading && <p>Loading ...</p>}
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
