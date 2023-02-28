import React from "react";
import { useMutation } from "@apollo/client";
import getClient from "@sanity/client";
import { useRouter } from "next/router";
import LessonComponent from "../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../components/ui/Button";
import ProgressBar from "../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../graphql/studentPortal/courses/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../graphql/studentPortal/courses/unlockUserIntroNode";
import { useAuth } from "../../../lib/authContext";

const LessonPage = ({ lessonComponents, currentNode, nextNode, nextSlug }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: currentNode,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: nextNode,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push(`/studentPortal/intro/${nextSlug}`);
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 px-4 pb-16 md:px-8 lg:px-12">
      <ProgressBar completed={100} />
      {lessonComponents.map((it) => (
        <LessonComponent data={it} />
      ))}
      <div className="grid grid-cols-1 gap-8"></div>
      {nextSlug && (
        <div className="flex mt-8 sm:justify-end">
          <Button onClick={handleContinue} label="Continue" />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  // Create a client instance
  const client = getClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
    useCdn: true, // optional
  });

  // Use the client instance to fetch data from your Sanity.io dataset
  return await client
    .fetch(
      `*[_type == "lesson" && slug == "${params.slug}"]{
    ...,
    nextNode->,
    resources[]->{
      ...,
      "image": image.asset->url
    } 
  }
    `
    )
    .then((lessons) => {
      if (lessons && lessons.length > 0) {
        const { lessonComponents, nextNode, currentNode, nextSlug } = transform(
          lessons[0]
        );
        return {
          props: {
            lessonComponents,
            slug: params.slug,
            currentNode,
            nextNode,
            nextSlug,
          },
        };
      } else {
        return { props: { lessonComponents: [], slug: params.slug } };
      }
    });

  function transform(lesson) {
    console.log(lesson.resources);

    return {
      currentNode: lesson.hasuraNodeId,
      nextNode: lesson.nextNode?.hasuraNodeId ?? null,
      nextSlug: lesson.nextNode?.slug ?? null,
      lessonComponents: [
        {
          component: "title",
          text: lesson.title,
        },
        {
          component: "description",
          text: lesson.description,
        },
        {
          component: "video",
          url: lesson.video,
        },
        {
          component: "resource-list",
          resources: lesson.resources,
        },
      ],
    };
  }
}

export default LessonPage;
