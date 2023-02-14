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
      text: "TailwindCSS can add colour to the backgroud of a page, and style the font colour, size, and other font-styling properties.  ",
    },
    {
      component: "code-sandbox",
      title: "Background Colour Example",
      link: "https://codesandbox.io/embed/backgroundstyling-02elf9?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Notice that on line 5, bg-blue-500 is used above to style the background colour of the webpage. In general, bg-COLOR-NUMFROM0TO900 is the syntax used to style the background, where the final number represents the shade value for the chosen color. Additionally, you can specify using rgb(x,y,z) values the exact colour of the background.",
    },
    {
      component: "description",
      text: "Change the 'bg-blue-500' class to 'bg-gradient-to-r from-blue-300 to-blue-800' and notice what happens to the background.",
    },

    {
      component: "code-sandbox",
      title: "Font Styling Example",
      link: "https://codesandbox.io/embed/flamboyant-bash-33bbqy?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "Tailwind has many font styling options including font colour, size, spacing, and hover effects. Sizing options incllude text-sm, text-md, text-lg, text-xl, text-2xl, etc. Font colour is styled using text-colour-numfrom0to900. ",
    },
    {
      component: "description",
      text: "Hover your mouse over the second last paragraph. Modify line 15 so the text colour is purple-500 when you hover over it.  ",
    },
  ];
  return { props: { lessonComponents } };
}

export default React1;
