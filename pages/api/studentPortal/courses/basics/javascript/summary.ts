import { NextApiRequest, NextApiResponse } from "next";
import {
  LessonComponentData,
  Resource,
} from "../../../../../../components/studentPortal/lessons/LessonComponent";

export function getJavaScriptSummary() {
  const resources: Resource[] = [
    {
      title: "Self-Ranking Form",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Google_Forms_logo_%282014-2020%29.svg/1489px-Google_Forms_logo_%282014-2020%29.svg.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc9uMgy9iVG9cXnXiZTl9yGbAfg26LCTXofqLc8BoBY_FBMmQ/viewform?usp=sf_link",
      description: "Measure your mastery with this form",
    },
    {
      title: "Codecademy Code Challenges",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/",
      description: "10 Beginner JavaScript Code Challenges",
    },
    {
      title: "Edabit Code Challenges",
      image: "https://s3.amazonaws.com/edabit-images/monster003.png",
      link: "https://edabit.com/challenges/javascript",
      description: "Optional - More Beginner JavaScript Code Challenges",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Summary",
    },
    {
      component: "description",
      text: "This summary for JavaScript contains additional coding challenges to apply your knowledge. Fill out the form below again. What concepts do you feel improved the most? Which concepts do you feel weaker around? Review those lessons and cheatsheets in Codecademy then try to complete these challenges.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return lessonComponents;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = getJavaScriptSummary();

  res.status(200).json(data);
}
