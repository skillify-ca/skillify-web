import { useEffect, useState } from "react";
type QuizSelection = {
  name: string;
  result: string;
  weight: number;
};
export default function SandBox() {
  const quiz: QuizSelection[][] = [
    [
      { name: "Learn an in-demand skill", result: "", weight: 0 },
      { name: "Work in tech", result: "", weight: 0 },
      { name: "Build programs for fun", result: "", weight: 0 },
      { name: "I run a startup", result: "", weight: 0 },
      {
        name: "Become a professional developer",
        result: "",
        weight: 0,
      },
      {
        name: "Communicate better with technical coworkers",
        result: "",
        weight: 0,
      },
      { name: "Start a side hustle", result: "", weight: 0 },
    ],
    [
      { name: "Front end development", result: "JavaScript", weight: 1 },
      { name: "Back end development", result: "JavaScript", weight: 1 },
      { name: "Game development", result: "JavaScript", weight: 1 },
      { name: "Mobile development", result: "JavaScript", weight: 1 },
      { name: "Data analytics", result: "Python", weight: 1 },
      { name: "Product management", result: "JavaScript", weight: 1 },
      { name: "Digital marketing", result: "JavaScript", weight: 1 },
      { name: "UX/UI design", result: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", result: "JavaScript", weight: 1 },
    ],
    [
      { name: "Websites", result: "JavaScript", weight: 1 },
      { name: "Storefront", result: "HTMLCSS", weight: 1 },
      { name: "Mobile apps", result: "JavaScript", weight: 1 },
      { name: "Games", result: "JavaScript", weight: 1 },
      { name: "Email", result: "HTMLCSS", weight: 1 },
      { name: "Tools to automate your life", result: "JavaScript", weight: 1 },
      { name: "I don't know / Not sure yet", result: "JavaScript", weight: 1 },
    ],
  ];
  // const arr = quiz.map((stage) => {
  //   return stage.map((selection) => {
  //     return selection.name;
  //   });
  // });
  const stageResponses = [
    ["Learn an in-demand skill", "Work in tech"],
    ["UX/UI design", "Data analytics"],
    ["Email", "Games"],
  ];
  const [score, setScore] = useState({
    JavaScript: 0,
    HTMLCSS: 0,
    Python: 0,
  });
  // const check = stageResponses.map((outerItem) => {
  //   return outerItem.map((innerItem) => {
  //     return innerItem;
  //   });
  // });
  const finalScore = (userSelections) => {
    for (let i = 0; i < userSelections.length; i++) {
      if (userSelections[i] && userSelections[i].result === "JavaScript") {
        setScore((score) => ({
          ...score,
          JavaScript: score.JavaScript + userSelections[i].weight,
        }));
      }
      if (userSelections[i] && userSelections[i].result === "HTMLCSS") {
        setScore((score) => ({
          ...score,
          HTMLCSS: score.HTMLCSS + userSelections[i].weight,
        }));
      }
      if (userSelections[i] && userSelections[i].result === "Python") {
        setScore((score) => ({
          ...score,
          Python: score.Python + userSelections[i].weight,
        }));
      }
    }
  };
  const userSelections: QuizSelection[] = [];
  const productResult = () => {
    for (let i = 0; i < 3; i++) {
      const check = quiz[i].filter((item) =>
        stageResponses[i].includes(item.name)
      );
      userSelections.push(...check);
    }
    finalScore(userSelections);
  };
  useEffect(() => {
    productResult();
  }, []);
  return (
    <div>
      <p>{JSON.stringify(userSelections)}</p>
      <h1>------------------</h1>
      <p>{JSON.stringify(score)}</p>
    </div>
  );
}
