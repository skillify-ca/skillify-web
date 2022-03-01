import React from "react";
import { Provider, useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import {
  setPlayerReady,
  startRound,
  finishRound,
  increasePlayerScore,
  warGameSelector,
  resetRound,
  initialState,
} from "../../../redux/warGameSlice";
import { Button } from "../../ui/Button";
//<p>{JSON.stringify(state)}</p>
export default function WarGame() {
  const state = useSelector(warGameSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-1 bg-white shadow-lg rounded-xl p-8 m-8 gap-8">
      <p>War Game</p>
      <div className="flex gap-4">
        <div>
          <p>Player One Deck:</p>
          <ul>
            {state.cardListPlayerOne.map((card, index) => (
              <li key={index}>
                {card.question} = {card.answer}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Player Two Deck:</p>
          <ul>
            {state.cardListPlayerTwo.map((card, index) => (
              <li key={index}>
                {card.question} = {card.answer}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-8 bg-white p-4 rounded-xl shadow-lg">
        <p className=" ">
          <span className="text-xl font-bold">Current Round:</span>{" "}
          {state.currentRoundIndex}
        </p>
        <p className=" ">
          <span className="text-xl font-bold">Player One : </span>
          {state.playerOneReady ? "Ready" : "Not Ready"}
        </p>
        <p className=" ">
          <span className="text-xl font-bold">Player Two : </span>
          {state.playerTwoReady ? "Ready" : "Not Ready"}
        </p>
        <p className=" ">
          <span className="text-xl font-bold">Game Over?: </span>
          {state.gameOver ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex gap-4">
        <div className="bg-white p-4 text-xl font-bold rounded-xl shadow-lg">
          <p>
            Player One Card : {state.playerOneCurrentCard?.question}{" "}
            {state.playerOneCurrentCard?.answer}
          </p>
        </div>
        <div className="bg-white p-4 text-xl font-bold rounded-xl shadow-lg">
          <p>
            Player Two Card : {state.playerTwoCurrentCard?.question}{" "}
            {state.playerTwoCurrentCard?.answer}
          </p>
        </div>
      </div>
      <div className="flex gap-4">
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
        <Button
          label="Strt Round"
          backgroundColor="blue"
          textColor="white"
          onClick={() => dispatch(startRound(null))}
        />
        <Button
          label="Finish Round"
          backgroundColor="blue"
          textColor="white"
          onClick={() => dispatch(finishRound(1))}
        />
        <Button
          label="Reset"
          backgroundColor="blue"
          textColor="white"
          onClick={() => dispatch(resetRound(initialState))}
        />
      </div>
    </div>
  );
}
