import { Router, useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React2 = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React");
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
      text: "Deploying a Project on Github & Vercel",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Github",
          description:
            "The official Github site.  Click 'View' to Login and create an account.",
          image: "/images/lessons/github-mark.png",
          link: "https://github.com/login",
        },
        {
          title: "Vercel",
          description:
            "The official Vercel site.  Click 'View' to Login and create an account.",
          image: "https://assets.vercel.com/image/upload/front/zeit/og.png",
          link: "https://vercel.com/login",
        },
      ],
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
      component: "loom-video",
      videoId: "afe5fda5eb4a485282a115efd5efb212",
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

export default React2;
