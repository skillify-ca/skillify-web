import { addDays, differenceInCalendarDays } from "date-fns";

import {
  backendUnit,
  githubUnit,
  reactUnit,
  tailwindUnit,
  Unit,
  webIntroUnit,
} from "../units";

//hard code TRIAL LENGTH DATE saved in this file. It is saved in only this place and then imported throughout the code base.
export const TOTAL_TRIAL_DAYS = 14;

//used for freemium feature calculations.
//createdAt comes from fetchUserRole query and trialLength is manually inputted.

export const elapsedDays = (createdAt: Date) => {
  const currentDate = new Date();
  const trialLength = TOTAL_TRIAL_DAYS;
  const elapsedDays = differenceInCalendarDays(
    currentDate,
    new Date(createdAt)
  );
  if (elapsedDays > trialLength) {
    return trialLength;
  } else if (elapsedDays < 0) {
    return 0;
  } else {
    return elapsedDays;
  }
};

//used for freemium feature calculations.
//createdAt comes from fetchUserRole query and trialLength is manually inputted.
export const calculateRemainingTrialDays = (createdAt: Date) => {
  const trialLength = TOTAL_TRIAL_DAYS;
  const trialEndDate = addDays(new Date(createdAt), trialLength);
  const daysRemaining = differenceInCalendarDays(trialEndDate, new Date());

  return daysRemaining <= 0 ? 0 : daysRemaining;
};

export const paidUnits: Unit[] = [
  webIntroUnit,
  githubUnit,
  tailwindUnit,
  transformReactUnit(reactUnit),
  transformBackendUnit(backendUnit),
];

function transformReactUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map((node, index) => {
      if (index === unit.nodes.length - 1) {
        return {
          link: "https://www.joinskillify.com/call",
          type: "freemiumMessage",
        };
      } else {
        return node;
      }
    }),
  };
}

function transformBackendUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map(() => {
      return {
        type: "grayedOut",
      };
    }),
  };
}
