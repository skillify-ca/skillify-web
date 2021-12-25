import { Grade } from "./skill";

export const lockedUnits = (grade: number) => {
  if (grade > 3) {
    return ["Numbers", "Fractions", "Coding"]
  }
  else {
    return ["Numbers", "Fractions", "Finance", "Coding"]
  }

}

export const unlockedUnits = (grade: number) => {
  if (grade > 3) {

    return [
      { title: "Addition", image: "/images/skills/add.png" },
      { title: "Subtraction", image: "/images/skills/sub.png" },
      { title: "Multiplication", image: "/images/skills/multi.png" },
      { title: "Division", image: "/images/skills/div.png" },
      { title: "Finance", image: "/images/skills/finance.png" },
    ]
  }
  else {
    return [
      { title: "Addition", image: "/images/skills/add.png" },
      { title: "Subtraction", image: "/images/skills/sub.png" },
      { title: "Multiplication", image: "/images/skills/multi.png" },
      { title: "Division", image: "/images/skills/div.png" },
    ]
  }

}
