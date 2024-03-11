import { NextApiRequest, NextApiResponse } from "next";
import { AssignmentComponentData } from "../../../../../../components/studentPortal/assignments/AssignmentComponent";

export const getAssignment1Data = () => {
  const incompleteStage: AssignmentComponentData[] = [
    {
      component: "title",
      text: "Assignment: Tailwind CSS",
    },
    {
      component: "template",
      templateLink:
        "https://codesandbox.io/s/tailwindassignment-template-5shj0o?file=/src/App.tsx",
    },

    {
      component: "prompt",
      header: "Style a web page using Tailwind CSS",
      bullets: [
        "Use the resource link above and edit the page to create a forked copy of the template for this assignment.",
        "Your page should have the following:",
        "atleast 5 different background colors.",
        "Add a Navbar at the top-right of the page.",
        "Add a title, a heading and a paragraph so your page has atleast 3 different text sizes.",
        "Add an on-hover effect to the title, so it bounces when you hover over it.",
        "Add a table with 5 columns and 4 rows, below the paragraph.",
        "Stretch challenge: Find a website whose design you like and rebuild it using TailwindCSS. Start from the top and work your way downwards. Speak to a coach if you get stuck!",
      ],
    },
    {
      component: "submission",
      codeSandboxTitle:
        "Please submit your assignment by pasting a link in the box below.",
      placeholder: "Assignment link goes here",
      assignmentId: "75607460-834b-4f9f-a352-ae1a4e6f3d5f",
      link: "",
    },
    {
      component: "hint-list",
      hintRow: [
        {
          description: "Setup TailwindCSS using Play CDN, follow step one",
          link: " https://tailwindcss.com/docs/installation/play-cdn ",
        },
        {
          description:
            "You can use the 'bg-' and 'text-' classes in Tailwind CSS to set background colors and text sizes",
          link: "https://tailwindcss.com/docs/background-color",
        },
        {
          description:
            "You can use the 'hover:' prefix to add on-hover effects to elements",
          link: "https://tailwindcss.com/docs/hover-focus-and-other-states",
        },
        {
          description:
            "You can use the 'table' and 'table-auto' classes in Tailwind CSS to create tables",
          link: "https://tailwindcss.com/docs/table-layout",
        },
        {
          description:
            "Learn more about Tailwind CSS by visiting the official documentation",
          link: "https://tailwindcss.com/docs",
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

  const nextSlug = "react/components";

  return { incompleteStage, submittedStage, nextSlug };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const assignmentData = getAssignment1Data();
  return res.status(200).json(assignmentData);
};
