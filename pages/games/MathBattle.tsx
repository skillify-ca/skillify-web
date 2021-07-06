import React, { useState } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import CreateRoom from "../../components/mathBattle/createRoom";
import { Button } from "../../components/stories/Button";
import * as Colyseus from "colyseus.js";
import Lobby from "../../components/mathBattle/lobby";

export type Player = {
  seat: number;
  sessionID: string;
  name: string;
};
const MathBattle = () => {
  const [players, setPlayers] = useState([]);
  enum STAGE {
    JOIN_SESSION,
    LOBBY,
    GAME,
  }

  const [stage, setStage] = useState(STAGE.JOIN_SESSION);
  const [room, setRoom] = useState<Colyseus.Room>();
  const [name, setName] = useState("");
  var client = new Colyseus.Client("ws://localhost:4001");
  const onCreateClick = () => {
    client
      .joinOrCreate("tictactoe")
      .then((room) => {
        console.log(room.sessionId, "joined", room.name);
        setRoom(room);
        room.send("join", { name: name }); //Dyanmic Name
        setStage(STAGE.LOBBY);
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
      playerArr.push(value);
    }
    console.log(playerArr);

    setPlayers(playerArr);
  });

  return (
    <div>
      <DiagnosticNavbar />
      <div className="p-4">
        {" "}
        {stage == STAGE.JOIN_SESSION && (
          <CreateRoom
            players={players}
            onCreateClick={onCreateClick}
            name={name}
            setName={setName}
          />
        )}
        {stage == STAGE.LOBBY && <Lobby players={players} />}
      </div>
    </div>
  );
};
export default MathBattle;
