import React from "react";
import { Player } from "../../pages/games";
import { Button } from "../ui/Button";

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
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col bg-white items-center gap-8 p-8 shadow-lg rounded-lg">
          <div className="flex ">
            <img
              src="/images/PVPIconBackground.png"
              className="h-24 w-24"
              width="300"
              height="300"
            />            
          </div>
          <h1 className="text-5xl text-blue-600 font-bold">Math Battle</h1>
          <p className="text-xl mt-4 mb-3">
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
        <div className="flex flex-col bg-white items-center justify-center gap-8 p-8 shadow-lg rounded-lg">
          <div className="items-center content-around">
            <img
              src="/images/PVPIconBackground.png"
              className="h-24 w-24"
              width="300"
              height="300"
            />
          </div>
          <h1 className="text-5xl text-blue-600 font-bold">Zombies</h1>
          <p className="text-xl mt-4 mb-3">
            Up to four players can play as a team to take down the zombie. The
            more questions you answer correctly as a team, the faster the
            zombie's health decreases.
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
        <div className="flex flex-col bg-white p-8 shadow-lg rounded-lg col-span-1 sm:col-span-2 justify-center items-center gap-8">
          <div className="flex items-center gap-8">
            <img
              src="/images/PVPIconBackground.png"
              className="h-24 w-24"
              width="300"
              height="300"
            />
            <h1 className="text-5xl text-blue-600 font-bold">Join Room</h1>
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
    </div>
  );
};
export default CreateRoom;
