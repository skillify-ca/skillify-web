import { Question } from "../question";
import { generateQuestionForSkill } from "../questionGenerator";
import { Skill } from "../skill";

const NUM_QUESTIONS = 5;

type Topic = {
  name: string;
  skills: Skill[];
};

const topics: Topic[] = [
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

export const generateQuestionsForDiagnostic = () => {
  let questionsPerSection = NUM_QUESTIONS;
  let questions: Question[] = [];

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    for (let j = 0; j < topic.skills.length; j++) {
      const skill = topic.skills[j];
      for (let j = 0; j < questionsPerSection; j++) {
        const question = generateQuestionForSkill(skill);
        questions.push(question);
      }
    }
  }

  return questions;
};
