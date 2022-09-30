import { useMutation } from "@apollo/client";
import React from "react";
import { DOWNGRADE_GAME_LEVEL } from "../../../graphql/longestStreak/downGradeGameLevel";
import { UPDATE_GAME_LEVEL } from "../../../graphql/longestStreak/updateGameLevel";
import { Button } from "../../ui/Button";

export interface WinnerProps {
  text: string;
  onClick: () => void;
  winner: string;
  image: string;
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
  const [downGradeGameLevel] = useMutation(DOWNGRADE_GAME_LEVEL);

  function handleSaveGameClick() {
    if (showWinner === true) {
      updateGameLevel({
        variables: {
          userId: user.uid,
        },
        onCompleted: () => {
          alert("Your skill ratings have been saved successfully.");
        },
      });
    } else {
      downGradeGameLevel({
        variables: {
          userId: user.uid,
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
