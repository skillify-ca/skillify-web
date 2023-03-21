import { differenceInCalendarDays } from 'date-fns';

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