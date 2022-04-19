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

const CSS6 = ({ lessonComponents }) => {
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
      router.push("/studentPortal/intro");
    });
  };
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <ProgressBar completed={100} />
          {lessonComponents.map((it) => (
            <LessonComponent data={it} />
          ))}
          <h1 className="mt-12 text-xl font-bold">How to get started:</h1>
          <div className="flex-row">
            <h1 className="text-charmander">Step 1:</h1>
            <p>
              Complete the CSS tutorials. You will need to use many CSS styles
              to make your page flashy!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Locate your HTML Blog assignment file and create a new file called
              style.css. This is where you CSS code will go!
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              Your this assignment you will need to set up your Blog to follow
              the French Flag Layout.
            </p>
            <p>The Layout below is what you want to aim for.</p>
            <img src="/images/coding/units/css/layout1.png" className="w-96" />
          </div>
          <div className="mb-12">
            <p className="text-charmander">Step 4:</p>
            <p>
              Once you have the layout in place, the sky is the limit. Try out
              different CSS styles to make your page cool and exciting! Add
              colours, hover effects, borders, or whatever you want!
            </p>
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
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "CSS Blog Assignment",
    },
    {
      component: "description",
      text: "Previously you made a blog using HTML but it may look very boring.",
    },
    {
      component: "description",
      text: "We are going to change that using CSS styling! You will now use CSS styling to bring your page to life!",
    },
  ];
  return { props: { lessonComponents } };
}

export default CSS6;
