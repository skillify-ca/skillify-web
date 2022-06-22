import React from "react";
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

const Objects = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 43,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 44,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/Iterators");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 px-4 pt-4 text-gray-700 bg-gray-100 sm:p-12 dark:bg-gray-800 dark:text-white">
          <div className="space-y-4">
            <ProgressBar completed={100} />
            {lessonComponents.map((it) => (
              <LessonComponent data={it} />
            ))}
          </div>

          <div className="flex h-full mt-12 sm:justify-end">
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
      title: "Codecademy Lesson: Objects",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/intro",
      description:
        "This is an introduction into what objects are in Javascript",
    },
    {
      title: "Codecademy Lesson: Objects",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/adv-intro",
      description: "This is a deeper dive into what objects are in Javascript",
    },
    {
      title: "Codecademy Objects: Cheatsheet",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet",
      description: "This is a deeper dive into what objects are in Javascript",
    },
    {
      title: "Find the Plant",
      link: "/coding/JavaScript/findPlant.zip",
      image: "/images/plant.png",
      description:
        "There are so many plants in our eco-system! Give the functiuon the name of the plant and find out its description",
    },
    {
      title: "Find the Plant Solution",
      link: "https://www.youtube.com/watch?v=zbwqA9QJaRc&t=31s",
      image: "/images/plant.png",
      description:
        "Don't watch the solution until you've attempted the challenge above",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Objects",
    },
    {
      component: "description",
      text: "Objects are a data type that allows us to store many properties under one variable. For example, if we wanted to store a variable for a human. We know that humans have many properties/feature that make them unique such as height, weight, eye-colour, and much more. By storing these features under a data type of an object allows us to have access to the data fields that make a human such as their height.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Objects;
