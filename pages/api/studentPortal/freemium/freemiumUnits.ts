import {
  githubUnit,
  reactUnit,
  tailwindUnit,
  Unit,
  webIntroUnit,
} from "../units";

export const freemiumUnits: Unit[] = [
  webIntroUnit,
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
          link: "",
          title: "Enjoying the Skillify Experience?",
          description: "Access the full community and program!",
          type: "freemiumMessage",
        };
      } else {
        return node;
      }
    }),
  };
}
