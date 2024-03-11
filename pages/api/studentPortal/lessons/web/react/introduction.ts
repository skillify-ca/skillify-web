import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../../components/studentPortal/lessons/LessonComponent";
export interface ReactResponseData {
  nextSlug: string;
  lessonComponents: LessonComponentData[];
}
export const getIntroToWebDevLessonData = () => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Introduction to Web Development",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Install Node.js",
          description:
            "A runtime environment that needs to be installed to run JavaScript on your computer.",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-mzw13XQJPYM%2FXgzNHXSUdXI%2FAAAAAAAAAYY%2FxeIhLBEpTQUn8huUCnWXdUX6vIR_T4UCQCPcBGAYYCw%2Fs1600%2Fhttp___pluspng.com_img-png_nodejs-png-nodejs-icon-png-50-px-1600.png&f=1&nofb=1&ipt=1a04cc5668a79501f757f3bfc847dc4440346f65be0fd8cabc82ac1be95070df&ipo=images",
          link: "https://nodejs.org/en/download/",
        },
        {
          title: "React Docs - Your First Component",
          description: "Build your first React component",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://beta.reactjs.org/learn/your-first-component",
        },
        {
          title: "React Docs - Importing and Exporting",
          description: "Re-use your components from other places.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          link: "https://beta.reactjs.org/learn/importing-and-exporting-components",
        },
        {
          title:
            "Learn how to use Props in React in 19 minutes (for beginners)",
          description: "React.js Basics 101 for Beginners",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F05%2FNew-YouTube-logo.jpg&f=1&nofb=1&ipt=be874732ffc03436eaa6bc7c098dc1403ff4f7864b472b1a378051fecdab52bc&ipo=images",
          link: "https://beta.reactjs.org/learn/importing-and-exporting-components",
        },
        {
          title:
            "Learn how to use State in React in 19 minutes (for beginners)",
          description: "React.js Basics 101 for Beginners",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F05%2FNew-YouTube-logo.jpg&f=1&nofb=1&ipt=be874732ffc03436eaa6bc7c098dc1403ff4f7864b472b1a378051fecdab52bc&ipo=images",
          link: "https://www.youtube.com/watch?v=kkuq0gTGRFQ&list=PLf16UKl7nR5ARPKtuI76E-ShyaiKH50IF&index=4",
        },
      ],
    },
  ];
  const nextSlug = "react/components";

  return { lessonComponents, nextSlug };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ReactResponseData>
) => {
  const lessonData = getIntroToWebDevLessonData();
  return res.status(200).json(lessonData);
};
