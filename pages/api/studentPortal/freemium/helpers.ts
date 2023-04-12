import { addDays, differenceInCalendarDays } from 'date-fns';

import {
    backendUnit,
    githubUnit,
    reactUnit,
    tailwindUnit,
    Unit,
    webIntroUnit,
} from "../units";

//hard code TRIAL LENGTH DATE saved in this file. It is saved in only this place and then imported throughout the code base.
export const TOTAL_TRIAL_DAYS = 14

//used for freemium feature calculations.
//createdAt comes from fetchUserRole query and trialLength is manually inputted.

export const elapsedDays = (createdAt:Date, trialLength:number) => {
    const currentDate = new Date();
      const elapsedDays = differenceInCalendarDays(currentDate, new Date(createdAt));
      if (elapsedDays>trialLength){
        return trialLength
      } else if (elapsedDays <0) {
        return 0
      } else {
        return elapsedDays
      }
    }

//used for freemium feature calculations.
//createdAt comes from fetchUserRole query and trialLength is manually inputted.
export const trialDaysRemaining = (createdAt:Date, trialLength:number) => {
    const daysFromUserCreation = addDays(new Date(createdAt), trialLength);
      const daysRemaining = differenceInCalendarDays(daysFromUserCreation, new Date());
      if (daysRemaining <= 0 || daysRemaining > trialLength) {
        return 0;
      } else {
        return daysRemaining;
      }
      
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
  