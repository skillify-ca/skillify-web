import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/studentPortal/courses/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/studentPortal/courses/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";
import { getLessonComponentsForHTML1 } from "../../../api/studentPortal/lessons/basics/html/lesson1";

const HTML1 = ({ lessonComponents }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [unlockUserNode] = useMutation(UNLOCK_USER_INTRO_NODE);
  const [completeUserNode] = useMutation(COMPLETE_USER_INTRO_NODE);

  const handleContinue = () => {
    completeUserNode({
      variables: {
        user_id: user.uid,
        node_id: 2,
        completed: true,
      },
    }).then((res) => {
      unlockUserNode({
        variables: {
          user_id: user.uid,
          node_id: 3,
          locked: false,
        },
        refetchQueries: [{ query: FETCH_USER_INTRO_NODES }],
      });
      router.push("/studentPortal/intro/HTML/2");
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 sm:px-12">
        <ProgressBar completed={100} />
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}

        <div className="flex mt-8 sm:justify-end">
          <Button label="Continue" disabled={false} onClick={handleContinue} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents =  getLessonComponentsForHTML1();
  return { props: { lessonComponents } };
}

export default HTML1;
