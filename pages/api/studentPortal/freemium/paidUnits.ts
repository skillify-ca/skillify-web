import {
  backendUnit,
  githubUnit,
  reactUnit,
  tailwindUnit,
  Unit,
  webIntroUnit,
} from "../units";

export const paidUnits: Unit[] = [
  webIntroUnit,
  githubUnit,
  tailwindUnit,
  transformReactUnit(reactUnit),
  transformBackendUnit(backendUnit),
];

function transformReactUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map((node, index) => {
      if (index === unit.nodes.length - 1) {
        return {
          link: "https://www.joinskillify.com/call",
          type: "freemiumMessage",
        };
      } else {
        return node;
      }
    }),
  };
}

function transformBackendUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map(() => {
      return {
        type: "grayedOut",
      };
    }),
  };
}
