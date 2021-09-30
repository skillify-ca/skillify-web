import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { Question } from "../question";
import { getSkillsForUnit, Skill, Unit } from "../skill";

const PASSING_GRADE = 0.75;

type GradedQuestion = {
  question: Question;
  grade: string;
  guess: string;
};

export const getResultForSkill = (
  skill: Skill,
  results: DiagnosticState
): string => {
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

export const getGradedQuestionsForUnit = (
  unit: Unit,
  results: DiagnosticState
): GradedQuestion[] => {
  // All questions
  const questionsWithGradedGuesses: GradedQuestion[] = results.questions.map(
    (it, index) => ({
      question: it,
      grade: results.guessAns[index],
      guess: results.guesses[index],
    })
  );
  const skills: Skill[] = getSkillsForUnit(unit);
  const questionsForUnit: GradedQuestion[] = questionsWithGradedGuesses.filter(
    (it) => skills.includes(it.question.skill)
  );
  return questionsForUnit;
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

export const getGradeLevelForUnit = (unit: Unit, results: DiagnosticState) => {
  switch (unit) {
    case Unit.ADDITION:
      if (getResultForSkill(Skill.ADDITION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.ADDITION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else if (
        getResultForSkill(Skill.ADDITION_SINGLE, results) == "Got it!"
      ) {
        return "Grade 1";
      } else {
        return "JK/SK";
      }
    case Unit.SUBTRACTION:
      if (getResultForSkill(Skill.SUBTRACTION_TRIPLE, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.SUBTRACTION_DOUBLE, results) == "Got it!"
      ) {
        return "Grade 2";
      } else if (
        getResultForSkill(Skill.SUBTRACTION_SINGLE, results) == "Got it!"
      ) {
        return "Grade 1";
      } else {
        return "JK/SK";
      }
    case Unit.MULTIPLICATION:
      if (getResultForSkill(Skill.MULTIPLICATION_10, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.MULTIPLICATION_5, results) == "Got it!"
      ) {
        return "Grade 2";
      } else if (
        getResultForSkill(Skill.EQUAL_GROUP_10_ITEMS, results) == "Got it!"
      ) {
        return "Grade 1";
      } else {
        return "JK/SK";
      }
    case Unit.DIVISION:
      if (getResultForSkill(Skill.DIVIDE_100, results) == "Got it!") {
        return "Grade 3";
      } else if (
        getResultForSkill(Skill.DIVIDE_12_EQUALLY, results) == "Got it!"
      ) {
        return "Grade 2";
      } else if (
        getResultForSkill(Skill.EQUAL_SHARING_8_ITEMS, results) == "Got it!"
      ) {
        return "Grade 1";
      } else {
        return "JK/SK";
      }
  }
};

//Summary Text is displayed at the end of the Diagnostic Test and success is relative to the user's grade level
export const getSummaryText = (
  gradeLevel: number,
  inputGradeLevel: number,
  name: string
) => {
  let difference = inputGradeLevel - gradeLevel;
  if (name == "") {
    name = "Your child";
  }
  if (difference == 0) {
    return (
      "Amazing work! " +
      name +
      " has met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Encourage them to solve harder problems to keep them challenged."
    );
  } else if (difference == 1) {
    return (
      "Great work! " +
      name +
      " has nearly met the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  } else if (difference >= 2) {
    return (
      "Good effort! " +
      name +
      " requires extra practice to meet the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Provide them with supplemental resources to address their knowledge gaps."
    );
  } else if (difference < 0) {
    return (
      "Truly impressive! " +
      name +
      " has exceeded the expectations of the Ontario grade " +
      inputGradeLevel +
      " curriculum. Keep up the good work and welcome challenges with open arms!"
    );
  } else {
    return "";
  }
};

export const getCalculatedGrade = (results: DiagnosticState) => {
  let gradeLevel = 0;
  if (getGradeLevelForUnit(Unit.ADDITION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForUnit(Unit.ADDITION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForUnit(Unit.ADDITION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForUnit(Unit.ADDITION, results) == "JK/SK") {
    gradeLevel = gradeLevel + 0;
  }
  if (getGradeLevelForUnit(Unit.DIVISION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForUnit(Unit.DIVISION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForUnit(Unit.DIVISION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForUnit(Unit.DIVISION, results) == "JK/SK") {
    gradeLevel = gradeLevel + 0;
  }
  if (getGradeLevelForUnit(Unit.MULTIPLICATION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForUnit(Unit.MULTIPLICATION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForUnit(Unit.MULTIPLICATION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForUnit(Unit.MULTIPLICATION, results) == "JK/SK") {
    gradeLevel = gradeLevel + 0;
  }
  if (getGradeLevelForUnit(Unit.SUBTRACTION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForUnit(Unit.SUBTRACTION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForUnit(Unit.SUBTRACTION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForUnit(Unit.SUBTRACTION, results) == "JK/SK") {
    gradeLevel = gradeLevel + 0;
  }
  //Takes the average grade level for all the units (addition, subtraction, multiplication, division)
  gradeLevel = Math.round(gradeLevel / 4);
  return gradeLevel;
};
