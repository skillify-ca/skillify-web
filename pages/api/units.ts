import courseData from "./explore";
import { Grade } from "./skill";

export const lockedUnits = (courseIndex) => {
  return courseData.math.levels[courseIndex].units.filter((it) => {
    return it.locked;
  });
};

export const unlockedUnits = (courseIndex) => {
  return courseData.math.levels[courseIndex].units.filter((it) => {
    return !it.locked;
  });
};
