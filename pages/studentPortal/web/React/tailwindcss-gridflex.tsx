import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";

const React1 = ({ lessonComponents }) => {
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
            "The official TailwindCSS documentation. Use CTRL+K to quick search for styling classes.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com",
        },
        {
          title: "HTML TailwindCSS Easy Setup",
          description:
            "Configure TailwindCSS for an HTML document to practice using tailwind clsses. To do this, complete step one in the installation setup instructions under Play CDN.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333",
          link: "https://tailwindcss.com/docs/installation/play-cdn",
        },
      ],
    },
    {
      component: "description",
      text: "TailwindCSS is used to style webpages. Similar to inline CSS, Tailwind classes are written directly in the `className` attribute. The official tailwindcss documentation linked above is well designed and thorough, but can feel overwhelming for new users. We recommend that as you read this lesson, you solidify what you have learned by exploring the tailwind documentation.",
    },
    {
      component: "code-sandbox",
      title: "Grid Columns Example",
      link: "https://codesandbox.io/embed/cocky-surf-2x7k1c?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "In general, grid is used to describe the outer level elements of the page. The code sandbox example above demonstrates how to use grid-cols-5 on line 5, to create a table with 5 columns. Try changing the grid styling to grid-cols-4 in the code sandbox above to display four columns instead, and modify the code so each column only contains four elements.",
    },

    {
      component: "code-sandbox",
      title: "Flex Navbar Example",
      link: "https://codesandbox.io/embed/flex-navbar-t18uqx?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Flex, on the other hand, is usually used to style the inner elements of the page. The code sandbox example above demonstrates how to style a navbar to be on the top-right of the page. ",
    },
    {
      component: "description",
      text: "Change the justify-end class on line 6 to justify-center to move the navbar to the middle of the page. Search flex in the tailwind docs to see What other flex classes you can apply to style this navbar. ",
    },
  ];
  return { props: { lessonComponents } };
}

export default React1;
