export type noun = {
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
    pluralTitle: "Lions",
    colour: "text-yellow-600 font-black",
    image: "/images/lion.png",
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
};
