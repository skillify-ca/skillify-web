const handleOnSaveButtonClick = (
  separateBadges,
  data,
  unitBadges,
  saveAddedBadges,
  saveRemovedBadges
) => {
  const addedBadges = separateBadges(
    data.intro_course_unit,
    unitBadges
  ).addedBadges;
  const removedBadges = separateBadges(
    data.intro_course_unit,
    unitBadges
  ).removedBadges;

  if (addedBadges.length > 0) {
    saveAddedBadges({
      variables: {
        objects: addedBadges,
      },
    });
  }
  if (removedBadges.length > 0) {
    saveRemovedBadges({
      variables: {
        objects: removedBadges,
      },
    });
  }
  alert("Your badge selections have been updated.");
};
export default handleOnSaveButtonClick;
