import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const Variables = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 8,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 38,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/Functions");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 px-4 pt-4 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white sm:px-12">
          <div className="space-y-4">
            <ProgressBar completed={100} />
            {lessonComponents.map((it) => (
              <LessonComponent data={it} />
            ))}
          </div>

          <div className="flex h-full mt-16 sm:justify-end">
            <Button
              label="Continue"
              disabled={false}
              onClick={handleContinue}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
    {
      title: "Codecademy",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link:
        "https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises/intro-variables",
      description:
        "This is a deeper dive into what variables are in Javascript",
    },
    {
      title: "Coding Challenge: Greetings",
      link: "/coding/JavaScript/greetings.zip",
      image: "/images/greetings.png",
      description: "A practice problem using strings.",
    },
    {
      title: "Coding Challenge: Greetings Solution",
      link: "https://www.youtube.com/watch?v=W-kkyPEAWXc&t=32s",
      image: "/images/greetings.png",
      description:
        "Don't watch this video until you've attempted the challenge above.",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Variables",
    },
    {
      component: "description",
      text:
        "Variables help us store values and perform operations on numbers and letters. There are lots of different types of variables but two important ones are numbers and strings (letters)",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Variables;
