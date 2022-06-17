import React, { useState } from "react";
import { Player } from "../../../pages/games";
import { Button } from "../../ui/Button";
import CoopNarrative from "./coop/CoopNarrative";

export interface CreateRoomProps {
  onCreateClick: () => void;
  onCreateCoopClick: () => void;
  onJoinClick: () => void;
  players: Player[];
  battleName: string;
  setBattleName: (name: string) => void;
  coopName: string;
  setCoopName: (name: string) => void;
  joinName: string;
  setJoinName: (name: string) => void;
  code: string;
  setCode: (code: string) => void;
}

const CreateRoom = ({
  onCreateClick,
  onCreateCoopClick,
  onJoinClick,
  battleName,
  setBattleName,
  coopName,
  setCoopName,
  joinName,
  setJoinName,
  code,
  setCode,
}: CreateRoomProps) => {
  const SHOULD_SHOW_COOP = false; // TODO enable this when coop end screen is complete
  const [isCoopRulesModalShowing, setIsCoopRulesModalShowing] = useState(false);

  const onRulesClick = () => {
    setIsCoopRulesModalShowing((prev) => !prev);
  };
  return (
    <div>
      <h1 className="mb-4 text-5xl font-bold text-center text-blue-600">
        Math Battle
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg text-murkrow">
          <div className="flex flex-wrap items-center gap-8">
            <img
              src="/images/PVPIconBackground.png"
              className="w-24 h-24"
              width="300"
              height="300"
            />
            <h2 className="text-5xl font-bold text-blue-600">Create</h2>
          </div>
          <p className="mt-4 mb-3 text-lg">
            Up to four players can go head to head against other Math Champs in
            this heated Versus Mode. Race each other to see who can get the most
            correct answers in the fastest time.
          </p>{" "}
          <input
            id="battleName"
            type="text"
            autoComplete="off"
            className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
            placeholder="Enter your name"
            value={battleName}
            onChange={(e) => setBattleName(e.target.value)}
          />
          <Button
            onClick={onCreateClick}
            label="Create Game"
            textColor="white"
            backgroundColor="blue"
          ></Button>
        </div>
        {SHOULD_SHOW_COOP && (
          <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="items-center content-around">
              <img
                src="/images/PVPIconBackground.png"
                className="w-24 h-24"
                width="300"
                height="300"
              />
            </div>
            <h1 className="text-5xl font-bold text-blue-600">Zombies</h1>
            <Button
              backgroundColor="white"
              label="Rules"
              onClick={onRulesClick}
              textColor="black"
            />
            <p className="mt-4 mb-3 text-xl">
              Up to four players can play as a team to take down Frankenstein.
              The more questions you answer correctly as a team, the faster his
              health decreases.
            </p>{" "}
            <input
              id="coopName"
              type="text"
              autoComplete="off"
              className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
              placeholder="Enter your name"
              value={coopName}
              onChange={(e) => setCoopName(e.target.value)}
            />
            <Button
              onClick={onCreateCoopClick}
              label="Create Game"
              textColor="white"
              backgroundColor="green"
            ></Button>
          </div>
        )}
        <div className="flex flex-col items-center col-span-1 gap-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex items-center gap-8">
            <img
              src="/images/PVPIconBackground.png"
              className="w-24 h-24"
              width="300"
              height="300"
            />
            <h1 className="text-5xl font-bold text-blue-600">Join</h1>
          </div>
          <input
            id="guess"
            type="text"
            autoComplete="off"
            className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
            placeholder="Enter your name"
            value={joinName}
            onChange={(e) => setJoinName(e.target.value)}
          />
          <input
            id="guess"
            type="text"
            autoComplete="off"
            className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
            placeholder="Enter the Room Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            onClick={onJoinClick}
            label="Join Game"
            textColor="white"
            backgroundColor="blue"
          ></Button>
        </div>
      </div>
      {isCoopRulesModalShowing && (
        <div>
          <CoopNarrative close={onRulesClick} />
        </div>
      )}
    </div>
  );
};
export default CreateRoom;
