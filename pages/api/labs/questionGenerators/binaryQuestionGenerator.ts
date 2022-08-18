//converts number as a string into an array of numbers
export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateTwoRandomNumbers(
  min,
  max,
  skill
): { firstNumber: number; secondNumber: number } {
  let a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  if (skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH) {
    b = getRndTenthsDecimal(0.1, 0.9);
  }
  if (skill == Skill.ADDITION_TENTHS || skill == Skill.SUBTRACTION_TENTHS) {
    a = getRndTenthsDecimal(min, max);
    b = getRndTenthsDecimal(min, max);
  } else if (
    skill == Skill.ADDITION_HUNDREDTHS ||
    skill == Skill.SUBTRACTION_HUNDREDTHS
  ) {
    a = getRndHundredthsDecimal(min, max);
    b = getRndHundredthsDecimal(min, max);
  } else if (skill == Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT) {
    a = 10;
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT) {
    a = 10;
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT) {
    a = getRndInteger(10, 100);
    b = getRndInteger(min, max);
  }

  return { firstNumber: a, secondNumber: b };
}

//function is used to generate addition, subtraction, and multiplication questions
export function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => any,
  skill: Skill,
  types: QuestionType[]
): Question {
  const type = getRandomItemFromArray(types);
  const { firstNumber, secondNumber } = generateTwoRandomNumbers(
    min,
    max,
    skill
  );
  if (type === QuestionType.HORIZONTAL_EQUATION) {
    return generateHorizontalEquationQuestion(
      firstNumber,
      secondNumber,
      operator,
      answerFunction,
      skill
    );
  } else if (type === QuestionType.VERTICAL_EQUATION) {
    return generateVerticalEquationQuestion(
      firstNumber,
      secondNumber,
      operator,
      answerFunction,
      skill
    );
  } else if (type === QuestionType.BINARY_WORD_PROBLEM) {
    return generateWordProblemQuestion(
      firstNumber,
      secondNumber,
      operator,
      answerFunction
    );
  } else if (type === QuestionType.TRUE_OR_FALSE_PROBLEM) {
    return generateTrueOrFalseQuestion(
      firstNumber,
      secondNumber,
      operator,
      answerFunction
    );
  } else if (type === QuestionType.MULTIPLE_CHOICE) {
    return generateMultipleChoiceQuestion(
      firstNumber,
      secondNumber,
      operator,
      answerFunction
    );
  } else if (type === QuestionType.ARRAY_QUESTION) {
    //Conditional to generate Array Multiplication questions
    const a = getRndInteger(1, 6);
    const b = getRndInteger(1, 6);
    return getArrayMultiplicationQuestion(a, b);
  } else if (type === QuestionType.MULTIPLICATION_EQUAL_GROUPS) {
    //Conditional to generate Array Multiplication questions
    const a = getRndInteger(1, 7);
    const b = getRndInteger(1, 11);
    return getMultiplicationEqualGroups(a, b);
  }
}
