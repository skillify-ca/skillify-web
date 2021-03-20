import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import Navbar from "./Navbar";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";

Modal.setAppElement("#root");

export default function Outline(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "16px",
    },
  };

  const [session, loading] = useSession();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
        <div
          onClick={openModal}
          id="root"
          className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center"
        >
          <p>Comparison</p>
          <div className="w-16 h-16 m-4">
            <img src="/images/skills/comparison.png" alt="" />
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <div className="p-4 flex flex-col items-center">
            <p>Comparison</p>
            <div className="flex m-4">
              <img src={"/images/bronze-star.png"} className="w-8" />
              <img src={"/images/silver-star.png"} className="w-8" />
            </div>
            <p className="mb-4">Level 1</p>
            <div className="flex">
              <button className="bg-blue-400 p-2 w-16 m-2">Play</button>
              <button className="bg-green-400 p-2 w-16 m-2">Study</button>
            </div>
          </div>
        </Modal>
        <Link href="/practice/addition">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Addition</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/addition.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/practice/subtraction">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Subtraction</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/subtraction.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/practice/multiplication">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Multiplication</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/multiplication.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/practice/addition">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Division</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/division.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/practice/addition">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Fractions</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/fractions.jpeg" alt="" />
            </div>
          </div>
        </Link>
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
          <p>Money</p>
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
