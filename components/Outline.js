import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import SkillCard from "./SkillCard";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";

export default function Outline(props) {
  const [session, loading] = useSession();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [levelSelectOpen, setIsLevelSelectOpen] = React.useState(false);
  const [level, setLevel] = React.useState("2");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setModalTitle("");
  }
  function onLevelSelect(e) {
    setLevel(e.target.value);
  }

  function onSkillSelect() {
    setModalTitle();
    openModal();
  }
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  const data = apiData["outline"];
  var subtitle;
  return (
    <div>
      <div className="text-xl text-center p-4">Math Skill Tree</div>
      <div className="grid grid-cols-2 gap-4">
        <SkillCard title="Addition" image="/images/skills/addition.png" link="/practice/addition"/>
        <SkillCard title="Subtraction" image="/images/skills/subtraction.png" link="/practice/subtraction"/>
        <SkillCard title="Multiplication" image="/images/skills/multiplication.png" link="/practice/multiplication"/>
        <SkillCard title="Division" image="/images/skills/division.png" link="/practice/addition"/>
        <SkillCard title="Fractions" image="/images/skills/fractions.jpeg" link="/practice/addition"/>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Money</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Mixed Operations</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Shapes</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Angles</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Transformations</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Graphs</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Stats</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Measurement</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Patterns</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Time</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Negatives</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Variables</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Decimals</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Percents</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Ratios</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Exponents</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Functions</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Number Theory</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Pythagorean Theorem</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Functions</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
        <div className="gap-0 flex flex-col items-center  bg-gray-400 p-8 text-center">
          <p>Polynomials</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/lock.png" alt="" />
          </div>
        </div>
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
