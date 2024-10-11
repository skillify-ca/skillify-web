import { Unit } from "../../units";
import { getPersonFinanceIntroductionLesson } from "./introduction";
import { getPersonFinanceTrackSpendingLesson } from "./trackSpending";

enum PersonalFinanceLesson {
  // basics
  Introduction = "introduction",
  TrackSpending = "track-spending",

  // lower
  LowerCosts = "lower-costs",
  PayDownDebt = "pay-down-debt",

  // higher
  HigherIncome = "higher-income",
  NegotiateSalary = "negotiate-salary",

  // save
  EmergencyFund = "emergency-fund",
  SaveForGoals = "save-for-goals",

  // invest
  InvestTaxFree = "invest-tax-free",
  SaveForRetirement = "save-for-retirement",

  LiveLife = "live-life",
}

export const personalFinanceUnits: Unit[] = [
  {
    title: "Intro",
    nodes: [
      {
        title: "Lesson 1",
        description: "Introduction to Personal Finance",
        type: "lesson",
        link: "introduction",
      },
      {
        title: "Lesson 2",
        description: "Track Your Spending",
        type: "lesson",
        link: "track-spending",
      },
    ],
  },
  {
    title: "Lower Your Costs",
    nodes: [
      {
        title: "Lesson 3",
        description: "Lower Your Costs",
        type: "lesson",
        link: "lower-costs",
      },
      {
        title: "Lesson 4",
        description: "Pay Down Debt",
        type: "lesson",
        link: "pay-down-debt",
      },
    ],
  },
  {
    title: "Increase Your Income",
    nodes: [
      {
        title: "Lesson 5",
        description: "Increase Your Income",
        type: "lesson",
        link: "higher-income",
      },
      {
        title: "Lesson 6",
        description: "Negotiate Your Salary",
        type: "lesson",
        link: "negotiate-salary",
      },
    ],
  },
  {
    title: "Save For Your Future",
    nodes: [
      {
        title: "Lesson 7",
        description: "Build an Emergency Fund",
        type: "lesson",
        link: "emergency-fund",
      },
      {
        title: "Lesson 8",
        description: "Save For Your Goals",
        type: "lesson",
        link: "save-for-goals",
      },
    ],
  },
  {
    title: "Invest For Your Future",
    nodes: [
      {
        title: "Lesson 9",
        description: "Invest Tax-Free",
        type: "lesson",
        link: "invest-tax-free",
      },
      {
        title: "Lesson 10",
        description: "Save For Retirement",
        type: "lesson",
        link: "save-for-retirement",
      },
    ],
  },
  {
    title: "Conclusion",
    nodes: [
      {
        title: "Lesson 11",
        description: "Live Your Life",
        type: "lesson",
        link: "live-life",
      },
    ],
  },
];

export function getLessonForPersonalFinanceCourse(
  lessonId: PersonalFinanceLesson
) {
  switch (lessonId) {
    case PersonalFinanceLesson.Introduction:
      return getPersonFinanceIntroductionLesson();
    case PersonalFinanceLesson.TrackSpending:
      return getPersonFinanceTrackSpendingLesson();
  }

  console.log("lessonId", lessonId);
  throw new Error(`Could not find lessons for ${lessonId}`);
}
