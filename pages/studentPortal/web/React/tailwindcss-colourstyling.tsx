import { useRouter } from "next/router";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import { getTailwindColourStylingLessonData } from "../../../api/studentPortal/lessons/web/react/tailwindcss-colourstyling";

type LessonProps = {
  lessonComponents: LessonComponentData[];
};

const TailwindColourStyling = ({ lessonComponents }: LessonProps) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/assignments/tailwindAssignment");
  };
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

export async function getServerSideProps() {
  const lessonComponents = getTailwindColourStylingLessonData();
  return { props: { lessonComponents } };
}

export default TailwindColourStyling;
