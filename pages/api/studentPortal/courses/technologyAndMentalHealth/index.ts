import { NextApiRequest, NextApiResponse } from "next";
import { LessonPageData } from "../types";

function getDataForIntroductionLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Introduction",
      },
      {
        component: "description",
        text: "Young people today have grown up using technology as a way to stay connected to people and to do their work. Older adults who grew up in an earlier era can recall a more “off the grid” childhood when their environment wasn’t fully digital."
      }
    ],
    lessonId: 1,
    lessonCount: 6,
  };
}

function getDataForModesOfTechnologyLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Modes of Technology",
      },
      {
        component: "list",
        items: [
          "Televisions",
          "Computers",
          "Smartphones",
          "Social Media (includes LinkedIn, Reddit, Instagram, TikTok, Facebook)",
          "Online Gambling (can include sports betting, trading stocks and crypto)",
          "Video Games",
        ]
      }
    ],
    lessonId: 2,
    lessonCount: 6,
  };
}

function getDataForReflectionTaskLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Reflection Task",
      },
      {
        component: "description",
        text: "Rate from 1-10 how often you do these activities offline vs online. (1 is fully offline. 10 is fully online)",
      },
      {
        component: "list",
        items: [
          "shopping",
          "gambling",
          "play games",
          "watch movies",
          "dating",
          "learning or research",
          "communicating with friends",
        ]
      }
    ],
    lessonId: 3,
    lessonCount: 6,
  };
}

function getDataForYourMentalDietLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "Your Mental Diet",
      },
      {
        component: "description",
        text: "Just like your body becomes energized by the food you feed it. Your mind becomes energized by the information you feed it. Who is in control of your physical diet? Who is in control of your mental diet? Be careful of letting private corporations dictate what you see, think and feel. Whenever you see something online you should ask yourself “Why did the creator of this content want me to see this? What story are they trying to tell?” Asking these questions helps you think more critically about the things you see online. In a world where AI-generated content is taking over the internet, we should be more careful and intentional about what we consume online. Most social media applications will allow you to mute posts and creators that you don’t want influencing your feed. A quick action you can take is to mute one account online that is not serving you in becoming the best version of yourself that you can be."
      }
    ],
    lessonId: 4,
    lessonCount: 6,
  };
}

function getDataForWhenDoesTechnologyBecomeAProblemLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "When does Technology Become a Problem",
      },
      {
        component: "list",
        items: [
          "Time online leads to neglect of other important activities (eg. eating healthy, moving your body, socializing, doing work)",
          "Physical pain in your back or neck",
          "Interfering with getting a good night's sleep (8 hours a night)",
          "In a 2010 study, an Ontario study reported that 25% of students who have problems with gambling reported an attempted suicide",
          "It's not always about how much time you spend online, but it's also what are you doing online",
        ]
      }
    ],
    lessonId: 5,
    lessonCount: 6,
  };
}

function getDataForWhatCanYouDoLesson(): LessonPageData {
  return {
    lessonComponents: [
      {
        component: "title",
        text: "What Can You Do?",
      },
      {
        component: "list",
        items: [
          "Be aware of the costs of using technology and social media",
          "Talk to your friends and family about their internet, gambling and video game use. Talking about it with someone you trust can alleviate some internal pressure and weight you are holding",
          "Leave computers and media devices in common areas, like the family room",
          "Physically distance yourself from your cellphone when you can. (eg. Put it in the cupboard)",
          "Shift some of your online activities to be more offline",
          "Schedule regular in person interactions with friends or family",
          "Be a role model for people who are younger than you. Pay attention to what you present to others",
        ]
      }
    ],
    lessonId: 6,
    lessonCount: 6,
  };
}

export function getLessonForTechnologyAndMentalHealthCourse(lessonId: string) {
  if (lessonId.toLocaleLowerCase() === "introduction") {
    return getDataForIntroductionLesson();
  }
  if (lessonId.toLocaleLowerCase() === "modes-of-technology") {
    return getDataForModesOfTechnologyLesson();
  }
  if (lessonId.toLocaleLowerCase() === "reflection-task") {
    return getDataForReflectionTaskLesson();
  }
  if (lessonId.toLocaleLowerCase() === "your-mental-diet") {
    return getDataForYourMentalDietLesson();
  }
  if (lessonId.toLocaleLowerCase() === "when-does-technology-become-a-problem") {
    return getDataForWhenDoesTechnologyBecomeAProblemLesson();
  }
  if (lessonId.toLocaleLowerCase() === "what-can-you-do") {
    return getDataForWhatCanYouDoLesson();
  }

  throw new Error(`Could not find lessons for ${lessonId}`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LessonPageData>
) {
  const slug = (req.query.slug as string) || "introduction";
  const data = getLessonForTechnologyAndMentalHealthCourse(slug);

  res.status(200).json(data);
}
