import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import { useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";

const Outline = (props) => {
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
      <div className="col-span-2 p-8 mb-8 bg-green-400 rounded-t-3xl">
        <p className="text-xl mb-4">Math Skill Tree</p>
        <div className="bg-green-300 p-8 rounded-full">
          <p className="text-sm">Practice different math-related skills</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-8">
        {userSkillsData.loading && <p>Loading ...</p>}
        {unlockedSkills.map((skill, index) => (
          <div key={skill.skill.title}>
            <SkillCard
              key={skill.skill.title}
              title={skill.skill.title}
              image={skill.skill.image}
              link={`/practice/${skill.skill.id}`}
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

      <div className="flex flex-col">
        <div className="col-span-2">
          <p className="text-xl">Experimental</p>
        </div>
        <Link href="/games/TicTacToe">
          <div className="gap-0  bg-purple-500 p-8 text-center">
            Tic Tac Toe
          </div>
        </Link>
        <Link href="/grade-nine">
          <div className="gap-0 ">
            <div className="p-8 bg-yellow-500 text-center">Grade 9 EQAO</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Outline;
