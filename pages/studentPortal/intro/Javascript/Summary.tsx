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

const Iterators = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 44,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 45,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/Javascript/JSQuiz2");
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
      title: "Codecademy Code Challenges",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link:
        "https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/",
      description: "10 Beginner JavaScript Code Challenges",
    },
    {
      title: "Edabit Code Challenges",
      image: "https://s3.amazonaws.com/edabit-images/monster003.png",
      link: "https://edabit.com/challenges/javascript",
      description: "Optional - More Beginner JavaScript Code Challenges",
    },
  ];
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Iterators",
    },
    {
      component: "description",
      text:
        "Iterators are objects that have a sequence where there are 2 questions being answered: If there is an element next? If so, what is it? This is what we call an iterator protocol. If these questions are answered then we are dealing with an iterator. With iterators we can use iterator methods that are very powerful and versatile. These methods are .map() and .filter().",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Iterators;
