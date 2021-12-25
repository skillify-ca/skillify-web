import { Grade } from "./skill";

export const lockedUnits = (grade: number) => {
  if (grade > 3) {
    return ["Numbers", "Fractions"]
  }
  else {
    return ["Numbers", "Fractions"]
  }

}

export const unlockedUnits = (grade: number) => {
    return [
      { title: "Addition", image: "/images/skills/add.png" },
      { title: "Subtraction", image: "/images/skills/sub.png" },
      { title: "Multiplication", image: "/images/skills/multi.png" },
      { title: "Division", image: "/images/skills/div.png" },
    ]
}
