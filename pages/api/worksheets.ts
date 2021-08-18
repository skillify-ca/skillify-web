import {
  Worksheet,
  AdditionSingleDigitWS,
  AdditionDoubleDigitWS,
  AdditionTripleDigitWS,
  SubtractionSingleDigitWS,
  SubtractionDoubleDigitWS,
  SubtractionTripleDigitWS,
  MultiplicationEqualGroup10WS,
  MultiplicationTo5WS,
  MultiplicationTo10WS,
  DivisionEqualSharing8WS,
  Division12EquallyWS,
  Division100WS,
  Subtraction4DigitWS,
  AdditionTripleAddendsWS,
  DivisionTripleDigitDividendWS,
} from "../../components/stories/WorksheetsObj";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import { getResultForSkill } from "./diagnostic/diagnosticGrader";
import { Question } from "./question";
import { Skill } from "./skill";

export const getWorkSheets = (results: DiagnosticState): Worksheet[] => {
  const workSheets: Worksheet[] = results.questions
    .map((it: Question) => it.skill)
    .filter((it: Skill) => getResultForSkill(it, results) === "Not yet")
    .map((it: Skill) => getWorksheetForSkill(it));
  if (workSheets.length === 0) {
    workSheets.push(
      Subtraction4DigitWS,
      AdditionTripleAddendsWS,
      DivisionTripleDigitDividendWS
    );
  }
  const uniqueWorksheets = new Set(workSheets);
  return Array.from(uniqueWorksheets);
};
//Returns a worksheet object based on the skill that the user must improve on
const getWorksheetForSkill = (skill: Skill): Worksheet => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return AdditionSingleDigitWS;
    case Skill.ADDITION_DOUBLE:
      return AdditionDoubleDigitWS;
    case Skill.ADDITION_TRIPLE:
      return AdditionTripleDigitWS;
    case Skill.SUBTRACTION_SINGLE:
      return SubtractionSingleDigitWS;
    case Skill.SUBTRACTION_DOUBLE:
      return SubtractionDoubleDigitWS;
    case Skill.SUBTRACTION_TRIPLE:
      return SubtractionTripleDigitWS;
    case Skill.MULTIPLICATION_5:
      return MultiplicationTo5WS;
    case Skill.MULTIPLICATION_10:
      return MultiplicationTo10WS;
    case Skill.EQUAL_GROUP_10_ITEMS:
      return MultiplicationEqualGroup10WS;
    case Skill.EQUAL_SHARING_8_ITEMS:
      return DivisionEqualSharing8WS;
    case Skill.DIVIDE_12_EQUALLY:
      return Division12EquallyWS;
    case Skill.DIVIDE_100:
      return Division100WS;
  }
};
