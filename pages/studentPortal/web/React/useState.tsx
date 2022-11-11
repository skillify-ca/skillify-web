import { useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React3 = ({ lessonComponents }) => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/studentPortal/web/React/components");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
      <div className="flex mt-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "State and the useState hook",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "State and Lifecycle",
          description:
            "The official React documentation explaining the concept of State and Lifecycle. This lesson only covers State",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://reactjs.org/docs/state-and-lifecycle.html",
        },
      ],
    },
    {
      component: "description",
      text: "State refers to how an application changes over time. You can also think of it as what is displayed to the user at any given point in time.",
    },
    {
      component: "description",
      text: "Let's consider a single Instagram post. A post has likes, comments, etc. All of these are constantly changing as different users interact with the post.",
    },
    {
      component: "description",
      text: "In React terms, we can think of these likes and comments as part of the application state. The state of the application is constantly changing - it is being updated and re-rendered by application.",
    },

    {
      component: "code-snippet",
      text: "In React, state is represented by an object. The state for a singular Instagram post might look something like: ",
      code: `const state = {
        likes: 4,
        numComments: 5,
        reposts: 4,
        recentComments: [
            {
                userName: 'raveen123',
                post: 'awesome picture!'
            },
            {
                userName: 'raveen123',
                post: 'Congratulations!'
            },
    
        ]
    }
    
    export default function DisplayState() {
        return <div>{JSON.stringify(state)}<p>*** we can't render objects directly on a React page, we have to convert them into a string using JSON.stringify</p></div>;
      }`,
    },

    {
      component: "description",
      text: "React provides us with the useState hook to easily access and update state. The hook follows this convention: ",
    },

    {
      component: "description",
      text: "const [stateVariable, setStateVariable] = useState(initialValue)",
    },

    {
      component: "description",
      text: "The first variable in the state array is the current state at any given point in time. The second variable is a setter function that we can call to change the state in our application. Note that we set an initial value for each state variable",
    },

    {
      component: "description",
      text: "Let's look at a small example of an application that rolls dice. We call useState twice to define state for each die. Each time we press the roll dice button, the app calls the rollDie function and sets the value of each die",
    },

    {
      component: "code-sandbox",
      title: "Dice Roll Example",
      link: "https://codesandbox.io/embed/usestate-example-yzm4k5?fontsize=14&hidenavigation=1&theme=dark",
    },
  ];
  return { props: { lessonComponents } };
}

export default React3;
