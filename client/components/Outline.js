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
      <div className="text-xl text-center p-4">Grade 9 Math (MPM1D1)</div>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/games/tic-tac-toe">
          <div className="bg-purple-500 text-center">
            Tic Tac Toe
          </div>
        </Link>
        <Link href="/strand/number-sense-and-algebra">
          <div className="gap-0 divide-y-2 divide-red-800 text-center">
            <div className="p-16 bg-red-500 text-center">
              <p>{data[0]}</p>
            </div>
            <div className="p-4 bg-red-500">
              <ProgressBar value={50} color={"red"} />
            </div>
          </div>
        </Link>
        <Link href="/strand/linear-relations">
          <div className="gap-0 divide-y-2 divide-green-800">
            <div className="p-16 bg-green-500 text-center">
              <p>{data[1]}</p>
            </div>
            <div className="p-4 bg-green-500">
              <ProgressBar value={33} color={"green"} />
            </div>
          </div>
        </Link>
        <Link href="/strand/analytic-geometry">
          <div className="gap-0 divide-y-2 divide-blue-800">
            <div className="p-16 bg-blue-500 text-center">
              <p>{data[2]}</p>
            </div>
            <div className="p-4 bg-blue-500">
              <ProgressBar value={100} color={"blue"} />
            </div>
          </div>
        </Link>
        <Link href="/strand/measurement-geometry">
          <div className="gap-0 divide-y-2 divide-yellow-800">
            <div className="p-16 bg-yellow-500 text-center">
              <p>{data[3]}</p>
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
