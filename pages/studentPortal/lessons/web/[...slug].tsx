import { useRouter } from "next/router";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import { getCourseForWebSection } from "../../../api/studentPortal/lessons/web";
import LessonPage from "../../intro/[...slug]";

const React2 = (props: { lessonComponents: LessonComponentData[] }) => {
  const { lessonComponents } = props;

  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/props");
  };

  if (!lessonComponents) return <div>Loading...</div>;

  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it, index) => (
          <LessonComponent data={it} key={index} />
        ))}
      </div>
      <div className="flex my-8 mr-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const courseId = params.slug[0];
  const lessonId = params.slug[1];

  return {
    props: getCourseForWebSection(courseId, lessonId),
  };
}

export default LessonPage;
