import { useRouter } from "next/router";
import React from "react";
import LessonComponent from "../../../../components/studentPortal/lessons/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/ui/ProgressBar";
import { useAuth } from "../../../../lib/authContext";
import { supabase } from "../../../../lib/supabase";
import { getLessonForReactCourse } from "../../../api/studentPortal/courses/frontend";
import { ResponseData } from "../../../api/studentPortal/courses/javascript/introduction-coding-basics";

const LessonPage = ({
  lessonComponents,
  currentNode,
  nextNode,
  nextSlug,
}: ResponseData) => {
  const props = {
    lessonComponents,
    currentNode,
    nextNode,
    nextSlug,
  };

  const { user } = useAuth();
  const router = useRouter();

  const handleContinue = async () => {
    try {
      const { error: completeError } = await supabase
        .from("user_intro_nodes")
        .update({ completed: true })
        .eq("user_id", user.uid)
        .eq("node_id", currentNode);

      if (completeError) {
        throw completeError;
      }

      const { error: unlockError } = await supabase
        .from("user_intro_nodes")
        .update({ locked: false })
        .eq("user_id", user.uid)
        .eq("node_id", nextNode);

      if (unlockError) {
        throw unlockError;
      }

      router.push(`/studentPortal/intro/${nextSlug}`);
    } catch (error) {
      console.error("Error completing/unlocking node:", error);
    }
  };

  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar completed={100} exitLink="/studentPortal/courses/frontend" />
      {lessonComponents.map((it, index) => (
        <LessonComponent key={index} data={it} />
      ))}
      <div className="grid grid-cols-1 gap-8"></div>
      {nextSlug && (
        <div className="flex mt-8 sm:justify-end">
          <Button onClick={handleContinue} label="Continue" />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const slug = params.slug.join("/");
  return {
    props: getLessonForReactCourse(slug),
  };
}

export default LessonPage;
