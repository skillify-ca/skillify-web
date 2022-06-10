import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import CodingChallengeInstructions from "../../../../components/coding/studentPortal/JavaScript/CodingChallengeInstructions";
import LessonComponent, {
  LessonComponentData,
  Resource,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

const JS1 = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 7,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 8,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/Variables");
    });
  };

  return (
    <>
      <>
        <div className="col-span-7">
          <div className="grid h-full grid-cols-1 px-4 pt-4 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white sm:px-12">
            <div className="space-y-4">
              <ProgressBar completed={100} />
              {lessonComponents.map((it) => (
                <LessonComponent data={it} />
              ))}
            </div>
            <CodingChallengeInstructions />
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
    </>
  );
};
export async function getServerSideProps({ params }) {
  const resources: Resource[] = [
    {
      title: "Grasshopper",
      link: "https://grasshopper.app/",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__journey.svg",
      description: "A mobile application with Javascript challenges",
    },
    {
      title: "Code HS",
      link: "https://codehs.com/textbook/introjs_textbook/",
      image: "https://codehs.com/static/img/logo.png",
      description:
        "Intro to Javascript Textbook. Skip anything to do with graphics or animations.",
    },
    {
      title: "Codecademy JS Course",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      image:
        "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?crop=edges&fit=crop&h=630&rect=375%2C0%2C2256%2C1412&w=1200",
      description: "An online course introducing you to Javascript",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "JavaScript Introduction",
    },
    {
      component: "description",
      text: "JavaScript is yet another language that you need to learn. This lesson will teach you the main concepts of JavaScript.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default JS1;
