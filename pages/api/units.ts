import courseData, { getCourse } from "./explore";

export const lockedUnits = (courseTitle, levelIndex) => {
  return getCourse(courseTitle).levels[levelIndex - 1].units.filter((it) => {
    return it.locked;
  });
};

export const unlockedUnits = (courseTitle, levelIndex) => {
  return getCourse(courseTitle).levels[levelIndex - 1].units.filter((it) => {
    return !it.locked;
  });
};
