import { NextApiRequest, NextApiResponse } from "next";
import { AssignmentComponentData } from "../../../../../../components/studentPortal/assignments/AssignmentComponent";

export const getAssignment2Data = () => {
  const incompleteStage: AssignmentComponentData[] = [
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
      component: "output",
      screenshotOrVideoId:
        "/images/assignments/componentsAssignmentTableOnly.png",
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
  const submittedStage: AssignmentComponentData[] = [
    {
      component: "completed",
      text: "Your assignment has been submitted. The instructor will follow-up with a loom video link upon review. ",
    },
  ];
  const nextSlug = "react/usestate";

  return { incompleteStage, submittedStage, nextSlug };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const assignmentData = getAssignment2Data();
  return res.status(200).json(assignmentData);
};
