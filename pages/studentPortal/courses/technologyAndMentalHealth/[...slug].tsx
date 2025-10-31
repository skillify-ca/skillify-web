import dynamic from "next/dynamic";
import React from "react";
import { LessonComponentData } from "../../../../components/studentPortal/lessons/LessonComponent";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { getLessonForMentalHealthCourse } from "../../../api/studentPortal/courses/mentalHealth";

// dynamic import for the LessonComponent component
const LessonComponent = dynamic(
  () => import("../../../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);

const LessonPage = ({ lessonComponents, lessonId, lessonCount }: { lessonComponents: LessonComponentData[], lessonId: number, lessonCount: number }) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar
        completed={Math.round(lessonId / lessonCount * 100)}
        exitLink="/studentPortal/courses/technologyAndMentalHealth"
      />
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForMentalHealthCourse(slug),
  };
}

export default LessonPage;
