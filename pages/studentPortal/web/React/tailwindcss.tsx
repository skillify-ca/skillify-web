import { Router, useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React1 = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/tailwind");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
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
      text: "Guide to Tailwind Styling",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Official TailwindCSS Documentation",
          description:
            "The official TailwindCSS documentation, detailed with each tailwindcss class.",
          image:
            "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd5%2FTailwind_CSS_Logo.svg%2F2048px-Tailwind_CSS_Logo.svg.png&sp=1676136942T161af00f85757eab1253380acdae7c38bb976ca04add7da867c5ace2e99b146e",
          link: "https://tailwindcss.com/docs/installation",
        },
      ],
    },
    {
      component: "description",
      text: "TailwindCSS is a flexible tool to style webpages. Tailwind is similar to in-line CSS.",
    },

    {
      component: "code-snippet",
      text: "The following is a function that returns the text `Hello World`:",
      code: `export default function HelloComponent() {
  return <div>Hello World</div>;
}`,
    },
    {
      component: "description",
      text: "We can use functional components to make our code cleaner and less repeatable. Take a look at this basic HTML page displaying a table of expenses:",
    },
    {
      component: "code-sandbox",
      title: "HTML Budget",
      link: "https://codesandbox.io/embed/skillify-messy-web-page-xk00mt?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "This code works but it's tedious. Imagine if we had to repeat the <p> tag 100 or 1000 times. What if we made a function component for each row?",
    },
    {
      component: "code-snippet",
      text: "We could create a `Header` function component for the header:",
      code: `export default function ExpenseHeader() {
  return (
    <div className="flex flex-row space-x-2">
      <p>date</p>
      <p>name</p>
      <p>amount</p>
      <p>type</p>
    </div>
  );
}`,
    },
    {
      component: "code-snippet",
      text: "We could create a `ExpenseRow` function component for each row:",
      code: `export default function ExpenseItemOne() {
  return (
    <div className="flex flex-row space-x-2">
      <p>2022-10-01</p>
      <p>Restaurant</p>
      <p>50.23</p>
      <p>Eating Out</p>
    </div>
  );
}`,
    },
    {
      component: "description",
      text: "Putting this all together, we have much cleaner code: ",
    },
    {
      component: "code-sandbox",
      title: "Cleaner, Componentized HTML Budget",
      link: "https://codesandbox.io/embed/skillify-componentized-react-page-z1hego?fontsize=14&hidenavigation=1&theme=dark",
    },
    {
      component: "description",
      text: "This is much cleaner but we still have to write a new component for each row. The next lesson will cover props, which will allow us to make a reusable row component",
    },
  ];
  return { props: { lessonComponents } };
}

export default React1;
