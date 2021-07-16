import React from "react";
import { Button } from "../ui/Button";
import { Player } from "../../pages/games/MathBattle";

export interface CreateRoomProps {
  onCreateClick: () => void;
  onCreateCoopClick: () => void;
  onJoinClick: () => void;
  players: Player[];
  name: string;
  setName: (name: string) => void;
  code: string;
  setCode: (code: string) => void;
}

const CreateRoom = ({
  onCreateClick,
  onCreateCoopClick,
  onJoinClick,
  name,
  setName,
  code,
  setCode,
}: CreateRoomProps) => {
  return (
    <div>
      <div className="mr-10 ml-10 mb-10">
        <div className="bg-white rounded-lg gap-4 flex flex-col md:flex-row">
          <div className="items-center content-around">
            <img src="/images/PVPIconBackground.png" width="300" height="300" />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="text-5xl text-blue-600 font-bold">Create Room</h1>
            <p className="text-2xl mt-4 mb-3">
              To go head to head with another Math Champ in this heated Player
              Vs Player Mode. You will be racing with eachother to see who can
              get the most correct answers and who can complete it the fastest.
              So let's see who will come up top!
            </p>{" "}
            <div className="flex gap-4 sm:items-center md:self-start">
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={10}
              />
              <Button
                onClick={onCreateClick}
                label="Create Game"
                textColor="white"
                backgroundColor="blue"
              ></Button>
              <Button
                onClick={onCreateCoopClick}
                label="Create Coop Game"
                textColor="white"
                backgroundColor="green"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-10 ml-10">
        <div className="bg-white rounded-lg gap-4 flex flex-col md:flex-row">
          <div className="items-center content-around">
            <img src="/images/PVPIconBackground.png" width="300" height="300" />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="text-5xl text-blue-600 font-bold">Join Room</h1>
            <p className="text-2xl mt-4 mb-3">
              To go head to head with another Math Champ in this heated Player
              Vs Player Mode. You will be racing with eachother to see who can
              get the most correct answers and who can complete it the fastest.
              So let's see who will come up top!
            </p>{" "}
            <div className="w-1/2 sm:items-center md:self-start">
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`text-left p-2 border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md`}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={10}
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
      </div>
    </div>
  );
};
export default CreateRoom;
