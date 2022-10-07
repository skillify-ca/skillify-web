import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {
  FetchGameLevelResponse,
  FETCH_GAME_LEVEL,
  FETCH_RANKED_GAME_LEVEL,
} from "../../../graphql/longestStreak/fetchGameLevel";
import { Button } from "../../ui/Button";

export interface UserTableStatsProps {
  onClick: () => void;
}

export const UserTableStats: React.FC<UserTableStatsProps> = ({ onClick }) => {
  const { data } = useQuery<FetchGameLevelResponse>(FETCH_RANKED_GAME_LEVEL, {
    onCompleted: (data: FetchGameLevelResponse) => {
      if (data.longestStreakUserData != undefined) {
        FETCH_RANKED_GAME_LEVEL;
      }
    },
  });

  return (
    <>
      <h1 className="flex text-center">Leader Board</h1>
      {JSON.stringify(data)}
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-purple-300"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-purple-300"
            >
              Games Won
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-purple-300"
            >
              Current Level
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-purple-300"
            >
              Games Played
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-purple-300"
            >
              Games Lost
            </th>
          </tr>
          {data.longestStreakUserData.map((row) => {
            return (
              <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                <td
                  data-th="Name"
                  className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {row.user.name}
                </td>
                <td
                  data-th="Title"
                  className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {row.gamesWon}
                </td>
                <td
                  data-th="Company"
                  className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {row.currentLevel}
                </td>
                <td
                  data-th="Role"
                  className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {row.gamesPlayed}
                </td>
                <td
                  data-th="Username"
                  className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {row.gamesLost}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center p-4">
        <Button
          backgroundColor="purple"
          label={"Play Game"}
          onClick={onClick}
        />
      </div>
    </>
  );
};

{
  /* <div className="grid grid-cols-3">
  <p>User Name</p>
  <p>Games PLay</p>
  <p>Games Lost</p>
</div>; */
}

export default UserTableStats;
//tailwind border styles

// {"longestStreakUserData"
// :[
//   {"__typename":"longestStreakUserData",
//   "user":{"__typename":"users","name":"Kari Wiedenhaupt"},
//   "currentLevel":2,
//   "gamesLost":6,
//   "gamesPlayed":11,
//   "gamesWon":4},
//   {"__typename":"longestStreakUserData","user":{"__typename":"users","name":"Vithushan N"},"currentLevel":3,"gamesLost":0,"gamesPlayed":1,"gamesWon":0},{"__typename":"longestStreakUserData","user":{"__typename":"users","name":"Kavan Param"},"currentLevel":2,"gamesLost":0,"gamesPlayed":1,"gamesWon":0},{"__typename":"longestStreakUserData","user":{"__typename":"users","name":"Lucksson Namasivayasivam"},"currentLevel":2,"gamesLost":0,"gamesPlayed":1,"gamesWon":0},{"__typename":"longestStreakUserData","user":{"__typename":"users","name":"Kari Wiedenhaupt"},"currentLevel":1,"gamesLost":0,"gamesPlayed":1,"gamesWon":0},{"__typename":"longestStreakUserData","user":{"__typename":"users","name":"Vithushan Namasivayasivam"},"currentLevel":1,"gamesLost":0,"gamesPlayed":1,"gamesWon":0}]}
