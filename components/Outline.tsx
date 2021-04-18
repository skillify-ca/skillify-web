import React, { useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import { signIn, useSession } from "next-auth/client";
import { INIT_USER_SKILLS } from "../graphql/initUserSkills";
import { userId } from "../graphql/utils/constants";
import Card from "./stories/Card";
export default function Outline() {
  const skillsEndRef = useRef(null);
  const [session, loading] = useSession();
  const [skills, setSkills] = React.useState([]);
  const [unlockedSkills, setUnlockedSkills] = React.useState([]);

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
      setSkills(userSkillsData.data.user_skills);
      if (userSkillsData.data.user_skills.length > 0) {
        const filteredSkills = userSkillsData.data.user_skills.filter(
          (it) => it.locked == false
        );
        setUnlockedSkills(filteredSkills);
      } else {
        initUserSkills({
          variables: {
            userId: userId(session),
          },
        });
      }
    }
  }, [userSkillsData, session]);

  const getOverallProgress = () => {
    if (skills && skills.length > 0) {
      return Math.floor((100 * (unlockedSkills.length - 1)) / skills.length);
    }
    return 0;
  };

  return (
    <div className="flex flex-col gap-8 justify-between w-full col-span-2 items-center mb-4 p-16 mx-auto">
      <Card>
        <div className="flex flex-col gap-8 items-center">
          <p className="text-xl">Math Skill Tree</p>
          <p className="text-sm">Practice different math-related skills</p>
          <p className="flex justify-center items-center bg-purple-100 shadow-inner ring-blue-400 text-center rounded-full ring-8 w-16 h-16">
            {getOverallProgress()}%
          </p>
        </div>
      </Card>
      <div className="max-w-screen-lg">
        <div className="flex flex-wrap justify-center gap-8">
          {userSkillsData.loading && <p>Loading ...</p>}
          {unlockedSkills.map((skill, index) => (
            <div
              key={skill.skill.title}
              className={
                index == unlockedSkills.length - 1 ? "animate-bounce" : ""
              }
            >
              <SkillCard
                key={skill.skill.title}
                title={skill.skill.title}
                image={skill.skill.image}
                link={`/quiz/${skill.skill.title}`}
                rating={skill.stars}
              />
            </div>
          ))}
        </div>
        <div className="col-span-2 my-8">
          <p className="text-xl text-center">{session ? "Locked" : "Please log in"}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skills
            .filter((it) => it.locked == true)
            .map((skill, index) => (
              <div key={skill.skill.title}>
                <SkillCard
                  key={skill.skill.title}
                  title={skill.skill.title}
                  disabled={true}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
