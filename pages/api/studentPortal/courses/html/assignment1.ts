import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../types";

export function getDataForHTMLAssignment() {
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "HTML Blog Assignment",
      },
      {
        component: "description",
        text: "You are now ready to complete your very first coding assignment!",
      },
      {
        component: "description",
        text: "How to get started:",
      },
      {
        component: "caption",
        text: "Step 1:",
      },
      {
        component: "description",
        text: "Open the W3Schools HTML tutorials. You will need to refer back to it as you create your page.",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "W3Schools HTML tutorials",
            description: "Comprehensive tutorials on HTML.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
            link: "https://www.w3schools.com/html/default.asp",
          },
        ],
      },
      {
        component: "caption",
        text: "Step 2:",
      },
      {
        component: "description",
        text: "Create a folder on your computer called Skillify and create a new file called index.html inside that folder. This is where you will do all your coding!",
      },
      {
        component: "caption",
        text: "Step 3:",
      },
      {
        component: "description",
        text: "Open your Skillify folder using Visual Studio Code.",
      },
      {
        component: "caption",
        text: "Step 4:",
      },
      {
        component: "description",
        text: "Make sure to use headers, paragraphs, images, links, and lists inside of your blog page. You may use any other HTML tags you like as well. Make sure to SAVE your work as you are changing your website. Focus on the structure of your webpage, we will make it flashy once we learn CSS styling! Don't worry about centering or styling, that will come in the next module.",
      },
      {
        component: "caption",
        text: "Step 5:",
      },
      {
        component: "description",
        text: "Once you are complete, create a zip file from your Skillify folder and drag and drop it into Slack to submit your assignment.",
      },
      {
        component: "title",
        text: "Showcase",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "Baseball Blog by Pratik P",
            description: "A sample blog project about baseball.",
            image:
              "http://localhost:3000/coding/html/baseball/Rogers%20Centre-1000.jpeg",
            link: "/coding/html/baseball/index.html",
          },
          {
            title: "Food Blog by Mithulan M",
            description: "A sample blog project about food.",
            image:
              "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/03/carnitas-1802w-1536x1025.jpg",
            link: "/coding/html/foodblog.html",
          },
        ],
      },
      {
        component: "caption",
        text: "Video Tutorial:",
      },
      {
        component: "loom-video",
        videoId: "c150ce49d1844f3297c4a304a6f3c486",
      },
    ],
    currentNode: 1,
    nextNode: 2,
    nextSlug: "",
  };

  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data: ResponseData = getDataForHTMLAssignment();

  res.status(200).json(data);
}
