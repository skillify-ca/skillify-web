import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import SkillCard from "./SkillCard";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";

export default function Outline(props) {
  const [session, loading] = useSession();

  const skills = [
    {
      title: "Numbers",
      image: "/images/skills/counting.png",
      link: "/practice/addition",
      stars: 3,
    },
    {
      title: "Addition",
      image: "/images/skills/addition.png",
      link: "/practice/addition",
      stars: 1,
    },
 
  ];
  const lockedSkills = [
    "Subtraction",
    "Multiplication",
    "Division",
    "Mixed Operations",
    "Variables",
    "Estimation",
    "Logic",
    "Patterns",
    "Money",
    "Time",
    "Data",
    "Geometry",
    "Fractions",
    "Decimals",
    "Stats",
  ];
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  const data = apiData["outline"];
  var subtitle;
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <p className="text-xl text-center">Math Skill Tree</p>
        </div>
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            image={skill.image}
            link={skill.link}
            rating={skill.stars}
          />
        ))}
        <div className="col-span-2">
          <p className="text-xl">Locked</p>
        </div>
        {lockedSkills.map((skill) => (
          <div key={skill.title} className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
            <p>{skill}</p>
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
}
