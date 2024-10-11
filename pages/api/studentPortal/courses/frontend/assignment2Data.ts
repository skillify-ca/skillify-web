import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../codingBasics/introduction";

export const getComponentsAssignmentData = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Assignment: Components and Prompts",
    },
    {
      component: "prompt",
      header:
        "Use React components to build a table off the provided array of city population data",
      bullets: [
        "You should create reusable components that utilize props for the 'columns'",
        "You can use Tailwind CSS classes to style the table",
      ],
    },

    {
      component: "image",
      url: "/images/assignments/componentsAssignmentTableOnly.png",
    },

    {
      component: "template",
      templateLink:
        "https://codesandbox.io/s/skillify-components-assignment-template-2k19r7",
    },

    {
      component: "submission",
      codeSandboxTitle:
        "Please submit your assignment by pasting a link in the box below.",
      placeholder: "Assignment link goes here",
      assignmentId: "2cf9156a-4f6f-452d-b09a-2c54f19a7b40",
      link: "",
    },

    {
      component: "hint-list",
      hintRow: [
        {
          description:
            "You can use the map function to avoid calling the same 'row' component several times",
          link: "https://beta.reactjs.org/learn/rendering-lists",
        },
      ],
    },
  ];

  return { lessonComponents, nextSlug: "", currentNode: 0, nextNode: 0 };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const assignmentData = getComponentsAssignmentData();
  return res.status(200).json(assignmentData);
};
