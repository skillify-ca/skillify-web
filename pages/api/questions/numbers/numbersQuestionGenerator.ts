import { Question, AnswerType } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRndInteger } from "../../random";
import { Skill } from "../../skill";

function numtoDigitsArr(answer: string): number[] {
  const len = answer.length;
  let numArr = [];
  for (let i = 0; i < len; ++i) {
    numArr[i] = parseInt(answer[i]);
  }
  return numArr;
}

export function stringNumCalc(answer: number[]): string {
  const onesColWord = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const tensColWord = [
    [
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ],
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const hundredsColWord = [
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
  ];

  const thousandscolWord = [
    "one thousand",
    "two thousand",
    "three thousand",
    "four thousand",
    "five thousand",
    "six thousand",
    "seven thousand",
    "eight thousand",
    "nine thousand",
  ];

  let hundredsString;
  let tensString;
  let onesString;

  if (answer[0] == 0) {
    hundredsString = "";
  } else {
    hundredsString = onesColWord[answer[0]] + " " + "Hundred";
  }

  if (tensString == null) {
    if (answer[1] == 0) {
      tensString = "";
    } else if (answer[1] == 1) {
      if (answer[2] == 0) {
        tensString = tensColWord[1];
        onesString = "";
      } else {
        tensString = tensColWord[0][answer[2] - 1];
        onesString = "";
      }
    } else {
      tensString = tensColWord[answer[1]];
    }
  }
  if (onesString == null) {
    if (answer[2] == 0) {
      onesString = "";
    } else {
      onesString = onesColWord[answer[2]];
    }
  }
  return hundredsString + " " + tensString + " " + onesString;
}

export function getRandomNumbersQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  console.log(skill);
  const types = [
    QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,
    QuestionType.WORD_TO_HORIZONTAL_DIGITS,
    QuestionType.NUM_TO_VERITCAL_DIGITS,
    QuestionType.VERTICAL_DIGITS_TO_NUM,
    QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,

    // QuestionType.COMPARISON_WORD_PROBLEM,
  ];
  let typeIndex = getRndInteger(0, types.length);
  let type = types[typeIndex];
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  let text;
  let answer;
  let startNum = getRndInteger(a, b);

  if (skill == Skill.NUMBERS_50) {
    const typeArr = [
      QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,
      QuestionType.COMPARISON_NUMBER_PROBLEM,
    ];
    let typeIndex = getRndInteger(0, typeArr.length);
    type = typeArr[typeIndex];
  }

  if (type == QuestionType.PATTERN_COUNT_BLANKS_PROBLEM) {
    let patternTypes = ["FORWARDS", "BACKWARDS"];
    let patternIndex = getRndInteger(0, patternTypes.length);
    let displayPattern = patternTypes[patternIndex];
    let patternNum = getRndInteger(1, 10);

    // prevents negative numbers appearing in pattern
    if (displayPattern == "BACKWARDS" && startNum - 3 * patternNum < 0) {
      displayPattern = "FORWARDS";
    }

    //

    text = `Count ${displayPattern} by ${patternNum} from ${startNum}`;
    if (displayPattern == "FORWARDS") {
      answer = `${startNum},${startNum + patternNum},${
        startNum + patternNum * 2
      },${startNum + patternNum * 3}`;
    } else {
      answer = `${startNum},${startNum - patternNum},${
        startNum - patternNum * 2
      },${startNum - patternNum * 3}`;
    }
  } else if (type == QuestionType.WORD_TO_HORIZONTAL_DIGITS) {
    if (skill == Skill.NUMBERS_200) {
      answer = [
        getRndInteger(0, 2),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    } else if ((skill = Skill.NUMBERS_1000)) {
      answer = [
        getRndInteger(0, 10),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    }
    text = stringNumCalc(answer);
  } else if (type == QuestionType.NUM_TO_VERITCAL_DIGITS) {
    if (skill == Skill.NUMBERS_200) {
      text = getRndInteger(0, 201).toString();
      answer = numtoDigitsArr(text);
    } else if ((skill = Skill.NUMBERS_1000)) {
      text = getRndInteger(0, 1001).toString();
      answer = numtoDigitsArr(text);
    }
  } else if (type == QuestionType.VERTICAL_DIGITS_TO_NUM) {
    if (skill == Skill.NUMBERS_200) {
      answer = [
        getRndInteger(0, 2),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    } else if ((skill = Skill.NUMBERS_1000)) {
      answer = [
        getRndInteger(0, 10),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
      text = answer.join("");
    }
  } else if (type == QuestionType.COMPARISON_NUMBER_PROBLEM) {
    answer = Math.max(a, b);
    text = `${a},${b}`;
  }

  return {
    text: text,
    answer: answer.toString(),
    answerType:
      type == QuestionType.COMPARISON_NUMBER_PROBLEM
        ? AnswerType.STRING
        : AnswerType.ARRAY,
    questionType: type,
    skill: skill,
    arrayAns: answer,
    placeholder: startNum.toString(),
  };
}
