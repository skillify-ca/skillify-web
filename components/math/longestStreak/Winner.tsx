import { InMemoryCache, useMutation } from "@apollo/client";
import React from "react";
import { DOWNGRADE_GAME_LEVEL } from "../../../graphql/longestStreak/downGradeGameLevel";
import { FETCH_GAME_LEVEL } from "../../../graphql/longestStreak/fetchGameLevel";
import { UPDATE_GAME_LEVEL } from "../../../graphql/longestStreak/updateGameLevel";
import { setLevel } from "../../../redux/longestStreakSlice";
import { Button } from "../../ui/Button";

export interface WinnerProps {
  text: string;
  onClick: () => void;
  winner: string;
  image: string;
  user: any;
  showWinner: boolean;
  level: number;
  onClickNoSave: () => void;
}

export const Winner: React.FC<WinnerProps> = ({
  text,
  onClick,
  winner,
  image,
  user,
  showWinner,
  level,
  onClickNoSave,
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
        refetchQueries: [{ query: FETCH_GAME_LEVEL }],
        onCompleted: () => {
          setLevel((level += 1));
          console.log(level);
          alert("Your skill ratings have been saved successfully.");
        },
      });
    } else {
      downGradeGameLevel({
        variables: {
          userId: user.uid,
        },

        refetchQueries: [{ query: FETCH_GAME_LEVEL }],
        onCompleted: () => {
          setLevel((level -= 1));
          console.log(level);
          alert("Your skill ratings have been saved successfully.");
        },
      });
    }
  }

  return (
    <div className="flex-row items-center">
      <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-purple-700 hover:bg-purple-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {winner}
      </div>
      <div className="flex justify-center"> {image}</div>
      <p className=" flex justify-center py-8">
        Remember... Practice makes perfect. Begin again!
      </p>
      <div className="flex justify-center bg-purple">
        <label htmlFor="Save" className="relative h-8 w-16 cursor-pointer">
          <input
            type="checkbox"
            onClick={onClick}
            id="Save"
            className="peer sr-only"
          />
          <span className="absolute inset-0 rounded-full bg-purple-500 transition peer-checked:bg-purple-700"></span>

          <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-8"></span>
        </label>
      </div>
      <p className="p-2 flex justify-center text-lg text-gray-600">
        Save & Level Up/Down
      </p>
      <div className="p-4 flex justify-center">
        <Button
          label={"Try Again"}
          backgroundColor="purple"
          onClick={onClickNoSave}
        />
      </div>
    </div>
  );
};
export default Winner;
