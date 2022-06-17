import React, { useState } from "react";
import { Button } from "../../ui/Button";
import * as Colyseus from "colyseus.js";
import { Player } from "../../../pages/games";

export interface CreateRoomProps {
  room: Colyseus.Room;
  leader: string;
  players: Player[];
  code: string;
  startGame: () => void;
  isLoading: boolean;
}

const Lobby = ({
  room,
  leader,
  players,
  code,
  startGame,
  isLoading,
}: CreateRoomProps) => {
  const [instructionsPage, setInstructionsPage] = useState(false);

  const onReturnInstructions = () => {
    setInstructionsPage(true);
    console.log("hu", instructionsPage);
  };

  return isLoading ? (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <p className="text-2xl text-center">Loading...</p>

      <div className="flex p-5 space-x-3 bg-white rounded-full loader">
        <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-8">
      <div className="relative flex flex-col justify-center w-full bg-gray-100 sm:w-1/2">
        <h1 className="p-4 text-3xl font-bold text-blue-400 border-b">
          Lobby Room
        </h1>
        <div className="items-center text-center bg-blue-400 opacity-75">
          {players.map((it) => (
            <div className="flex items-center justify-center p-4 text-xl font-bold border-b opacity-100">
              <h1>{it.name}</h1>
              {leader && leader == it.sessionId && (
                <div className="ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-center"
                    viewBox="0 0 20 20"
                    fill="red"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="p-2 font-bold text-white bg-gray-500">Code: {code}</p>
        <p className="p-2 font-bold text-white bg-gray-500">
          Lobby Capacity: {players.length}/4
        </p>
      </div>
      <Button
        label="Instructions"
        backgroundColor="green"
        textColor="White"
        onClick={onReturnInstructions}
      ></Button>
      {players.length === 1 ? (
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-blue-400">
            Waiting for more Players
          </p>
          <div className="flex items-center justify-center ">
            <div className="flex p-5 space-x-3 bg-white rounded-full loader">
              <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
              <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
              <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {leader == room.sessionId && players.length >= 2 ? (
            <Button
              label="Play"
              backgroundColor="blue"
              textColor="white"
              onClick={startGame}
            />
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold text-blue-400">
                Waiting for Lobby Leader to Start Game
              </p>
              <div className="flex items-center justify-center ">
                <div className="flex p-5 space-x-3 bg-white rounded-full loader">
                  <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
                  <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
                  <div className="w-5 h-5 bg-blue-400 rounded-full shadow-sm animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {instructionsPage && (
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row-reverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setInstructionsPage(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-center text-green-400">
                Instructions
              </p>
            </div>
            <p className="mt-2 text-xl leading-8 tracking-tight text-gray-900 ">
              Battle Against your Friends by displaying your Math Skills to see
              who has the better time! But be careful, there is a time penalty
              for wrongly answered Questions!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lobby;
