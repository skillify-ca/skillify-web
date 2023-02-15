import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";

const TailwindGridFlex = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/tailwindcss-colourstyling");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it, index) => (
          <LessonComponent data={it} key={index} />
        ))}
      </div>
      <div className="flex my-8 mr-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
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
          link: "https://tailwindcss.com/docs/flex",
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
          link: "https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184",
        },
      ],
    },
    {
      component: "description",
      text: "TailwindCSS is used to style web pages. Similar to inline CSS, Tailwind classes are written directly in the `className` attribute. The official tailwindcss documentation linked above is well designed and thorough, but can feel overwhelming for new users. We recommend that as you read this lesson, you solidify what you have learned by exploring the tailwind documentation.",
    },
    {
      component: "code-sandbox",
      title: "Grid Columns Example",
      link: "https://codesandbox.io/embed/cocky-surf-2x7k1c?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Grid can be used to format a two-dimensional layout while Flexbox is designed to style only a one-dimensional layout. Additionally, if you are looking to carefully place an element on the page in a specific location you should use grid. The code sandbox example above demonstrates how to use grid-cols-5 on line 5, to create a table with 5 columns.",
    },
    {
      component: "description",
      text: "Try changing the grid styling to grid-cols-4 in the code sandbox above to display four columns instead, and delete any unnecessary elements so each column only contains four elements.",
    },
    {
      component: "code-sandbox",
      title: "Flex Navbar Example",
      link: "https://codesandbox.io/embed/flex-navbar-t18uqx?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Flexbox controls the flow of elements. In the code sandbox example above, flex justify-end is being used to style a navbar to be justified on the top-right of the page. ",
    },
    {
      component: "description",
      text: "Change the justify-end class on line 6 to justify-center to move the navbar to the middle of the page.  ",
    },
    {
      component: "description",
      text: "Change the justify-center to flex-col, or flex-col-reverse and notice what happens to the alignment of the navbar.",
    },
    // {
    //   component: "resource-list",
    //   resources: [

    //   ],
    // },
  ];
  return { props: { lessonComponents } };
}

export default TailwindGridFlex;
