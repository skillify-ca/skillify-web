export const ArrayQMap = {
  1: {
    1: "/ArrayQ/1X1.png",
  },
  2: {
    2: "/ArrayQ/1X2.png",
    1: "/ArrayQ/1X2.png",
  },
  3: {
    1: "/ArrayQ/1X3.png",
    3: "/ArrayQ/1X3.png",
  },
  4: {
    1: "/ArrayQ/1X4.png",
    2: "/ArrayQ/2X2.png",
    4: "/ArrayQ/1X4.png",
  },
  5: {
    5: "/ArrayQ/1X5.png",
    1: "/ArrayQ/1X5.png",
  },
  6: {
    2: "/ArrayQ/2X3.png",
    1: "/ArrayQ/1X6.png",
    6: "/ArrayQ/1X6.png",
  },
  7: {
    1: "/ArrayQ/1X7.png",
    7: "/ArrayQ/1X7.png",
  },
  8: {
    2: "/ArrayQ/2X4.png",
    4: "/ArrayQ/2X4.png",
    8: "/ArrayQ/1X8.png",
    1: "/ArrayQ/1X8.png",
  },
  9: {
    3: "/ArrayQ/3X3.png",
    9: "/ArrayQ/1X9.png",
    1: "/ArrayQ/1X9.png",
  },
  10: {
    2: "/ArrayQ/2X5.png",
    5: "/ArrayQ/2X3.png",
    1: "/ArrayQ/1X10.png",
    10: "/ArrayQ/1X10.png",
  },
  11: {
    1: "/ArrayQ/1X11.png",
    11: "/ArrayQ/1X11.png",
  },
  12: {
    2: "/ArrayQ/2X6.png",
    3: "/ArrayQ/3X4.png",
    6: "/ArrayQ/2X3.png",
    4: "/ArrayQ/2X3.png",
    1: "/ArrayQ/1X12.png",
    12: "/ArrayQ/1X12.png",
  },
};
export function createArrayImage(a, b): string {
  let arrayImage = ArrayQMap[a][b];
  return arrayImage;
}
