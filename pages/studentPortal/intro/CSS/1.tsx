import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const CSS1 = ({ lessonComponents }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 5,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 48,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/CSS/2-Grid");
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-8">
        <ProgressBar completed={100} />
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
        <div className="flex mt-8 sm:justify-end">
          <Button label="Continue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
    {
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "Codecademy CSS Course",
      image: "/images/ResourceRow.svg",
      link: "https://www.codecademy.com/learn/learn-css",
      description: "Complete all levels.",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS",
    },
    {
      component: "description",
      text: "CSS stands for cascading style sheets. It's another language that you need to learn that has different rules and keywords compared to HTML. In this lesson you will learn about different styles that you can apply to your HTML elements.",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "loom-video",
      videoId: "13bf6c0abba840eba25daf94e332244f",
    },
    {
      component: "loom-video",
      videoId: "587b32878fe84810b9762594297c9a69",
    },
  ];
  return { props: { lessonComponents, totalSteps: 4 } };
}

export default CSS1;
