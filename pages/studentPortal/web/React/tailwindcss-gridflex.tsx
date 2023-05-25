import { useRouter } from "next/router";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import { getTailwindGridFlexLessonData } from "../../../api/studentPortal/lessons/web/react/tailwindcss-gridflex";

type LessonProps = {
  lessonComponents: LessonComponentData[];
};

const TailwindGridFlex = ({ lessonComponents }: LessonProps) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/tailwindcss-colourstyling");
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

export async function getServerSideProps() {
  const lessonComponents = getTailwindGridFlexLessonData();
  return { props: { lessonComponents } };
}

export default TailwindGridFlex;
