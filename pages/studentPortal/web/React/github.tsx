import { useRouter } from "next/router";
import React from "react";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";

type LessonProps = {
  lessonComponents: LessonComponentData[];
};

const Github = ({ lessonComponents }: LessonProps) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React/tailwindcss-gridflex");
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
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Deploying a Project on Github & Vercel",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Github",
          description:
            "The official Github site.  Click 'View' to Login and create an account.",
          image: "/images/lessons/github-mark.png",
          link: "https://github.com/login",
        },
        {
          title: "Github Desktop",
          description:
            "Click 'View' for the download links for Github Desktop.",
          image: "https://desktop.github.com/images/desktop-icon.svg",
          link: "https://desktop.github.com/",
        },
        {
          title: "Vercel",
          description:
            "The official Vercel site.  Click 'View' to Login and create an account.",
          image: "https://assets.vercel.com/image/upload/front/zeit/og.png",
          link: "https://vercel.com/login",
        },
      ],
    },
    {
      component: "description",
      text: "Watch the video below and follow Lucky's steps to deploy your test assignment!",
    },
    {
      component: "loom-video",
      videoId: "afe5fda5eb4a485282a115efd5efb212",
    },
    {
      component: "description",
      text: "Saw your own confetti? Congratulations!! You're up and running.",
    },

    {
      component: "submission",
      codeSandboxTitle: "Submit your link below",
      link: "",
      placeholder: "Vercel Link",
      assignmentId: "github-vercel",
    },
    {
      component: "description",
      text: "Still having trouble? No worries! Feel free to slack message a fellow classmate or book a coaching session through the portal via the Coaches tab.",
    },
  ];
  return { props: { lessonComponents } };
}

export default Github;
