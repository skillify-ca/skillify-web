import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";

const HTML2 = ({ lessonComponents }) => {
  return (
    <div className="flex flex-col">
      <div className="p-4 mb-4">
        <ProgressBar completed={100} />
      </div>
      <div className="flex flex-col">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
        <div className="fixed bottom-0 w-full p-8 bg-gray-200 h-36 ">
          <div className="flex justify-end w-full">
            <a className="" href={""}>
              <Button label="Continue" disabled={false} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "quiz",
    },
  ];
  return { props: { lessonComponents } };
}
export default HTML2;
