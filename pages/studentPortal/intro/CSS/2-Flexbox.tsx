import React, { useEffect } from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
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
        node_id: 49,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 51,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/CSS/4");
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
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "Do all levels.",
    },

    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      description:
        "Skim through this reference guide on CSS Flexbox. But keep it handy when building websites.",
    },
    {
      title: "CSS Tricks: Flexbox",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      description: "Optional - A 30 minute video explaining CSS Flexbox.",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS Flexbox",
    },
    {
      component: "description",
      text:
        "CSS Flexbox is another new property of CSS. You can turn any <div> element into a flexbox using the 'display: flex' property. By using different flex properties you can tell the div how you want it to arrange it's children. Combining Flexbox with Grid will allow you to build the most advanced layouts that you can imagine on the internet.",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "loom-video",
      videoId: "3ccdfc795e2648b697356e15fa1e67f3",
    },
  ];
  return { props: { lessonComponents, totalSteps: 4 } };
}

export default CSS1;
