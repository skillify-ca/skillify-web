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
    colour: "text-gray-400 font-black",
    image: "/images/silver__coin.jpeg",
  },
  copper: {
    type: "coins",
    singleTitle: "copper coin",
    pluralTitle: "copper coins",
    colour: "text-yellow-800 font-black",
    image: "/images/copper__coins.jpeg",
  },
  gold: {
    type: "coins",
    singleTitle: "gold coin",
    pluralTitle: "gold coins",
    colour: "text-yellow-400 font-black",
    image: "/images/gold__coins2.jpeg",
  },
  doge: {
    type: "coins",
    singleTitle: "doge coin",
    pluralTitle: "doge coins",
    colour: "text-yellow-200 font-black",
    image: "/images/dogecoin.png",
  },
  ruby: {
    type: "coins",
    singleTitle: "mario coin",
    pluralTitle: "mario coins",
    colour: "text-red-500 font-black",
    image: "/images/mario_coin.png",
  },
};
export const animalsMap = {
  aligators: {
    type: "pets",
    singleTitle: "aligator",
    pluralTitle: "aligators",
    colour: "text-green-700 font-black",
    image: "/images/aligator.png",
  },
  ducks: {
    type: "pets",
    singleTitle: "duck",
    pluralTitle: "ducks",
    colour: "text-yellow-500 font-black",
    image: "/images/duck.jpeg",
  },
  lions: {
    type: "pets",
    singleTitle: "lion",
    pluralTitle: "lions",
    colour: "text-yellow-600 font-black",
    image: "/images/lion.png",
  },
  monkeys: {
    type: "pets",
    singleTitle: "monkey",
    pluralTitle: "monkeys",
    colour: "text-yellow-800 font-black",
    image: "/images/monkey.png",
  },
};
export const fruitsMap = {
  apples: {
    type: "fruits",
    singleTitle: "apple",
    pluralTitle: "apples",
    colour: "text-red-500 font-black",
    image: "/images/apple.jpeg",
  },
  bananas: {
    type: "fruits",
    singleTitle: "banana",
    pluralTitle: "bananas",
    colour: "text-yellow-500 font-black",
    image: "/images/banana.png",
  },
  oranges: {
    type: "fruits",
    singleTitle: "orange",
    pluralTitle: "oranges",
    colour: "text-yellow-600 font-black",
    image: "/images/orange.jpeg",
  },
  grapes: {
    type: "fruits",
    singleTitle: "grape",
    pluralTitle: "grapes",
    colour: "text-purple-600 font-black",
    image: "/images/grape.jpeg",
  },
  watermelons: {
    type: "fruits",
    singleTitle: "watermelon",
    pluralTitle: "watermelons",
    colour: "text-green-600 font-black",
    image: "/images/watermelon.png",
  },
  strawberries: {
    type: "fruits",
    singleTitle: "strawberry",
    pluralTitle: "strawberries",
    colour: "text-red-500 font-black",
    image: "/images/strawberry.jpeg",
  },
  peaches: {
    type: "fruits",
    singleTitle: "peach",
    pluralTitle: "peaches",
    colour: "text-yellow-500 font-black",
    image: "/images/peach.jpeg",
  },
  lemons: {
    type: "fruits",
    singleTitle: "lemon",
    pluralTitle: "lemons",
    colour: "text-yellow-200 font-black",
    image: "/images/lemon.jpeg",
  },
  limes: {
    type: "fruits",
    singleTitle: "lime",
    pluralTitle: "limes",
    colour: "text-green-300 font-black",
    image: "/images/lime.jpeg",
  },
};
