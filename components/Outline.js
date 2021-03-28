import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import { useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";

const Outline = (props) => {
  const [session, loading] = useSession();
  const userSkillsData = useQuery(FETCH_USER_SKILLS);
  console.log("userSkillsData");
  console.log(userSkillsData);
  let skills = [];

  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <p className="text-xl text-center">Math Skill Tree</p>
        </div>
        {skills
          .filter((it) => it.locked == false)
          .map((skill) => (
            <SkillCard
              key={skill.skill.title}
              title={skill.skill.title}
              image={skill.skill.image}
              link={"/practice/addition"}
              rating={skill.stars}
            />
          ))}
        <div className="col-span-2">
          <p className="text-xl">Locked</p>
        </div>
        {skills
          .filter((it) => it.locked == true)
          .map((skill) => (
            <div
              key={skill.skill.title}
              className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center"
            >
              <p>{skill.skill.title}</p>
              <div className="w-16 h-16 m-4">
                <img src="/images/skills/lock.png" alt="" />
              </div>
            </div>
          ))}

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
