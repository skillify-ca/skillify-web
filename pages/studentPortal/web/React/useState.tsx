import { useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React3 = ({ lessonComponents }) => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/studentPortal/web/React/components");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
      <div className="flex mt-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "State and the useState hook",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "State and Lifecycle",
          description:
            "The official React documentation explaining the concept of State and Lifecycle. This lesson only covers State",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://reactjs.org/docs/state-and-lifecycle.html",
        },
      ],
    },
    {
      component: "description",
      text: "State refers to how a component acts and behaves",
    },

    {
      component: "code-sandbox",
      title: "Dice Roll Example",
      link: "https://codesandbox.io/embed/usestate-example-yzm4k5?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { lessonComponents } };
}

export default React3;
