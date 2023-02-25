import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { COMPLETE_USER_INTRO_NODE } from "../../../../graphql/coding/completeUserIntroNode";
import { FETCH_USER_INTRO_NODES } from "../../../../graphql/coding/fetchUserIntroNodes";
import { UNLOCK_USER_INTRO_NODE } from "../../../../graphql/coding/unlockUserIntroNode";
import { useAuth } from "../../../../lib/authContext";

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
        <div className="pb-56 mb-8 h-80">
          <iframe
            src="https://www.loom.com/embed/ae31ff80dcc54633875fd648cfcf6cac"
            frameBorder="0"
            webkit-allowfullscreen
            moz-allowfullscreen
            allowFullScreen
            className="w-full h-96"
          ></iframe>
        </div>

        <div className="flex mt-8 sm:justify-end">
          <Button label="Continue" disabled={false} onClick={handleContinue} />
        </div>
        {false && (
          <div>
            <p className="mt-12 font-bold">Assignment</p>

            <p className="my-4">
              After you complete the tutorial create your own index.html file
              and build a simple web page. Your page should include texts,
              images and lists. Upload it to group channel on Slack.
            </p>
            <p className="mt-12 font-bold">Previous Assignments</p>
            <p className="my-4">
              You can look at how these pages were build by navigating to the
              page and right-clicking on it. Select View Page Source to see the
              HTML code that makes up the web page.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "HTML",
    },
    {
      component: "description",
      text:
        "HTML is a basic language that all web pages are built on top of. HTML stands for Hyper Text Markup Language. Just like any other language, HTML is made up of a limited number of words that mean different things. You will gain experience with all the possible HTML elements over time.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "W3Schools HTML tutorial",
          description:
            "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
          link: "https://www.w3schools.com/html/default.asp",
        },
      ],
    },
  ];
  return { props: { lessonComponents } };
}
export default HTML1;
