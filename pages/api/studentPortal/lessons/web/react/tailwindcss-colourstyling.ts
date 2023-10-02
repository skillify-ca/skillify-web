import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../../components/studentPortal/lessons/LessonComponent";

export const getTailwindColourStylingLessonData = () => {
const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Tailwind Lesson 2: Background Color & Font Styling",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "TailwindCSS Documentation -- Text Size",
          description:
            "The official TailwindCSS documentation for text size styling. ",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/font-size",
        },
        {
          title: "TailwindCSS Documentation -- Background Styling",
          description:
            "The official TailwindCSS documentation for background colour styling. ",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/background-color",
        },
      ],
    },
    {
      component: "description",
      text: "TailwindCSS can add colour to the background of a page, and can modify the text colour, size, and emphasis. ",
    },
    {
      component: "code-sandbox",
      title: "Background Colour Example",
      link: "https://codesandbox.io/embed/backgroundstyling-02elf9?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Notice that on line 5, bg-blue-500 is being used to style the background colour of the webpage. In general, bg-[colour]-[0-900] is the syntax used to style the background, and a larger final value denotes a darker shade for the chosen color. Additionally, you can use rgb(x,y,z) values to specify the exact colour of the background.",
    },

    {
      component: "description",
      text: "Change the bg-blue-500 class to bg-gradient-to-r from-blue-300 to-blue-800 and notice what happens to the background colour. Change the colour of the author tag, on line 16, to green-500. Change the colour of three other different tags on the page, so the page is has five distinct background colours.",
    },

    {
      component: "code-sandbox",
      title: "Font Styling Example",
      link: "https://codesandbox.io/embed/flamboyant-bash-33bbqy?fontsize=14&hidenavigation=1&theme=dark",
    },

    {
      component: "description",
      text: "Hover your mouse over the second last paragraph. Modify line 15 so the text colour is purple-500 when you hover over it.  ",
    },
  ];
  const nextSlug = "assignments/tailwindAssignment"
  return { lessonComponents, nextSlug  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const lessonData = getTailwindColourStylingLessonData();
    return res.status(200).json(lessonData);
  };