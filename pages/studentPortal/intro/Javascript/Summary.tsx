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

const Summary = ({ lessonComponents }) => {
  const router = useRouter();
  const { user } = useAuth();

  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 53,
        completed: true,
      },
    }).then((res) => {
      router.push("/studentPortal/intro");
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
      title: "Self-Ranking Form",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Google_Forms_logo_%282014-2020%29.svg/1489px-Google_Forms_logo_%282014-2020%29.svg.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc9uMgy9iVG9cXnXiZTl9yGbAfg26LCTXofqLc8BoBY_FBMmQ/viewform?usp=sf_link",
      description: "Measure your mastery with this form",
    },
    {
      title: "Codecademy Code Challenges",
      image:
        "https://icons-for-free.com/download-icon-codecademy-1324440139458906558_512.png",
      link: "https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/",
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
      text: "Summary",
    },
    {
      component: "description",
      text: "This summary for JavaScript contains additional coding challenges to apply your knowledge. Fill out the form below again. What concepts do you feel improved the most? Which concepts do you feel weaker around? Review those lessons and cheatsheets in Codecademy then try to complete these challenges.",
    },
    {
      component: "resource-list",
      resources,
    },
  ];
  return { props: { lessonComponents } };
}

export default Summary;
