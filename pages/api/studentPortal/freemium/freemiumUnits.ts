import {
  githubUnit,
  projectUnit,
  reactUnit,
  tailwindUnit,
  Unit,
  webIntroUnit,
} from "../units";

export const freemiumUnits: Unit[] = [
  webIntroUnit,
  githubUnit,
  tailwindUnit,
  transform(reactUnit),
  transform(projectUnit),
];

function transform(unit: Unit): Unit {
  return {
    ...unit,
    nodes: unit.nodes.map((node) => {
      if ("locked" in node) {
        return node;
      }
      return {
        ...node,
        locked: true,
      };
    }),
  };
}

