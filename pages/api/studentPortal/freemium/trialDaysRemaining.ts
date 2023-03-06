import { addDays, differenceInCalendarDays } from 'date-fns';

//used for freemium feature calculations.
//createdAt comes from fetchUserRole query and trialLength is manually inputted.
export const trialDaysRemaining = (createdAt:Date, trialLength:number) => {
    const daysFromUserCreation = addDays(new Date(createdAt), trialLength);
      const daysRemaining = differenceInCalendarDays(daysFromUserCreation, new Date());
      if (daysRemaining<=0){
        return 0
      } else {
        return daysRemaining
      }
};