import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { Question } from "../question";
import { Skill, Topic } from "../skill";

const PASSING_GRADE = 1.0;

type GradedQuestion = {
  question: Question;
  grade: string;
  guess: string;
};

export const getResultForSkill = (skill: Skill, results: DiagnosticState) => {
  const questionsWithGuesses: GradedQuestion[] = results.questions.map(
    (it, index) => ({
      question: it,
      grade: results.guessAns[index],
      guess: results.guesses[index],
    })
  );
  const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
    (it) => it.question.skill === skill
  );
  const correctGuesses = filteredQuestionsWithGuesses.filter(
    (it) => it.grade === "Correct"
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
  const questionsWithGuesses: GradedQuestion[] = results.questions.map(
    (it, index) => ({
      question: it,
      grade: results.guessAns[index],
      guess: results.guesses[index],
    })
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

export const getGradesForSkill = (
  skill: Skill,
  results: DiagnosticState
): GradedQuestion[] => {
  const questionsWithGrades: GradedQuestion[] = results.questions.map(
    (it, index) => ({
      question: it,
      grade: results.guessAns[index],
      guess: results.guesses[index],
    })
  );
  const filteredQuestionsWithGrades = questionsWithGrades.filter(
    (it) => it.question.skill === skill
  );

  return filteredQuestionsWithGrades.filter(
    (it) => it.question.skill === skill.toString()
  );
};

let skillCount = 0;
let summary = "";
export const countCorrectAns = (result: Array<string>) => {
  for (let i = 0; i < result.length; i++)
    if (result[i] == "Correct") {
      skillCount++;
    }
  return skillCount;
};
export const EvidenceSummaryText = (correctAns: number) => {
  if (correctAns == 3) {
    summary =
      "Perfect! Your child has answered every question correctly and is ready to practice this skill at the third grade standard.";
  } else {
    summary =
      "Great work, mistakes are part of the learning journey! Go over these questions with your child and have them re-take the diagnostic once they feel more confident.";
  }
  return summary;
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

export const getSummaryText = (gradeLevel: number, inputGradeLevel: number, name: string) => {
  let difference = inputGradeLevel - gradeLevel;
  if (difference == 0) {
    return (
      "Amazing work! " + name + " has met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Encourage them to solve harder problems to keep them challenged."
    );
  } else if (difference == 1) {
    return (
      "Great work! "+ name + " has nearly met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  } else if (difference >= 2) {
    return (
      "Good effort! "+ name + " requires extra practice to meet the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  } else if (difference < 0) {
    return (
      "Truly impressive! "+ name +" has exceeded the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Keep up the good work and welcome challenges with open arms!"
    );
  } else {
    return "";
  }
};

export const getCalculatedGrade = (results : DiagnosticState) => {
  let gradeLevel = 0;
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  gradeLevel = Math.round(gradeLevel / 4);
  return gradeLevel
}