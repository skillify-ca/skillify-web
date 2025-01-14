import { NextApiRequest, NextApiResponse } from "next";
import { ResponseData } from "../introduction";

export function getDataForCSSAssignment() {
  const data: ResponseData = {
    lessonComponents: [
      {
        component: "title",
        text: "CSS Blog Assignment",
      },
      {
        component: "description",
        text: "Previously you made a blog using HTML but it may look very boring.",
      },
      {
        component: "description",
        text: "We are going to change that using CSS styling! You will now use CSS styling to bring your page to life!",
      },
      { component: "loom-video", videoId: "ed935cc53123419695e9f6b97f5589e9" },
      {
        component: "title",
        text: "How to get started:",
      },
      {
        component: "caption",
        text: "Step 1:",
      },
      {
        component: "description",
        text: "Open the CSS reference guide and keep it handy. It'll be helpful to look back to all the possible styles that you can use to make your blog page look modern and professional.",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "CSS reference guide",
            description: "A guide to all CSS styles.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
            link: "https://www.w3schools.com/cssref/default.asp",
          },
        ],
      },
      {
        component: "caption",
        text: "Step 2:",
      },
      {
        component: "description",
        text: "Locate your HTML Blog assignment folder and create a new file inside called style.css. This is where your CSS code will go! Link it to your HTML page using a link tag inside of your head tag.",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "How to link CSS",
            description: "Guide on linking CSS to an HTML document.",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
            link: "https://www.w3schools.com/css/css_howto.asp",
          },
        ],
      },
      {
        component: "caption",
        text: "Step 3:",
      },
      {
        component: "description",
        text: "In this assignment, you will need to set up your Blog to follow the French Flag Layout using CSS Grid. Check out my previous video called 'What is a div' for hints. The Layout below is what you want to aim for.",
      },
      {
        component: "resource-list",
        resources: [
          {
            title: "French Flag Layout Example",
            description: "An example of the French Flag Layout using CSS Grid.",
            image: "/images/coding/units/css/layout1.png",
            link: "", // No link provided in the original HTML
          },
        ],
      },
      {
        component: "caption",
        text: "Step 4:",
      },
      {
        component: "description",
        text: "Use Flexbox to create a row of navigation links.",
      },
      {
        component: "caption",
        text: "Step 5:",
      },
      {
        component: "description",
        text: "Once you have the layout in place, the sky is the limit. Try out different CSS styles to make your page cool and exciting! Add colors, hover effects, borders, or whatever you want!",
      },
      {
        component: "caption",
        text: "Step 6:",
      },
      {
        component: "description",
        text: "Create a second HTML page and style it with a similar design that you used to style your first HTML page. Put the second HTML page in the same folder as your primary home page that you built in the previous assignment. This second page should resemble some kind of online store that users would come to buy things online. You don't have to implement any purchasing functionality, but you should build the layout of an online store and connect this second page to your home page using an anchor tag in the navigation bar.",
      },
      {
        component: "caption",
        text: "Step 7:",
      },
      {
        component: "description",
        text: "On your second page, make sure to implement a different kind of advanced grid layout than what you used on your first page. Don't forget to link the two pages together!",
      },
    ],
    currentNode: 52,
    nextNode: 7,
    nextSlug: "js-introduction",
  };
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = getDataForCSSAssignment();

  res.status(200).json(data);
}
