export type Noun = {
  type: string;
  singleTitle: string;
  pluralTitle: string;
  colour: string;
  image: string;
};
export type ItemContainerObj = {
  singleTitle: string;
  pluralTitle: string;
};
//If you want to use another colour, you must also add it in the tailwind config under the safe list
export const map = {
  package: {
    singleTitle: "package",
    pluralTitle: "packages",
  },
  case: {
    singleTitle: "case",
    pluralTitle: "cases",
  },
  drawer: {
    singleTitle: "drawer",
    pluralTitle: "drawers",
  },
  bag: {
    singleTitle: "bag",
    pluralTitle: "bags",
  },
  basket: {
    singleTitle: "basket",
    pluralTitle: "baskets",
  },
  box: {
    singleTitle: "box",
    pluralTitle: "boxes",
  },
};
export const coinsMap = {
  silver: {
    type: "coins",
    singleTitle: "silver coin",
    pluralTitle: "silver coins",
    colour: "text-gray-400",
    image: "/images/silver__coin.jpeg",
  },
  copper: {
    type: "coins",
    singleTitle: "copper coin",
    pluralTitle: "copper coins",
    colour: "text-yellow-800",
    image: "/images/copper__coins.jpeg",
  },
  gold: {
    type: "coins",
    singleTitle: "gold coin",
    pluralTitle: "gold coins",
    colour: "text-yellow-400",
    image: "/images/gold__coins2.jpeg",
  },
};
export const animalsMap = {
  aligators: {
    type: "pets",
    singleTitle: "aligator",
    pluralTitle: "aligators",
    colour: "text-green-700",
    image: "/images/aligator.png",
  },
  ducks: {
    type: "pets",
    singleTitle: "duck",
    pluralTitle: "ducks",
    colour: "text-yellow-500",
    image: "/images/duck.jpeg",
  },
  lions: {
    type: "pets",
    singleTitle: "lion",
    pluralTitle: "lions",
    colour: "text-yellow-600",
    image: "/images/lion.png",
  },
};
export const fruitsMap = {
  apples: {
    type: "fruits",
    singleTitle: "apple",
    pluralTitle: "apples",
    colour: "text-red-500",
    image: "/images/apple.jpeg",
  },
  bananas: {
    type: "fruits",
    singleTitle: "banana",
    pluralTitle: "bananas",
    colour: "text-yellow-500",
    image: "/images/banana.png",
  },
  oranges: {
    type: "fruits",
    singleTitle: "orange",
    pluralTitle: "oranges",
    colour: "text-yellow-600",
    image: "/images/orange.jpeg",
  },
  grapes: {
    type: "fruits",
    singleTitle: "grape",
    pluralTitle: "grapes",
    colour: "text-purple-600",
    image: "/images/grape.jpeg",
  },
  watermelons: {
    type: "fruits",
    singleTitle: "watermelon",
    pluralTitle: "watermelon",
    colour: "text-green-600",
    image: "/images/watermelon.png",
  },
};
