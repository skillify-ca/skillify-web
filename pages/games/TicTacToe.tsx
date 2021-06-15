import React, { useEffect, useState } from "react";
import GameBoard from "../../components/ticTacToe/GameBoard";
import { Container } from "../../components/ticTacToe/Container";
import TeacherControls from "../../components/ticTacToe/TeacherControls";
import Navbar from "../../components/Navbar";
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

function TicTacToe() {
  const [room, setRoom] = useState<Colyseus.Room>();
  var client = new Colyseus.Client("ws://localhost:4001");

  const [counter, setCount] = useState(10);

  useEffect(() => {
    client
      .joinOrCreate("tictactoe")
      .then((room) => {
        console.log(room.sessionId, "joined", room.name);
        setRoom(room);
      })
      .catch((e) => {
        console.log("JOIN ERROR", e);
      });
  }, []);

  // room?.onStateChange((state) => {
  //   console.log(room.name, "has new state:", state);
  // });

  room?.onMessage("move", (message) => {
    console.log(client.auth._id, "received on", room.name, message);
  });

  // room?.onError((code, message) => {
  //   console.log(client.auth._id, "couldn't join", room.name);
  // });

  // room?.onLeave((code) => {
  //   console.log(client.auth._id, "left", room.name);
  // });

  return (
    <div>
      <Navbar />
      {room?.name}
      <div className="p-4">
        <GameBoard room={room} />
      </div>
    </div>
  );
}

export default TicTacToe;
