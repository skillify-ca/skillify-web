import { addDays, differenceInCalendarDays, isWithinInterval, subDays } from 'date-fns';
import { UserRoleData } from '../../../graphql/studentPortal/users/fetchUserRole';

//used for freemium feature calculations
//daysOld used as a variable to check users that are "x" days old
export const trialDaysRemaining = (user: UserRoleData, trialLength, daysOld) => {
  if (user.userRole === "freemium") {
    const daysOldForUser = subDays(new Date(), daysOld);
    const daysFromUserCreation = addDays(new Date(user.createdAt), trialLength);
    if (isWithinInterval(new Date(user.createdAt), { start: daysOldForUser, end: new Date() })) {
      const daysRemaining = differenceInCalendarDays(daysFromUserCreation, new Date());
      return daysRemaining;
    }
  }
  return null;
};

export const elapsedDays = (user: UserRoleData) => {
  if (user.userRole === "freemium") {
    const currentDate = new Date();
      const elapsedDays = differenceInCalendarDays(currentDate, new Date(user.createdAt));
      return elapsedDays;
    }
};


