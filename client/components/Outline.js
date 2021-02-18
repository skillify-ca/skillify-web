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
      <div className="text-xl text-center p-4">Nulakam</div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/addition10">
          <div className="gap-0 divide-y-2 divide-yellow-800 bg-green-500 p-8 text-center">
            <p>Addition</p> 
            (Sum 10)
          </div>
        </Link>
        <Link href="/games/TicTacToe">
        <div className="gap-0 divide-y-2 divide-yellow-800 bg-purple-500 p-8 text-center">
            Tic Tac Toe
          </div>
        </Link>
        <Link href="/grade-nine">
          <div className="gap-0 divide-y-2 divide-yellow-800">
            <div className="p-16 bg-yellow-500 text-center">
              Grade 9 Math (MPM1D1)
            </div>
            <div className="p-4 bg-yellow-500">
              <ProgressBar value={0} color={"yellow"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
