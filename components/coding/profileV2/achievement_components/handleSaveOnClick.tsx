// move handler inside AC component, and add type props
// keep findBadgeDiff
const handleOnSaveButtonClick = (
  findBadgeDiff,
  data,
  unitBadges,
  saveAddedBadges,
  saveRemovedBadges
) => {
  const addedBadges = findBadgeDiff(
    data.intro_course_unit,
    unitBadges
  ).addedBadges;
  const removedBadges = findBadgeDiff(
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
