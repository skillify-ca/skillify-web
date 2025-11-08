import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../javascript/introduction-coding-basics";

export const getVercelLessonData = (): ResponseData => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Deploying a Website using Vercel",
    },
    {
      component: "image",
      url: "/images/lessons/vercel.png",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Vercel Login",
          description: "Link to create a Vercel account.",
          image: "/images/lessons/vercel.png",
          link: "https://vercel.com/login",
        },
      ],
    },
    {
      component: "title",
      text: "Intro",
    },
    {
      component: "description",
      text: "Imagine you've created a website - be it a personal blog, an e-commerce store, or a portfolio showcasing your projects and skills. To share your work with the world, you'll need a straightforward way for people to access it. This is where Vercel comes into play. By utilizing Vercel, you can easily obtain a link to your website, ensuring that anyone interested can explore your work with just a click.",
    },
    {
      component: "title",
      text: "Getting Started with Vercel",
    },
    {
      component: "description",
      text: "Step 1: First create an account in Vercel using your GitHub account so that they're linked together.",
    },
    {
      component: "image",
      url: "/images/lessons/login.png",
    },
    {
      component: "description",
      text: "Step 2: Next, press the add new button.",
    },
    {
      component: "image",
      url: "/images/lessons/addnew.png",
    },
    {
      component: "description",
      text: "Step 3: Then click on the project.",
    },
    {
      component: "image",
      url: "/images/lessons/project.png",
    },
    {
      component: "title",
      text: "Deploying your website",
    },
    {
      component: "description",
      text: "It will take you to a screen like this, where you can select the project that you want to import and press import.",
    },
    {
      component: "image",
      url: "/images/lessons/import.png",
    },
    {
      component: "description",
      text: "Next, you will have to deploy your project.",
    },
    {
      component: "image",
      url: "/images/lessons/deploy.png",
    },
    {
      component: "description",
      text: "Congratulations, now you're done deploying your website using Vercel!",
    },
    {
      component: "image",
      url: "/images/lessons/deployed.png",
    },
    {
      component: "description",
      text: "Now you can use the link to share your project with others!",
    },
    {
      component: "image",
      url: "/images/lessons/projectDeployment.png",
    },
  ];
  const nextSlug = "react/tailwindcss-gridflex";

  return { lessonComponents, nextSlug, nextNode: 0, currentNode: 0 };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lessonData = getVercelLessonData();
  return res.status(200).json(lessonData);
};
