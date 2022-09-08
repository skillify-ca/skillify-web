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

const Conditionals = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 39,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 40,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/JSQuiz1");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 px-4 pt-4 space-y-4 text-gray-700 bg-gray-100 sm:px-12 dark:bg-gray-800 dark:text-white">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}

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
      title: "Codecademy",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/else-if",
      description:
        "This is a deeper dive into what conditional statements are in Javascript",
    },
    {
      title: "Temperature",
      link: "/coding/JavaScript/temperature.zip",
      image: "/images/temperature.jpeg",
      description:
        "A temperature converter problem. It gets confusing switching between Celsius and Fahrenheit",
    },
    {
      title: "Temperature Solution",
      link: "https://www.youtube.com/watch?v=PIxT77Pf3SI&t=15s",
      image: "/images/temperature.jpeg",
      description:
        "Don't watch this solution, until you've attempted the challenge above",
    },
    {
      title: "FizzBuzz",
      link: "/coding/JavaScript/JsFunctions/FizzBuzz/fizzBuzz-Practice.js",
      image: "/images/temperature.jpeg",
      description: "A basic JavaScript coding challenge",
    },
    {
      title: "FizzBuzz Solution",
      link: "/coding/JavaScript/JsFunctions/FizzBuzz/fizzBuzz-Correct.js",
      image: "/images/temperature.jpeg",
      description:
        "Don't read this solution, until you've attempted the challenge above",
    },
    {
      title: "Basketball",
      link: "/coding/JavaScript/JsFunctions/Basketball/basketball-Practice.js",
      image: "/images/basketball.jpg",
      description:
        "A problem involving calculating the score of a basketball game!"
    },
    {
      title: "Basketball Solution",
      link: "/coding/JavaScript/JsFunctions/Basketball/basketball-Correct.js",
      image: "/images/basketball.jpg",
      description:
        "Don't watch this solution, until you've attempted the challenge above",
    },
  ];
  
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Conditionals",
    },
    {
      component: "description",
      text: "Conditionals allows us to create programs that can make decisions based on if expressions are true or false. This helps programmers to produce different outputs based on the input provided by the user.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Conditionals;
