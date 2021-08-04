const MULTIPLICATION_TWO = {
  answer: "2,4,8,3,7,5,0,6,9,1",
  questions: [
    {
      parts: [{ text: "2 x 6 = 1" }, { tileData: { type: "tile", index: 0 } }],
    },
    {
      parts: [
        { tileData: { type: "tile", index: 1 } },
        { text: " x 2 = " },
        { tileData: { type: "tile", index: 2 } },
      ],
    },
    {
      parts: [
        { text: "2 x " },
        { tileData: { type: "tile", index: 3 } },
        { text: " = 6" },
      ],
    },
    {
      parts: [{ tileData: { type: "tile", index: 4 } }, { text: " x 2 = 14" }],
    },
    {
      parts: [
        { text: "2 x " },
        { tileData: { type: "tile", index: 5 } },
        { text: " = 1" },
        { tileData: { type: "tile", index: 6 } },
      ],
    },
    {
      parts: [{ text: "2 x 8 = 1" }, { tileData: { type: "tile", index: 7 } }],
    },
    {
      parts: [
        { tileData: { type: "tile", index: 8 } },
        { text: " x 2 = " },
        { tileData: { type: "tile", index: 9 } },
        { text: "8" },
      ],
    },
  ],
};

const MULTIPLICATION_THREE = {
  answer: "5,4,9,7,2,1,6,8,3,0",
  questions: [
    {
      parts: [{ text: "5 x 3 = 1" }, { tileData: { type: "tile", index: 0 } }],
    },
    {
      parts: [{ text: "8 x 3 = 2" }, { tileData: { type: "tile", index: 1 } }],
    },
    {
      parts: [
        { text: "3 x " },
        { tileData: { type: "tile", index: 2 } },
        { text: " = 2" },
        { tileData: { type: "tile", index: 3 } },
      ],
    },
    {
      parts: [
        { text: "3 x 7 = " },
        { tileData: { type: "tile", index: 4 } },
        { tileData: { type: "tile", index: 5 } },
      ],
    },
    {
      parts: [
        { tileData: { type: "tile", index: 6 } },
        { text: " x 3 = 1" },
        { tileData: { type: "tile", index: 7 } },
      ],
    },
    {
      parts: [
        { text: "10 x 3 = " },
        { tileData: { type: "tile", index: 8 } },
        { tileData: { type: "tile", index: 9 } },
      ],
    },
  ],
};

const MULTIPLICATION_EIGHT = {
  answer: "3,5,0,4,8,9,2,1,7,6",
  questions: [
    {
      parts: [
        { text: "8 x 4 = " },
        { tileData: { type: "tile", index: 0 } },
        { text: "2" },
      ],
    },
    {
      parts: [
        { tileData: { type: "tile", index: 1 } },
        { text: " x 8 = 4" },
        { tileData: { type: "tile", index: 2 } },
      ],
    },
    {
      parts: [
        { text: "8 x 6 = " },
        { tileData: { type: "tile", index: 3 } },
        { text: "8" },
      ],
    },
    {
      parts: [{ tileData: { type: "tile", index: 4 } }, { text: " x 8 = 64" }],
    },
    {
      parts: [
        { text: "8 x " },
        { tileData: { type: "tile", index: 5 } },
        { text: " = 7" },
        { tileData: { type: "tile", index: 6 } },
      ],
    },
    {
      parts: [
        { text: "2 x 8 = " },
        { tileData: { type: "tile", index: 7 } },
        { text: "6" },
      ],
    },
    {
      parts: [
        { tileData: { type: "tile", index: 8 } },
        { text: " x 8 = 5" },
        { tileData: { type: "tile", index: 9 } },
      ],
    },
  ],
};

export const PUZZLE_DATA = {
  "2": MULTIPLICATION_TWO,
  "3": MULTIPLICATION_THREE,
  "8": MULTIPLICATION_EIGHT,
};
