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
      text: "State refers to how an application changes over time. You can also think of it as what is displayed to the user at any given point in time. Take a single Instagram post for example which contains multiple pieces of state that are constantly changing. Likes, posts, and comments are constantly being added by users, updated, and re-rendered by application. The `state` of the application is constantly changing ",
    },
    {
      component: "code-snippet",
      text: "In React, state is represented by an object. The state for a singular instagram post might look something like: ",
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
      text: "State refers to how an application changes over time. You can also think of it as what is displayed to the user at any given point in time. Take a single Instagram post for example which contains multiple pieces of state that are constantly changing. Likes, posts, and comments are constantly being added by users, updated, and re-rendered by application. The `state` of the application is constantly changing ",
    },

    {
      component: "description",
      text: "React provides us with the useState hook to easily access and update state. The useState hook always follows this convention: ",
    },

    {
      component: "description",
      text: "const [stateVariable, setStateVariable] = useState(initialValue)",
    },

    {
      component: "description",
      text: "The first variable in the state array is the current state at any given point in time. The second variable is a setter function which we can use to change the state in our application. There always needs to be an initial value set as well",
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
