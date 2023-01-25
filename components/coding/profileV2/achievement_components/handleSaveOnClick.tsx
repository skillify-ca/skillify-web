const handleOnSaveButtonClick = (
  constructBadgesForMutation,
  data,
  unitBadges,
  saveAddedBadges,
  saveRemovedBadges
) => {
  const addedBadges = constructBadgesForMutation(
    data.intro_course_unit,
    unitBadges
  ).addedBadges;
  const removedBadges = constructBadgesForMutation(
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
