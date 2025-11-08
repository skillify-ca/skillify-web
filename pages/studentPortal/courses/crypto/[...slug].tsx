import dynamic from "next/dynamic";
import React from "react";
// import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { getLessonForCryptoCourse } from "../../../api/studentPortal/courses/crypto";
import { ResponseData } from "../../../api/studentPortal/courses/javascript/introduction-coding-basics";

const LessonComponent = dynamic(
  () => import("../../../../components/studentPortal/lessons/LessonComponent"),
  { ssr: false }
);
const LessonPage = ({ lessonComponents }: ResponseData) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar completed={100} exitLink="/studentPortal/courses/crypto" />
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForCryptoCourse(slug),
  };
}

export default LessonPage;
