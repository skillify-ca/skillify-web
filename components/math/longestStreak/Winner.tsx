import { useMutation } from "@apollo/client";
import React from "react";
import { FETCH_GAME_LEVEL } from "../../../graphql/longestStreak/fetchGameLevel";
import { UPDATE_GAME_LEVEL } from "../../../graphql/longestStreak/updateGameLevel";
import { UPSERT_GAME_LEVEL } from "../../../graphql/longestStreak/upsertGameLevel";
import { Button } from "../../ui/Button";

export interface WinnerProps {
  text: string;
  onClick: () => void;
  winner: string;
  image: any;
  user: any;
  showWinner: boolean;
}

export const Winner: React.FC<WinnerProps> = ({
  text,
  onClick,
  winner,
  image,
  user,
  showWinner,
  ...props
}) => {
  const [updateGameLevel] = useMutation(UPDATE_GAME_LEVEL);

  function shouldIncrementLevel() {}

  function handleSaveGameClick() {
    console.log("SW: " + showWinner);
    if (showWinner === true) {
      console.log("HERE");

      updateGameLevel({
        variables: {
          userId: "BR9u18SJzvVNzcrkEIcJDPxv1ws1",
        },
        onCompleted: () => {
          alert("Your skill ratings have been saved successfully.");
        },
      });
    }
  }

  return (
    <div className="flex-row justify-center">
      <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-purple-700 hover:bg-purple-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {winner}
      </div>
      <div className="flex justify-center"> {image}</div>
      <p className="flex justify-center py-8">
        Remember... Practice makes perfect. Begin again!
      </p>
      <div className="flex justify-center">
        <Button
          backgroundColor="purple"
          label={"Play Again"}
          onClick={onClick}
        />
        <Button
          backgroundColor="purple"
          label={"Save Game"}
          onClick={() => handleSaveGameClick()}
        />
      </div>
    </div>
  );
};
export default Winner;
