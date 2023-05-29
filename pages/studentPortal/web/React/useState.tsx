import { useRouter } from "next/router";
import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import { getUseStateLessonData } from "../../../api/studentPortal/lessons/web/react/useState";

const React3 = ({ lessonComponents }) => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/studentPortal/web/React/components");
  };

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
  const lessonComponents = getUseStateLessonData();
  return { props: { lessonComponents } };
}

export default React3;
