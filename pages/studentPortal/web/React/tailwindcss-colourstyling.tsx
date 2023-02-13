import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";

const React1 = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/tailwindcss-gridflex");
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
      text: "Tailwind Lesson 2: Background Color & Font Styling",
    },

    {
      component: "description",
      text: "TailwindCSS has many classes used to style a webpaeg by adding colour to the backgroud, and to the text.  ",
    },
    {
      component: "code-sandbox",
      title: "Background Colour Example",
      link: "https://codesandbox.io/embed/cocky-surf-2x7k1c?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "bg-blue-500 is used above to style the background of the webpage. bg-color-numfrom0to900 is used to style the background. Additionally, you can specify using RGB values the exact colour of the background.",
    },
    {
      component: "description",
      text: "Change the 'bg-blue-500' class to 'bg-gradient-to-r from-blue-500 to-sky-900' and notice what happens to the background.",
    },

    {
      component: "code-sandbox",
      title: "Font Styling Example",
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
