import React, { useState } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import CreateRoom from "../../components/mathBattle/createRoom";
import { Button } from "../../components/stories/Button";
import * as Colyseus from "colyseus.js";
import Lobby from "../../components/mathBattle/lobby";
import BattleComponent from "../../components/mathBattle/BattleComponent";
import { generateQuestions } from "../api/quiz/quizQuestionGenerator";
import { Question, AnswerType } from "../api/question";
import { QuestionType } from "../api/questionTypes";
import { Skill } from "../api/skill";
import CoopBattleComponent from "../../components/mathBattle/CoopBattleComponent";
import { useEffect } from "react";

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
    BATTLE,
    COOP
  }

  const [stage, setStage] = useState(STAGE.JOIN_SESSION);
  const [room, setRoom] = useState<Colyseus.Room>();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);
  var client = new Colyseus.Client("ws://localhost:4001");
  const onJoinClick = () => {
    client
      .joinById(code)
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
  
  const onCreateCoopClick = () => {
    client
      .create("coop")
      .then((room) => {
        setCode(room.id);
        console.log(room.sessionId, "joined", room.id, room.name);
        setRoom(room);
        room.send("join", { name: name }); //Dyanmic Name
        setStage(STAGE.LOBBY);
      })
      .catch((e) => {
        console.log("JOIN ERROR", e);
      });
  };
  const onCreateClick = () => {
    client
      .create("tictactoe")
      .then((room) => {
        setCode(room.id);
        console.log(room.id);
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
  room?.onMessage("goToBattle", (message) => {
    setStage(STAGE.BATTLE);
    const questions = message;
    console.log(questions);
    setQuestionData(questions);
  });
  room?.onMessage("goToCoop", (message) => {
    setStage(STAGE.COOP);
  });

  const onStartGameRequested = () => {
    // setStage(STAGE.GAME)
    room.send("startGameRequested");
  };

  useEffect(() => {
    setQuestionData(generateQuestions("addition", 1, 100));
  }, []);

  return (
    <div>
      <DiagnosticNavbar />
      <div className="p-4">
        {" "}
        {stage == STAGE.JOIN_SESSION && (
          <CreateRoom
            players={players}
            onCreateClick={onCreateClick}
            onCreateCoopClick={onCreateCoopClick}
            onJoinClick={onJoinClick}
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
          />
        )}
        {stage == STAGE.LOBBY && (
          <Lobby
            players={players}
            code={code}
            startGame={onStartGameRequested}
          />
        )}
        {stage == STAGE.BATTLE && (
          <BattleComponent questions={questionData} room={room} />
        )}
        {stage == STAGE.COOP && (
          <CoopBattleComponent questions={questionData} room={room} />
        )}
      </div>
    </div>
  );
};
export default MathBattle;
