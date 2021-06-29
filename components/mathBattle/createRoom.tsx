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
    <div>
      <Button
        onClick={onCreateClick}
        label="Lock-in"
        textColor="white"
        backgroundColor="blue"
      ></Button>
      {players.map((it) => (
        <p>{it}</p>
      ))}
    </div>
  );
};
export default CreateRoom;
