import { githubUnit, introUnit, reactUnit, tailwindUnit, Unit } from "../units";

export const freemiumUnits: Unit[] = [
  introUnit,
  githubUnit,
  tailwindUnit,
  transformReactUnit(reactUnit),
];

function transformReactUnit(unit: Unit): Unit {
  return {
    title: unit.title,
    nodes: unit.nodes.map((node, index) => {
      if (index > 3) {
        return {
          type: "grayedOut",
        };
      } else if (index === 3) {
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
