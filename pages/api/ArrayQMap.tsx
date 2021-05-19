export const ArrayQMap = {
  1: {
    1: "/ArrayQ/2X3.png",
  },
  2: {
    2: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
  },
  3: {
    1: "/ArrayQ/2X3.png",
    3: "/ArrayQ/2X3.png",
  },
  4: {
    1: "/ArrayQ/2X2.png",
    2: "/ArrayQ/2X2.png",
    4: "/ArrayQ/2X2.png",
  },
  5: {
    5: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
  },
  6: {
    2: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
    6: "/ArrayQ/2X3.png",
  },
  7: {
    1: "/ArrayQ/2X3.png",
    7: "/ArrayQ/2X3.png",
  },
  8: {
    2: "/ArrayQ/2X4.png",
    4: "/ArrayQ/2X3.png",
    8: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
  },
  9: {
    3: "/ArrayQ/3X3.png",
    9: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
  },
  10: {
    2: "/ArrayQ/2X5.png",
    5: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
    10: "/ArrayQ/2X3.png",
  },
  11: {
    1: "/ArrayQ/2X3.png",
    11: "/ArrayQ/2X3.png",
  },
  12: {
    2: "/ArrayQ/2X6.png",
    3: "/ArrayQ/3X4.png",
    6: "/ArrayQ/2X3.png",
    4: "/ArrayQ/2X3.png",
    1: "/ArrayQ/2X3.png",
    12: "/ArrayQ/2X3.png",
  },
};
export function createArrayImage(a, b): string {
  console.log(a + "a");
  console.log(b + "b");
  let arrayImage = ArrayQMap[a][b];
  return arrayImage;
}
