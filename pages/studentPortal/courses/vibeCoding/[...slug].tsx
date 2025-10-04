import dynamic from "next/dynamic";
import React from "react";
import { ResponseData } from "../../../api/studentPortal/courses/codingBasics/introduction";
import { getLessonForVibeCodingCourse } from "../../../api/studentPortal/courses/vibeCoding";

// dynamic import for the LessonComponent component
const LessonComponent = dynamic(
  () => import("../../../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);

const LessonPage = ({ lessonComponents, nextSlug }: ResponseData) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForVibeCodingCourse(slug),
  };
}

export default LessonPage;
