import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";
import Link from "next/link";

const HTML3 = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 4,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 5,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100 dark:text-white dark:bg-gray-800">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <h1 className="mt-12 text-xl font-bold">How to get started:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>
              Complete the HTML tutorials. You will need to use many of the
              basic tags to create you page.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Create the index.html file. This is where you will do all your
              coding!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              You may use any sort of html tags you like in order to create the
              blog you want.
            </p>
            <p>
              Focus on the structure of your webpage, we will make it flashy
              once we learn CSS styling!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 4:</p>
            <p>
              Once your are complete, submit you index.html to the Slack
              Channel.
            </p>
          </div>
          <h1 className="mt-12 text-xl font-bold">Showcase</h1>
          <div className="grid grid-cols-2 gap-8">
            <a target={"_blank"} href="/coding/html/nba.html">
              <div className="w-full p-8 bg-white shadow-md cursor-pointer dark:bg-gray-900">
                NBA Blog by Jacky H
              </div>
            </a>

            <a target={"_blank"} href="/coding/html/foodblog.html">
              <div className="w-full p-8 bg-white shadow-md cursor-pointer dark:bg-gray-900">
                Food Blog by Mithulan M
              </div>
            </a>
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
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "HTML Blog Assignment",
    },
    {
      component: "description",
      text: "You are now ready to complete your very first coding assignment!",
    },
  ];
  return { props: { lessonComponents } };
}

export default HTML3;
