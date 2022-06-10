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

  const assignments = [
    { link: "/coding/css/sujee-week-1/index.html", title: "Sujee-Week1" },
    { link: "/coding/css/mau-week-1/index.html", title: "Mau-Week1" },
    { link: "/coding/css/vinon-week-1/indexflower.html", title: "Vinon-Week1" },
    { link: "/coding/css/jacky-week-1/index.html", title: "Jacky-Week1" },
    { link: "/coding/css/mithulan-week-1/index.html", title: "Mithulan-Week1" },
  ];

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 52,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 7,
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
              Open the{" "}
              <a
                className="underline text-charmander"
                href="https://www.w3schools.com/cssref/default.asp"
              >
                CSS reference guide
              </a>{" "}
              and keep it handy. It'll be helpful to look back to all the
              possible styles that you can use to make your blog page look
              modern and professional.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 2:</p>
            <p>
              Locate your HTML Blog assignment folder and create a new file
              inside called style.css. This is where you CSS code will go!{" "}
              <a
                href="https://www.w3schools.com/css/css_howto.asp"
                className="underline text-charmander"
              >
                Link
              </a>{" "}
              it to your html page using a link tag inside of your head tag.
            </p>
          </div>
          <div>
            <p className="text-charmander">Step 3:</p>
            <p>
              In this assignment you will need to set up your Blog to follow the
              French Flag Layout using CSS Grid. Check out my previous video
              called 'What is a div' for hints.
            </p>
            <p>The Layout below is what you want to aim for.</p>
            <img src="/images/coding/units/css/layout1.png" className="w-96" />
          </div>
          <div className="mb-12">
            <p className="text-charmander">Step 4:</p>
            <p>Use Flexbox to create a row of navigation links.</p>
          </div>
          <div className="mb-12">
            <p className="text-charmander">Step 5:</p>
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
    { component: "loom-video", videoId: "ed935cc53123419695e9f6b97f5589e9" },
  ];
  return { props: { lessonComponents } };
}

export default CSS6;
