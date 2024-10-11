import React from "react";
import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { ResponseData } from "../../../api/studentPortal/courses/codingBasics/introduction";
import { getLessonForPersonalFinanceCourse } from "../../../api/studentPortal/courses/personalFinance";

const LessonPage = ({ lessonComponents }: ResponseData) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar
        completed={100}
        exitLink="/studentPortal/courses/personalFinance"
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
    props: getLessonForPersonalFinanceCourse(slug),
  };
}

export default LessonPage;
