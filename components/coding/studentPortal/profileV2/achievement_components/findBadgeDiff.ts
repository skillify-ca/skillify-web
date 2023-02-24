import { IntroCourseUnit } from "../../../../graphql/coding/userBadges/fetchUserBadges";
import { CodingBadge } from "../../../../graphql/coding/userBadges/fetchUserBadges";

const findBadgeDiff = (
  initialSet: IntroCourseUnit[],
  currentSet: IntroCourseUnit[],
  userId: string
) => {
  const initialBadgeArray = initialSet.flatMap((unit) =>
    unit.coding_badges.map((badge) => badge)
  );
  const finalBadgeArray = currentSet.flatMap((unit) =>
    unit.coding_badges.map((badge) => badge)
  );

  const changedBadgesList = finalBadgeArray.filter((finalBadge) => {
    const initialBadge = initialBadgeArray.find(
      (initialBadge) =>
        finalBadge.id === initialBadge.id &&
        finalBadge.user_coding_badges === initialBadge.user_coding_badges
    );
    return !initialBadge;
  });

  const addedBadgesTemp: CodingBadge[] = [];
  const removedBadgesTemp: CodingBadge[] = [];
  changedBadgesList.forEach((badge: CodingBadge) => {
    const index = initialBadgeArray.findIndex(
      (initialBadge) => initialBadge.id === badge.id
    );
    if (
      badge.user_coding_badges.length > 0 &&
      initialBadgeArray.find((initBadge) => badge.id == initBadge.id)
        .user_coding_badges.length === 0
    ) {
      addedBadgesTemp.push(badge);
    } else if (
      badge.user_coding_badges.length === 0 &&
      initialBadgeArray[index].user_coding_badges.length > 0
    ) {
      removedBadgesTemp.push(badge);
    }
  });
  const addedBadges = addedBadgesTemp.map((badge) => {
    return { badgeId: badge.id, userId: userId };
  });
  const removedBadges = removedBadgesTemp.map((badge) => {
    return { badgeId: badge.id, userId: userId };
  });

  return { addedBadges, removedBadges };
};

export default findBadgeDiff;
