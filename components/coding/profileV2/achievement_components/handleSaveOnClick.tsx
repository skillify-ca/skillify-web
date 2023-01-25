const handleOnSaveButtonClick = (
  separateBadges,
  findBadgeDiff,
  data,
  unitBadges,
  saveAddedBadges,
  saveRemovedBadges
) => {
  const addedBadges = separateBadges(
    findBadgeDiff(data.intro_course_unit, unitBadges).changedBadgesList,
    findBadgeDiff(data.intro_course_unit, unitBadges).initialBadgeArray
  ).addedBadges;
  const removedBadges = separateBadges(
    findBadgeDiff(data.intro_course_unit, unitBadges).changedBadgesList,
    findBadgeDiff(data.intro_course_unit, unitBadges).initialBadgeArray
  ).removedBadges;
  if (addedBadges.length > 0) {
    saveAddedBadges({
      variables: {
        objects: addedBadges,
      },
    });
  }
  if (removedBadges.length > 0) {
    removedBadges.forEach((badge) => {
      saveRemovedBadges({
        variables: {
          badgeId: badge.badgeId,
          userId: badge.userId,
        },
      });
    });
  }
  alert("Your badge selections have been updated.");
};
export default handleOnSaveButtonClick;
