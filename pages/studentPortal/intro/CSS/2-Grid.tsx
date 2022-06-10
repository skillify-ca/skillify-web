import React, { useEffect } from "react";
import CSSQuiz from "../../../../components/coding/CSSQuiz";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  lessonSelector,
  resetCurrentSteps,
  setTotalSteps,
} from "../../../../redux/lessonSlice";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const CSS1 = ({ lessonComponents, totalSteps }) => {
  const dispatch = useDispatch();
  const lessonState = useSelector(lessonSelector);
  useEffect(() => {
    dispatch(setTotalSteps(totalSteps));
    dispatch(resetCurrentSteps(null));
  }, []);

  const router = useRouter();
  const { user } = useAuth();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 48,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 49,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/CSS/2-Flexbox");
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 p-8">
        <ProgressBar
          completed={(lessonState.currentStep * 100) / lessonState.totalSteps}
        />
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
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Tricks: Grid",
      image:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/12/default-social-css-tricks.png",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      description:
        "Skim through this reference guide on CSS Grid. But keep it handy when building websites.",
    },
    {
      title: "CSS Grid Layout Crash Course",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s176-c-k-c0x00ffffff-no-rj",
      link: "https://www.youtube.com/watch?v=jV8B24rSN5o",
      description: "Optional - A 30 minute video explaining CSS Grid",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS Grid",
    },
    {
      component: "description",
      text: "CSS Grid is a newer property of CSS that lets developer create more complex layouts or force yourself to use a single column layout. Without Grid, you had to position elements using coordinates on the screen. Although that technique worked in the 90s, it quickly became out of date as the world started to adopt a wide variety of screen sizes. CSS Grid allows you to position different HTML elements on your screen in a dynamic way that can adjust to the size of your screen.",
    },
    {
      component: "resource-list",
      resources,
    },
    {
      component: "loom-video",
      videoId: "597c6baa5d564c91a633dd3235cd5ee8",
    },
  ];
  return { props: { lessonComponents, totalSteps: 4 } };
}

export default CSS1;
