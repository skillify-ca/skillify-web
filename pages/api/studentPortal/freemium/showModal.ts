import { differenceInHours } from "date-fns";
import { useSelector } from "react-redux";
import { profileSelector } from "../../../../redux/profileSlice";

export function convertDateToUTC(date) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); }

export function showModal() {
    const { userRole, userProfileData } = useSelector(profileSelector);
    const lastSeenTime = userProfileData.lastSeen;
    const lastSeenDateTime = new Date(lastSeenTime);
    const currentDateTime = new Date();
    const timeDifferenceInHours = differenceInHours(
      currentDateTime,
      lastSeenDateTime,
    );

    if (
      timeDifferenceInHours <= 24 &&
      (userRole === "freemium" || userRole === "paid")
    ) {
      return true;
    } else {
      return false;
    }
  }