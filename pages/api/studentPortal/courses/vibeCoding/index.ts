import { NextApiRequest, NextApiResponse } from "next";
import { LessonPageData } from "../types";
import { getDataForDeployToVercelLesson } from "./deploy-to-vercel";
import { getDataForHelloWorldAiStudioLesson } from "./hello-world-ai-studio";
import { getDataForSetupToolsLesson } from "./setup-tools";

function getDataForShowingListAndDetailsLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Showing a list of items and details",
      },
      {
        component: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/math-champ-b7e77.appspot.com/o/vibeCoding%2Fbuilding-list.mov?alt=media"
      },
      {
        component: "checkboxForm",
        title: "Completion Criteria",
        items: [
          {
            label: "My app displays a list of items and details with mock data.",
            required: true,
          },
        ],
        url: "/studentPortal/courses/vibeCoding/connect-to-database",
      }
    ],
    lessonId: 4,
    lessonCount: 8,
  };
}

function getDataForConnectToDatabaseLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Connecting to a Google Sheets database",
      },
      {
        component: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/math-champ-b7e77.appspot.com/o/vibeCoding%2Freal-data.mov?alt=media"
      },
      {
        component: "checkboxForm",
        title: "Completion Criteria",
        items: [
          {
            label: "My web app is reading data from a Google Sheets database.",
            required: true,
          },
        ],
        url: "/studentPortal/courses/vibeCoding/searching-and-filtering-data",
      }
    ],
    lessonId: 5,
    lessonCount: 8,
  };
}

function getDataForSearchingAndFilteringDataLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Searching and filtering data",
      },
      {
        component: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/math-champ-b7e77.appspot.com/o/vibeCoding%2Fsearch.mov?alt=media",
      },
      {
        component: "checkboxForm",
        title: "Completion Criteria",
        items: [
          {
            label: "My web app has a working search bar for searching and filtering data.",
            required: true,
          },
        ],
        url: "/studentPortal/courses/vibeCoding/populate-database",
      }
    ],
    lessonId: 6,
    lessonCount: 8,
  };
}

function getDataForPopulateDatabaseLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Populate and extend your database",
      },
      {
        component: "checkboxForm",
        title: "Completion Criteria",
        items: [
          {
            label: "My database has a good amount of quality data.",
            required: true,
          },
        ],
        url: "/studentPortal/courses/vibeCoding/conclusion",
      }
    ],
    lessonId: 7,
    lessonCount: 8,
  };
}

function getDataForConclusionLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Conclusion",
      },
      {
        component: "description",
        text: "This is the end of the Vibe Coding course. AI Tools can be very helpful when you keep the problem small but they are expensive and have limits and restrictions. You can continue to work on your project or start a new one. Remember, the goal is to validate your ideas and get feedback from users. Book an office hour with a coach if you get stuck. Good luck!",
      },
      {
        component: "checkboxForm",
        title: "Completion Criteria",
        items: [
          {
            label: "I have updated my web app and have gotten feedback from my target users.",
            required: true,
          },
        ],
        url: "/studentPortal/courses/vibeCoding",
      }
    ],
    lessonId: 8,
    lessonCount: 8,
  };
} 

export function getLessonForVibeCodingCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "setup-tools") {
    return getDataForSetupToolsLesson();
  }
  if (lessonId.toLocaleLowerCase() === "hello-world-ai-studio") {
    return getDataForHelloWorldAiStudioLesson();
  }
  if (lessonId.toLocaleLowerCase() === "deploy-to-vercel") {
    return getDataForDeployToVercelLesson();
  }
  if (lessonId.toLocaleLowerCase() === "showing-list-and-details") {
    return getDataForShowingListAndDetailsLesson();
  }

  if (lessonId.toLocaleLowerCase() === "connect-to-database") {
    return getDataForConnectToDatabaseLesson();
  }

  if (lessonId.toLocaleLowerCase() === "searching-and-filtering-data") {
    return getDataForSearchingAndFilteringDataLesson();
  }

  if (lessonId.toLocaleLowerCase() === "populate-database") {
    return getDataForPopulateDatabaseLesson();
  }

  if (lessonId.toLocaleLowerCase() === "conclusion") {
    return getDataForConclusionLesson();
  }

  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LessonPageData>
) {
  const slug = (req.query.slug as string) || "setup-tools";
  const data = getLessonForVibeCodingCourse(slug);

  res.status(200).json(data);
}
