import React, { useRef, useEffect } from "react";
import { useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";

export default function Outline() {
  const skillsEndRef = useRef(null);

  const userSkillsData = useQuery(FETCH_USER_SKILLS);
  let skills = [];
  let unlockedSkills = [];
  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
    unlockedSkills = skills.filter((it) => it.locked == false);
  }

  return (
    <div>
      <div className="col-span-2 p-8 mb-8 bg-white shadow-lg rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">Math Skill Tree</p>
          <p className="flex justify-center items-center bg-purple-100 shadow-inner ring-blue-400 text-center rounded-full ring-8 w-16 h-16">
            {Math.floor((100 * unlockedSkills.length) / skills.length)}%
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
              link={`/quiz/${skill.skill.id}`}
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
