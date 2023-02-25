import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const Functions = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 38,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 39,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/Conditionals");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 px-4 pt-4 space-y-4 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white sm:px-12">
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
      link:
        "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions",
      description:
        "This is a deeper dive into what functions are in Javascript",
    },
    {
      title: "Home Equity Calculator",
      link: "/coding/JavaScript/homeEquity.zip",
      image: "/images/home.png",
      description:
        "A home equity calculator to know how much of the house you actually own over your mortgage period",
    },

    {
      title: "Running Pace Calculator",
      link: "/coding/JavaScript/runningPaceCalculator.zip",
      image: "/images/runnerClipArt.png",
      description:
        "A running pace calculator to help determine your average per mile pace during a race",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Functions",
    },
    {
      component: "description",
      text:
        "Functions is the foundation of programming. Functions allows us to group a specific process and allowing the process to take in an input in order to produce an output. The input for a function would be considered their parameters whereas the output would be the return statement.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Functions;
