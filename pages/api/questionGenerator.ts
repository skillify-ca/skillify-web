import apiData from "../api/practice.json";

const NUM_QUESTIONS = 5;
const ADDITION_SKILL_ID = "6aa7774f-85d0-438f-a35f-04034ada4fe5"

export const generateQuestions = (slug: string, currentLevel: number) => {
  return generateAdditionQuestions(currentLevel);
};

const generateAdditionQuestions = (currentLevel: number) => {
  const res = [];
  for (let i = 0; i < NUM_QUESTIONS; i++) {
    let min = 1;
    let max = 10;
    if (currentLevel == 2) {
      min = 11;
      max = 100;
    } else if (currentLevel == 3) {
      min = 101;
      max = 1000;
    }
    res.push(getRandomAdditionQuestion(min, max));
  }
  return res;
};

function getRandomAdditionQuestion(min: number, max: number) {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const text = `${a} + ${b} =`;
  return {
    text: text,
    answer: a + b,
  };
}

// Get random number between min (inclusive) and max (exclusive)
function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
