import Link from "next/link";
import React from "react";
import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { getLessonForBasicsCourse } from "../../../api/studentPortal/courses/codingBasics";
import { ResponseData } from "../../../api/studentPortal/courses/codingBasics/introduction";

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
    props: getLessonForBasicsCourse(slug),
  };
}

export default LessonPage;
