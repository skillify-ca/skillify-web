import React, { useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import { signIn, useSession } from "next-auth/client";
import { INIT_USER_SKILLS } from "../graphql/initUserSkills";
export default function Outline() {
  const skillsEndRef = useRef(null);
  const [session, loading] = useSession();
  const [skills, setSkills] = React.useState([]);
  const [unlockedSkills, setUnlockedSkills] = React.useState([]);

  const userSkillsData = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: "2",
    },
  });
  const [initUserSkills, { data, error }] = useMutation(INIT_USER_SKILLS, {
    refetchQueries: [
      {
        query: FETCH_USER_SKILLS,
        variables: {
          userId: "2",
        },
      },
    ], // whenever we update a skill, we should refetch
  });

  useEffect(() => {
    if (userSkillsData.data) {
      setSkills(userSkillsData.data.user_skills);
      if (userSkillsData.data.user_skills.length > 0) {
        const filteredSkills = userSkillsData.data.user_skills.filter(
          (it) => it.locked == false
        );
        setUnlockedSkills(filteredSkills);
      } else {
        initUserSkills({
          variables: {
            userId: "2",
          },
        });
      }
    }
  }, [userSkillsData]);

  return (
    <div>
      <div className="col-span-2 p-8 mb-8 bg-white shadow-lg rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">Math Skill Tree</p>
          <p className="flex justify-center items-center bg-purple-100 shadow-inner ring-blue-400 text-center rounded-full ring-8 w-16 h-16">
            {Math.floor((100 * (unlockedSkills.length - 1)) / skills.length)}%
          </p>
        </div>
        <p className="text-sm">Practice different math-related skills</p>
      </div>

      <div className="flex flex-wrap justify-around gap-8">
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
        <p className="text-xl text-center">Locked</p>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
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
  );
}
