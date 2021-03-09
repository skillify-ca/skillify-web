import React, { useState } from "react";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import Navbar from "./Navbar";
import apiData from "../pages/api/data.json";

export default function Outline(props) {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  const data = apiData["outline"];
  return (
    <div>
      <div className="text-xl text-center p-4">Math Skill Tree</div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Comparison</p>
            <img classname="h-4" src="/images/skills/comparison.png" alt="" />
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Addition</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/addition.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Subtraction</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/subtraction.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Mixed Operations</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/mixed.gif" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Multiplication</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/multiplication.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 flex flex-col items-center  bg-yellow-500 p-8 text-center">
            <p>Division</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/division.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Fractions</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/fractions.jpeg" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Shapes</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/shapes.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Transformations</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/symmetry.gif" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Graphs</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/graph.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Stats</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/dice.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-yellow-500 p-8 text-center">
            <p>Measurement</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/measurement.jpeg" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0 bg-gray-400 p-8 text-center">
            <p>Money</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Patterns</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Time</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Variables</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Decimals</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Percents</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Ratios</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Exponents</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Functions</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Number Theory</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Pythagorean Theorem</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Functions</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href="/addition10">
          <div className="gap-0  bg-gray-400 p-8 text-center">
            <p>Polynomials</p>
            <div className="w-16 h-16 m-4">
              <img src="/images/skills/lock.png" alt="" />
            </div>
          </div>
        </Link>
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
            <div className="p-8 bg-yellow-500 text-center">
              Grade 9 Math (MPM1D1)
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
