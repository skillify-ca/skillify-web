import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { ResourceRow } from "../../../../components/coding/studentPortal/ResourceRow";
import { Button } from "../../../../components/ui/Button";

const HTML1 = ({ lessonComponents }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        <ProgressBar completed={100} />
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
        <div className="flex mt-8 sm:justify-end">
          <a href={""}>
            <Button label="Continue" disabled={false} />
          </a>
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
      text: "HTML is a basic language that all web pages are built on top of. HTML stands for Hyper Text Markup Language. Just like any other language, HTML is made up of a limited number of words that mean different things. You will gain experience with all the possible HTML elements over time.",
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
