import React, { useState } from "react";
import { Button } from "../../ui/Button";
import * as Colyseus from "colyseus.js";
import { Player } from "../../../pages/games";
import { Modal, ModalTransition } from "react-simple-hook-modal";

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
    <div className=" flex flex-col justify-center items-center gap-4">
      <p className="text-center text-2xl">Loading...</p>

      <div className="loader bg-white p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-blue-400 shadow-sm rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-400 shadow-sm  rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-400  shadow-sm rounded-full animate-bounce"></div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-8">
      <div className="relative flex flex-col justify-center  bg-gray-100 w-full sm:w-1/2">
        <h1 className="text-3xl font-bold text-blue-400 border-b p-4">
          Lobby Room
        </h1>
        <div className="bg-blue-400 opacity-75 text-center items-center">
          {players.map((it) => (
            <div className="text-xl font-bold border-b opacity-100 flex items-center justify-center p-4">
              <h1>{it.name}</h1>
              {leader && leader == it.sessionId && (
                <div className="ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5  w-5 text-center"
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

        <p className="bg-gray-500 text-white font-bold p-2">Code: {code}</p>
        <p className="bg-gray-500 text-white font-bold p-2">
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
          <p className="font-bold text-blue-400 text-xl">
            Waiting for more Players
          </p>
          <div className=" flex justify-center items-center ">
            <div className="loader bg-white p-5 rounded-full flex space-x-3">
              <div className="w-5 h-5 bg-blue-400 shadow-sm rounded-full animate-bounce"></div>
              <div className="w-5 h-5 bg-blue-400 shadow-sm  rounded-full animate-bounce"></div>
              <div className="w-5 h-5 bg-blue-400  shadow-sm rounded-full animate-bounce"></div>
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
              <p className="font-bold text-blue-400 text-xl">
                Waiting for Lobby Leader to Start Game
              </p>
              <div className=" flex justify-center items-center ">
                <div className="loader bg-white p-5 rounded-full flex space-x-3">
                  <div className="w-5 h-5 bg-blue-400 shadow-sm rounded-full animate-bounce"></div>
                  <div className="w-5 h-5 bg-blue-400 shadow-sm  rounded-full animate-bounce"></div>
                  <div className="w-5 h-5 bg-blue-400  shadow-sm rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <Modal
        id="game-over-model"
        isOpen={instructionsPage}
        transition={ModalTransition.SCALE}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row-reverse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            <p className="font-bold text-xl text-green-400 text-center">
              Instructions
            </p>
          </div>
          <p className="mt-2 text-xl leading-8  tracking-tight text-gray-900 ">
            Battle Against your Friends by displaying your Math Skills to see
            who has the better time! But be careful, there is a time penalty for
            wrongly answered Questions!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Lobby;
