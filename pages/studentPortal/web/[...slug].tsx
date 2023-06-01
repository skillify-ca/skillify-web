import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import LessonComponent from "../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../components/ui/Button";
import ProgressBar from "../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../graphql/studentPortal/courses/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../graphql/studentPortal/courses/unlockUserIntroNode";
import { useAuth } from "../../../lib/authContext";
import { ResponseData } from "../../api/studentPortal/lessons/basics/introduction";
import { getLessonForReactCourse } from "../../api/studentPortal/lessons/web/react";


const LessonPage = ({
  lessonComponents,
  currentNode,
  nextNode,
  nextSlug,
}: ResponseData) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: currentNode,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: nextNode,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push(`/studentPortal/web/${nextSlug}`);
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 px-4 pb-16 md:px-8 lg:px-12">
      <ProgressBar completed={100} />
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
      <div className="grid grid-cols-1 gap-8"></div>
      {nextSlug && (
        <div className="flex mt-8 sm:justify-end">
          <Button onClick={handleContinue} label="Continue" />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForReactCourse(slug),
  };
}

export default LessonPage;
