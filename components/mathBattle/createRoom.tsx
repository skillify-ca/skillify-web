import React, { useState } from "react";
import { Button } from "../stories/Button";
import * as Colyseus from "colyseus.js";

const CreateRoom = () => {
  const [room, setRoom] = useState<Colyseus.Room>();
  const [players, setPlayers] = useState([]);
  var client = new Colyseus.Client("ws://localhost:4001");
  const onCreateClick = () => {
    client
      .joinOrCreate("tictactoe")
      .then((room) => {
        console.log(room.sessionId, "joined", room.name);
        setRoom(room);
        room.send("join", { name: "Lavan" }); //Dyanmic Name
      })
      .catch((e) => {
        console.log("JOIN ERROR", e);
      });
  };
  room?.onMessage("joinResponse", (message) => {
    console.log(client.auth._id, "received fire on", room.name, message);
    let playerArr = [];
    for (const [key, value] of Object.entries(message)) {
      console.log(key, value);
      playerArr.push(value["name"]);
    }
    console.log(playerArr);

    setPlayers([playerArr]);
  });

  return (
    <div className="mr-10 ml-10">
      <div className="bg-white rounded-lg gap-4 flex flex-col md:flex-row">
        <div className="items-center content-around">
          <img src="/images/PVPIconBackground.png" width="300" height="300" />
        </div>
        <div className="flex flex-col p-6">
          <h1 className="text-5xl text-blue-600 font-bold">Player Vs Player</h1>
          <p className="text-2xl mt-4 mb-3">
            To go head to head with another Math Champ in this heated Player Vs
            Player Mode. You will be racing with eachother to see who can get
            the most correct answers and who can complete it the fastest. So
            let's see who will come up top!
          </p>
          <div className="w-1/2 sm:items-center md:self-start">
            <Button
              onClick={onCreateClick}
              label="Join Game"
              textColor="white"
              backgroundColor="blue"
            ></Button>
            {players.map((it) => (
              <p>{it}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateRoom;
