export const getBadgeId = (slug: string, currentLevel: number) => {
  if (slug != null) {
    if (slug.toLowerCase() == "numbers") {
      return 0;
    } else if (slug.toLowerCase() == "addition") {
      switch (currentLevel) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
      }
    } else if (slug.toLowerCase() == "subtraction") {
      switch (currentLevel) {
        case 1:
          return 4;
        case 2:
          return 6;
        case 3:
          return 7;
      }
    } else if (slug.toLowerCase() == "multiplication") {
      switch (currentLevel) {
        case 1:
          return 8;
        case 2:
          return 9;
        case 3:
          return 10;
      }
    } else if (slug.toLowerCase() == "division") {
      switch (currentLevel) {
        case 1:
          return 11;
        case 2:
          return 12;
        case 3:
          return 13;
      }
    }
  }
  return 0;
};
