import { backendUnit, githubUnit, introUnit, reactUnit, tailwindUnit, Unit } from "../units";

export const paidUnits: Unit[] = [
  introUnit,
  githubUnit,
  tailwindUnit,
  transformReactUnit(reactUnit),
  transformBackendUnit(backendUnit),
]

function transformReactUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map((node, index) => {
      if (index === unit.nodes.length-1) {
        return {
          description: "Enjoying the Skillify Experience?",
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
    }
 ),
  };
}