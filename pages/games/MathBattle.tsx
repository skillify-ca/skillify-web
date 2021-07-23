import React, { useState } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import * as Colyseus from "colyseus.js";
import BattleComponent from "../../components/mathBattle/BattleComponent";
import { generateQuestions } from "../api/quiz/quizQuestionGenerator";
import { Question, AnswerType } from "../api/question";
import { QuestionType } from "../api/questionTypes";
import { Skill } from "../api/skill";
import CoopBattleComponent from "../../components/mathBattle/coop/CoopBattleComponent";
import { useEffect } from "react";
import CreateRoom from "../../components/mathBattle/CreateRooms";
import Lobby from "../../components/mathBattle/PlayerLobby";
import PostGameLobby from "../../components/mathBattle/PostGameLobby";
import GameOver from "../../components/mathBattle/GameOver";
import CoopGameOver from "../../components/mathBattle/coop/CoopGameOver";

export type Player = {
  seat: number;
  score: number;
  sessionId: string;
  name: string;
};
export enum STAGE {
  JOIN_SESSION,
  LOBBY,
  BATTLE,
  COOP,
  POSTGAME_LOBBY,
  GAME_OVER,
  COOP_GAME_OVER,
}

const MathBattle = () => {
  const [players, setPlayers] = useState([]);

  const [leader, setLeader] = useState("");
  const [stage, setStage] = useState(STAGE.JOIN_SESSION);
  const [room, setRoom] = useState<Colyseus.Room>();
  const [name, setName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [code, setCode] = useState("");
  const [winnerId, setWinnerId] = useState("");

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
        console.log("initial", name);

        console.log("joininitial", joinName);

        console.log("fakename", name);

        console.log("final", name);

        room.send("join", { name: joinName }); //Dyanmic Name
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
        setLeader(room.sessionId);
        setCode(room.id);
        console.log(room.sessionId, "joined", room.name);
        setRoom(room);
        room.send("join", { id: room.sessionId, name: name }); //Dyanmic Name
        setStage(STAGE.LOBBY);
      })
      .catch((e) => {
        console.log("JOIN ERROR", e);
      });
  };
  room?.onMessage("joinResponse", (message) => {
    console.log(client.auth._id, "received fire on", room.name, message);
    console.log("messageresponse", message);
    let playerArr = [];
    for (const [key, value] of Object.entries(message)) {
      console.log(key, value);
      playerArr.push(value);
    }
    console.log(playerArr);
    room.send("leader", leader);

    setPlayers(playerArr);
  });

  room?.onMessage("leaderResponse", (message) => {
    console.log("messagetime", message);
    setLeader(message);
  });

  room?.onMessage("postGame", (message) => {
    let playerArr = [];
    for (const [key, value] of Object.entries(message)) {
      playerArr.push(value);
    }
    setPlayers(playerArr);
    console.log("postgame");
    setStage(STAGE.POSTGAME_LOBBY);
  });

  room?.onMessage("goToBattle", (message) => {
    setStage(STAGE.BATTLE);
    const questions = message;
    setQuestionData(questions);
  });
  room?.onMessage("goToCoop", (message) => {
    setStage(STAGE.COOP);
  });
  room?.onMessage("showGameOver", (message) => {
    console.log("mes", message);

    // There is no message for coop
    if (message) {
      setWinnerId(message.id);
    }

    if (stage === STAGE.BATTLE) {
      setStage(STAGE.POSTGAME_LOBBY);
    } else if (stage === STAGE.COOP) {
      setStage(STAGE.COOP_GAME_OVER);
    }
  });

  const onStartGameRequested = () => {
    setStage(STAGE.BATTLE);
    const questions = generateQuestions("addition", 1, 10);
    room.send("startGameRequested", questions);
  };

  useEffect(() => {
    setQuestionData(generateQuestions("addition", 1, 100));
  }, []);

  return (
    <div>
      <DiagnosticNavbar />
      <div className="p-4">
        {stage == STAGE.JOIN_SESSION && (
          <CreateRoom
            players={players}
            onCreateClick={onCreateClick}
            onCreateCoopClick={onCreateCoopClick}
            onJoinClick={onJoinClick}
            name={name}
            setName={setName}
            joinName={joinName}
            setJoinName={setJoinName}
            code={code}
            setCode={setCode}
          />
        )}
        {stage == STAGE.LOBBY && (
          <Lobby
            players={players}
            code={code}
            startGame={onStartGameRequested}
            leader={leader}
          />
        )}
        {stage == STAGE.BATTLE && (
          <BattleComponent questions={questionData} room={room} />
        )}
        {stage == STAGE.COOP && (
          <CoopBattleComponent questions={questionData} room={room} />
        )}
        {stage == STAGE.POSTGAME_LOBBY && <PostGameLobby players={players} />}
        {stage == STAGE.GAME_OVER && (
          <GameOver
            goToLobby={() => setStage(STAGE.JOIN_SESSION)}
            winnerId={winnerId}
            room={room}
          />
        )}
        {stage == STAGE.COOP_GAME_OVER && (
          <CoopGameOver
            room={room}
            goToLobby={() => setStage(STAGE.JOIN_SESSION)}
          />
        )}
      </div>
    </div>
  );
};
export default MathBattle;
