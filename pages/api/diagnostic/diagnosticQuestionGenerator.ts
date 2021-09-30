import { Question } from "../question";
import {
  generateQuestionForSkill,
  getRandomAdditionQuestion,
} from "../questionGenerator";
import { Skill } from "../skill";

const NUM_QUESTIONS = 1;

type Unit = {
  name: string;
  skills: Skill[];
};

const units: Unit[] = [
  {
    name: "Addition",
    skills: [
      Skill.ADDITION_SINGLE,
      Skill.ADDITION_DOUBLE,
      Skill.ADDITION_TRIPLE,
    ],
  },
  {
    name: "Subtraction",
    skills: [
      Skill.SUBTRACTION_SINGLE,
      Skill.SUBTRACTION_DOUBLE,
      Skill.SUBTRACTION_TRIPLE,
    ],
  },
  {
    name: "Multiplication",
    skills: [
      Skill.EQUAL_GROUP_10_ITEMS,
      Skill.MULTIPLICATION_5,
      Skill.MULTIPLICATION_10,
    ],
  },
  {
    name: "Division",
    skills: [
      Skill.EQUAL_SHARING_8_ITEMS,
      Skill.DIVIDE_12_EQUALLY,
      Skill.DIVIDE_100,
    ],
  },
];

export const getNextQuestion = (
  currentQuestion: Question,
  correctGuess: boolean,
  questionsLeftInUnit: number
): Question => {
  let nextQuestion: Question;
  if (questionsLeftInUnit <= 0) {
    const nextSkill = getSkillForNextUnit(currentQuestion.skill);
    nextQuestion = generateQuestionForSkill(nextSkill);
  } else {
    if (correctGuess) {
      const nextSkill = getHarderSkill(currentQuestion.skill);
      if (nextSkill == Skill.ADDITION_TRIPLE) {
        nextQuestion = getRandomAdditionQuestion(100, 401, nextSkill);
      } else {
        nextQuestion = generateQuestionForSkill(nextSkill);
      }
    } else {
      const nextSkill = getEasierSkill(currentQuestion.skill);
      nextQuestion = generateQuestionForSkill(nextSkill);
    }
  }
  return nextQuestion;
};

//Function is used for when the student correctly answers a Diagnostic question
//and is used to determine the next question for adaptive difficulty
const getHarderSkill = (skill: Skill): Skill => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return Skill.ADDITION_DOUBLE;
    case Skill.ADDITION_DOUBLE:
      return Skill.ADDITION_TRIPLE;
    case Skill.ADDITION_TRIPLE:
      return Skill.ADDITION_TRIPLE;
    case Skill.SUBTRACTION_SINGLE:
      return Skill.SUBTRACTION_DOUBLE;
    case Skill.SUBTRACTION_DOUBLE:
      return Skill.SUBTRACTION_TRIPLE;
    case Skill.SUBTRACTION_TRIPLE:
      return Skill.SUBTRACTION_TRIPLE;
    case Skill.EQUAL_GROUP_10_ITEMS:
      return Skill.MULTIPLICATION_5;
    case Skill.MULTIPLICATION_5:
      return Skill.MULTIPLICATION_10;
    case Skill.MULTIPLICATION_10:
      return Skill.MULTIPLICATION_10;
    case Skill.EQUAL_SHARING_8_ITEMS:
      return Skill.DIVIDE_12_EQUALLY;
    case Skill.DIVIDE_12_EQUALLY:
      return Skill.DIVIDE_100;
    case Skill.DIVIDE_100:
      return Skill.DIVIDE_100;
    default:
      return null;
  }
};
//Function is used for when the student incorrectly answers a Diagnostic question
//and is used to determine the next question for adaptive difficulty
const getEasierSkill = (skill: Skill): Skill => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return Skill.ADDITION_SINGLE;
    case Skill.ADDITION_DOUBLE:
      return Skill.ADDITION_SINGLE;
    case Skill.ADDITION_TRIPLE:
      return Skill.ADDITION_DOUBLE;
    case Skill.SUBTRACTION_SINGLE:
      return Skill.SUBTRACTION_SINGLE;
    case Skill.SUBTRACTION_DOUBLE:
      return Skill.SUBTRACTION_SINGLE;
    case Skill.SUBTRACTION_TRIPLE:
      return Skill.SUBTRACTION_DOUBLE;
    case Skill.EQUAL_GROUP_10_ITEMS:
      return Skill.EQUAL_GROUP_10_ITEMS;
    case Skill.MULTIPLICATION_5:
      return Skill.EQUAL_GROUP_10_ITEMS;
    case Skill.MULTIPLICATION_10:
      return Skill.MULTIPLICATION_5;
    case Skill.EQUAL_SHARING_8_ITEMS:
      return Skill.EQUAL_SHARING_8_ITEMS;
    case Skill.DIVIDE_12_EQUALLY:
      return Skill.EQUAL_SHARING_8_ITEMS;
    case Skill.DIVIDE_100:
      return Skill.DIVIDE_12_EQUALLY;
    default:
      return null;
  }
};

//This function is used to switch to the next skill in the Diagnostic test
const getSkillForNextUnit = (skill: Skill): Skill => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
    case Skill.ADDITION_DOUBLE:
    case Skill.ADDITION_TRIPLE:
      return Skill.SUBTRACTION_SINGLE;
    case Skill.SUBTRACTION_SINGLE:
    case Skill.SUBTRACTION_DOUBLE:
    case Skill.SUBTRACTION_TRIPLE:
      return Skill.EQUAL_GROUP_10_ITEMS;
    case Skill.EQUAL_GROUP_10_ITEMS:
    case Skill.MULTIPLICATION_5:
    case Skill.MULTIPLICATION_10:
      return Skill.EQUAL_SHARING_8_ITEMS;
    default:
      return null;
  }
};

// Function that generates the Diagnostic Test Questions
// Currently only applies to grades 1 - 3
export const generateQuestionsForDiagnostic = () => {
  let questionsPerSection = NUM_QUESTIONS;
  let questions: Question[] = [];
  for (let grade = 0; grade < 3; grade++) {
    for (let i = 0; i < units.length; i++) {
      const unit = units[i];
      const skill = unit.skills[grade];
      for (let j = 0; j < questionsPerSection; j++) {
        const question = generateQuestionForSkill(skill);
        questions.push(question);
      }
    }
  }

  return questions;
};
