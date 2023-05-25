import { useRouter } from "next/router";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import { getPropsLessonData } from "../../../api/studentPortal/lessons/web/react/props";

export type LessonProps = {
  lessonComponents: LessonComponentData[];
};

const React3 = ({ lessonComponents }: LessonProps) => {
  
  
  const router = useRouter();
  const handleContinue = () => {
    router.push("/studentPortal/web/React/assignments/componentsAssignment");
  };

  if (!lessonComponents) return <div>Loading...</div>;

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
  const lessonComponents = getPropsLessonData();
  return { props: { lessonComponents } };
}

export default React3;
