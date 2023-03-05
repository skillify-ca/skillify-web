import { addDays, differenceInCalendarDays, isWithinInterval, subDays } from 'date-fns';

//used for freemium feature calculations
//daysOld used as a variable to check users that are "x" days old
export const trialDaysRemaining = (createdAt:Date, trialLength, daysOld) => {
    const daysOldForUser = subDays(new Date(), daysOld);
    const daysFromUserCreation = addDays(new Date(createdAt), trialLength);
    if (isWithinInterval(new Date(createdAt), { start: daysOldForUser, end: new Date() })) {
      const daysRemaining = differenceInCalendarDays(daysFromUserCreation, new Date());
      return daysRemaining;
    }
    return null;
};

export const elapsedDays = (createdAt:Date, trialLength:number) => {
    const currentDate = new Date();
      const elapsedDays = differenceInCalendarDays(currentDate, new Date(createdAt));
      if (elapsedDays>trialLength){
        return trialLength
      } else {
        return elapsedDays
      }
    }


