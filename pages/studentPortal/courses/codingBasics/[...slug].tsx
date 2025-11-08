import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { getLessonForJavaScriptCourse } from "../../../api/studentPortal/courses/javascript";
import { ResponseData } from "../../../api/studentPortal/courses/types";

// dynamic import for the LessonComponent component
const LessonComponent = dynamic(
  () => import("../../../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);

const LessonPage = ({ lessonComponents, nextSlug }: ResponseData) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar
        completed={100}
        exitLink="/studentPortal/courses/codingBasics"
      />
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
      <div className="grid grid-cols-1 gap-8"></div>
      {nextSlug && (
        <Link scroll href={`/studentPortal/courses/codingBasics/${nextSlug}`}>
          <div className="flex mt-8 sm:justify-end">
            <Button label="Continue" />
          </div>
        </Link>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForJavaScriptCourse(slug),
  };
}

export default LessonPage;
