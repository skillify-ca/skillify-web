import { Grade } from "./skill";

export const lockedUnits = () => {
  return [{ title: "Numbers" }, { title: "Fractions" }]
}

export const unlockedUnits = () => {
  return [
    { title: "Addition", image: "/images/skills/add.png", link: "addition" },
    { title: "Subtraction", image: "/images/skills/sub.png", link: "subtraction" },
    { title: "Multiplication", image: "/images/skills/multi.png", link: "multiplication" },
    { title: "Division", image: "/images/skills/div.png", link: "division" },
  ]
}
