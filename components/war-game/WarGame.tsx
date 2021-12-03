import React from "react";
import { Provider, useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import {
  setPlayerReady,
  startRound,
  finishRound,
  increasePlayerScore,
  warGameSelector,
} from "../../redux/warGameSlice";
import { Button } from "../ui/Button";

export default function WarGame() {
  const state = useSelector(warGameSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-1 bg-white shadow-lg rounded-xl p-8 m-8">
      <p>War Game</p>
      <p>{JSON.stringify(state)}</p>
      <p>CUrrent round: {state.currentRoundIndex}</p>
      <p>Player One Ready : {state.playerOneReady ? "Ready" : "Not Ready"}</p>
      <p>Player Two Ready : {state.playerTwoReady ? "Ready" : "Not Ready"}</p>

      <div className="bg-white p-4 text-xl font-bold rounded-xl shadow-lg">
        <p>Player One Card : {state.playerOneCurrentCard?.question}</p>
      </div>
      <p>Player Two Card : {state.playerTwoCurrentCard?.question}</p>
      <Button
        label="Strt Round"
        backgroundColor="blue"
        textColor="white"
        onClick={() => dispatch(startRound(null))}
      />
      <Button
        label="Set Player One Ready"
        backgroundColor="blue"
        textColor="white"
        onClick={() => dispatch(setPlayerReady(1))}
      />
      <Button
        label="Set Player Two Ready"
        backgroundColor="blue"
        textColor="white"
        onClick={() => dispatch(setPlayerReady(2))}
      />
    </div>
  );
}
