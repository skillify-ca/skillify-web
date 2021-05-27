import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { Question } from "../question";
import { Skill, Topic } from "../skill";

const PASSING_GRADE = 0.5;

type QuestionGuess = {
  question: Question;
  guess: string;
};

export const getResultForSkill = (skill: Skill, results: DiagnosticState) => {
  const questionsWithGuesses: QuestionGuess[] = results.questions.map(
    (it, index) => ({ question: it, guess: results.guessAns[index] })
  );
  const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
    (it) => it.question.skill === skill
  );
  const correctGuesses = filteredQuestionsWithGuesses.filter(
    (it) => it.guess === "Correct"
  );
  if (
    correctGuesses.length / filteredQuestionsWithGuesses.length >=
    PASSING_GRADE
  ) {
    return "Got it!";
  } else {
    return "Not yet";
  }
};

export const getQuestionForSkill = (skill: Skill, results: DiagnosticState) => {
  const questionsWithGuesses: QuestionGuess[] = results.questions.map(
    (it, index) => ({ question: it, guess: results.guessAns[index] })
  );
  const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
    (it) => it.question.skill === skill
  );

  const skillDescriptions = filteredQuestionsWithGuesses.filter(
    (it) => it.question.skill === skill.toString()
  );

  const questions = skillDescriptions.map((item) => item.question.text);
  return questions;
};

export const getAnswerForSkill = (skill: Skill, results: DiagnosticState) => {
  const questionsWithGuesses: QuestionGuess[] = results.questions.map(
    (it, index) => ({ question: it, guess: results.guessAns[index] })
  );
  const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
    (it) => it.question.skill === skill
  );

  const guessAnswers = filteredQuestionsWithGuesses.filter(
    (it) => it.question.skill === skill.toString()
  );

  const questions = guessAnswers.map((item) => item.guess);
  return questions;
};

export const getGradeLevelForTopic = (
  topic: Topic,
  results: DiagnosticState
) => {
  switch (topic) {
    case Topic.ADDITION:
      if (getResultForSkill(Skill.ADDITION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.ADDITION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.SUBTRACTION:
      if (getResultForSkill(Skill.SUBTRACTION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.SUBTRACTION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.MULTIPLICATION:
      if (getResultForSkill(Skill.MULTIPLICATION_10, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.MULTIPLICATION_5, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
    case Topic.DIVISION:
      if (getResultForSkill(Skill.DIVIDE_100, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.DIVIDE_12_EQUALLY, results) == "Got it!"
      ) {
        return "Grade 2";
      } else {
        return "Grade 1";
      }
  }
};

export const getSkillsForTopic = (topic: Topic) => {
  switch (topic) {
    case Topic.ADDITION:
      return [
        Skill.ADDITION_SINGLE,
        Skill.ADDITION_DOUBLE,
        Skill.ADDITION_TRIPLE,
      ];
    case Topic.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
      ];
    case Topic.MULTIPLICATION:
      return [
        Skill.EQUAL_GROUP_10_ITEMS,
        Skill.MULTIPLICATION_5,
        Skill.MULTIPLICATION_10,
      ];
    case Topic.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
      ];
  }
  return [];
};

export const getSummaryText = (gradeLevel: number, inputGradeLevel: number) => {
  let difference = inputGradeLevel - gradeLevel;
  if (difference == 0) {
    return (
      "Amazing work! Your child has met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Encourage them to solve harder problems to keep them challenged."
    );
  } else if (difference < 0) {
    return (
      "Truly impressive! Not only has your child met Ontario grade " +
      inputGradeLevel +
      " curriculum but they have in fact exceeded expectations. Keep at the good work and welcome challeneges with open arms!"
    );
  } else if (difference == -1) {
    return (
      "Great work! Your child has nearly met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  } else {
    return (
      "Great effort! Your child requires extra practice to meet the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  }
};
