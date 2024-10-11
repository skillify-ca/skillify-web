import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";

export const getGithubLessonData = () => {
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
        {
          title: "Vercel Lesson",
          description: "This is the link to the Vercel Lesson",
          image: "/images/logo.png",
          link: "skillify.ca/studentPortal/lessons/github",
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
  const nextSlug = "react/tailwindcss-gridflex";

  return { lessonComponents, nextSlug };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lessonData = getGithubLessonData();
  return res.status(200).json(lessonData);
};
