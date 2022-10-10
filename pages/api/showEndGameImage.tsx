import Firework from "../../components/math/longestStreak/Firework";

export function showEndGameImage() {
  let optionOne = <Firework />;
  let optionTwo = <img src="/images/math1/longestStreak/playerTwoWinner.jpg" />;
  let optionThree = <img src="/images/math1/longestStreak/drawWinner.png" />;
  let optionsArray = [optionOne, optionTwo, optionThree];
  return optionsArray;
}
