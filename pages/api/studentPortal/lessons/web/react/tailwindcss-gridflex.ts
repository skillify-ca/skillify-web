import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../../components/studentPortal/lessons/LessonComponent";

export const getTailwindGridFlexLessonData = () => {
const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Tailwind Lesson 1: Grid & Flexbox",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Official TailwindCSS Documentation",
          description:
            "The official TailwindCSS documentation for flexbox and grid. Use CTRL+K to quick search for styling classes.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/",
        },
        {
          title: "HTML TailwindCSS Easy Setup",
          description:
            "Configure TailwindCSS for an HTML document to practice using tailwind classes. To do this, complete step one in the installation setup instructions under Play CDN.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/installation/play-cdn",
        },
        {
          title: "Grid vs Flexbox",
          description:
            "Read more about grid and flexbox to learn about how they are used.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link:
            "https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184",
        },
      ],
    },
    {
      component: "description",
      text:
        "TailwindCSS is used to style web pages. Similar to inline CSS, Tailwind classes are written directly in the `className` attribute. The official tailwindcss documentation linked above is well designed and thorough, but can feel overwhelming for new users. We recommend that as you read this lesson, you solidify what you have learned by exploring the tailwind documentation.",
    },
    {
      component: "code-sandbox",
      title: "Grid Columns Example",
      link:
        "https://codesandbox.io/embed/cocky-surf-2x7k1c?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text:
        "Grid can be used to format a two-dimensional layout while Flexbox is designed to style only a one-dimensional layout. Additionally, if you are looking to carefully place an element on the page in a specific location you should use grid. The code sandbox example above demonstrates how to use grid-cols-5 on line 5, to create a table with 5 columns.",
    },

    {
      component: "description",
      text:
        "Try changing the grid styling to grid-cols-4 in the code sandbox above to display four columns instead, and delete any unnecessary elements so each column only contains four elements.",
    },
    {
      component: "code-sandbox",
      title: "Flex Navbar Example",
      link:
        "https://codesandbox.io/embed/flex-navbar-t18uqx?fontsize=14&hidenavigation=1&theme=dark",
    },

    {
      component: "description",
      text:
        "Flexbox controls the flow of elements. It differs from a grid in that it's not fixed to a number of columns. If you put six elements inside a flex container, it will space them all within that same row. If you do the same in a five column grid, the 6th element will shift into the next row.",
    },
    {
      component: "description",
      text:
        "You can add different Tailwind classes to adjust the positioning of items in a flex container. In the code sandbox example above, flex justify-end is being used to style a navbar to be justified on the top-right of the page. ",
    },
    {
      component: "description",
      text:
        "Change the justify-end class on line 6 to justify-center to move the navbar to the middle of the page.  ",
    },
    {
      component: "description",
      text:
        "Change the justify-center to flex-col, or flex-col-reverse and notice what happens to the alignment of the navbar.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "TailwindCSS Documentation",
          description: "TailwindCSS Documentation -- Flexbox.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/flex",
        },
        {
          title: "TailwindCSS Documentation",
          description: "TailwindCSS Documentation -- Grid.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/grid-template-rows",
        },
      ],
    },
  ];
  const nextSlug="react/tailwindcss-colourstyling"
  return {lessonComponents, nextSlug};
}

  export default async (req: NextApiRequest, res: NextApiResponse) => {
    const lessonData = getTailwindGridFlexLessonData();
    return res.status(200).json(lessonData);
  };
  