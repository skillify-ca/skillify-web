import React, { useEffect, useState } from "react";

export type LeaderboardProp = {};

export interface StudentRow {
  name: string;
  score: number;
}
const studentTable: StudentRow[] = [
  {
    name: "Raveen",
    score: 100,
  },
  {
    name: "Mayu",
    score: 20,
  },
  {
    name: "Jackey",
    score: 30,
  },
  {
    name: "Ajevan",
    score: 40,
  },
];

export const Leaderboard: React.FC<LeaderboardProp> = () => {
  return (
    <div>
      <div className="bg-green-300 grid grid-cols-2">
        <div className="bg-green-700 text-white border-2 border-white">
          {" "}
          Name
        </div>
        <div className="bg-green-700 text-white border-2 border-white">
          {" "}
          Score
        </div>
        <div>
          {studentTable.map((it) => (
            <div>
              <div className="border-2 border-white">{it.name}</div>
            </div>
          ))}
        </div>
        <div>
          {studentTable.map((it) => (
            <div>
              <div className="border-2 border-white">{it.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
