import { Router, useRouter } from "next/router";
import React from "react";
import Card, { CardData } from "../../../../components/coding/Card";
import LessonComponent, {
  LessonComponentData,
} from "../../../../components/coding/studentPortal/LessonComponent";
import { Button } from "../../../../components/ui/Button";
import Navbar from "../../../../components/ui/Navbar";

const React2 = ({ lessonComponents }) => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/studentPortal/web/React");
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-8 px-4 pt-4 m-8 sm:px-12">
        {lessonComponents.map((it) => (
          <LessonComponent data={it} />
        ))}
      </div>
      <div className="flex my-8 mr-8 sm:justify-end">
        <Button onClick={handleContinue} label="Continue" />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
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
      text: "After helping many fellow Skillifyers, Lucky has become Skillify's master of deployment.  Watch the video below and follow his steps to deploy your test project!",
    },
    {
      component: "loom-video",
      videoId: "afe5fda5eb4a485282a115efd5efb212",
    },
    {
      component: "description",
      text: "Got confetti of your own? Congratulations!! You're up and running.",
    },

    {
      component: "submission",
      codeSandboxTitle: "Submit your link below",
      link: "",
      placeholder: "Vercel Link",
      assignmentId: "f738a8da-fb43-4728-9622-8064ab14be2e",
    },
    {
      component: "description",
      text: "Still having trouble? No worries! Feel free to slack message a fellow classmate or book a coaching session through the portal via the Coaches tab.",
    },
  ];
  return { props: { lessonComponents } };
}

export default React2;
