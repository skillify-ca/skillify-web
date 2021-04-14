const NUM_QUESTIONS = 5;

export type FlashcardQuestion = {
  text: String;
  answer: number;
};
export const generateQuestions = (slug: string, currentLevel: number) => {
  if (slug != null) {
    if (slug.toLowerCase() == "numbers") {
      return generateQuestionsForTopic(currentLevel, getRandomNumbersQuestion);
    } else {
      return generateQuestionsForTopic(currentLevel, getRandomAdditionQuestion);
    }
  }
  return [];
};

function getRandomNumbersQuestion(min: number, max: number) {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const text = `Which is bigger ${a} or ${b}?`;
  return {
    text: text,
    answer: Math.max(a, b),
  };
}

const generateQuestionsForTopic = (
  currentLevel: number,
  questionGenerator: (min: number, max: number) => FlashcardQuestion
) => {
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
    res.push(questionGenerator(min, max));
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
