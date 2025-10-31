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
      },
      {
        component: "description",
        text: "In this course you will:"
      },
      {
        component: "list",
        items: [
          "become more aware of your own technology use and potential misuse",
          "think more critically about what you see online and how you spend your time online"
        ]
      },
      {
        component: "checkboxForm",
        title: "",
        items: [{
          label: "I am ready to better understand and improve my mental health!",
          required: true
        }],
        url: "/studentPortal/courses/technologyAndMentalHealth/modes-of-technology",
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
        component: "description",
        text: "Here are some ways that people use technology in their daily life",
      },

      {
        component: "carousel",
        items: [
          { text: "Televisions", image: "/images/courses/mental-health/tv.jpg" },
          { text: "Computers", image: "/images/courses/mental-health/computer.jpg" },
          { text: "Smartphones", image: "/images/courses/mental-health/smartphone.jpg" },
          { text: "Social Media (eg. LinkedIn, Reddit, Instagram, TikTok, Facebook)", image: "/images/courses/mental-health/social-media.jpg" },
          { text: "Online Gambling (eg. sports betting, speculative trading stocks and crypto)", image: "/images/courses/mental-health/online-gambling.jpg" },
          { text: "Video Games", image: "/images/courses/mental-health/video-game.jpg" },
        ]
      },
      {
        component: "description",
        text: "Reflection Questions",
        bold: true
      },
      {
        component: "list",
        items: [
          "What is your relationship like with each of these? How have they improved your life?", "When have they gotten in the way of something else?", "When was the last time that you had a break from each these things?"
        ]
      },
      {
        component: "checkboxForm",
        title: "",
        items: [
          {
            label: "I have examined my relationship and use with different technology and devices.",
            required: true
          }
        ],
        url: "/studentPortal/courses/technologyAndMentalHealth/offline-vs-online",

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
        text: "Offline vs Online",
      },
      {
        component: "description",
        text: "Rate from 1-10 how often you do these activities offline vs online. (1 is fully offline. 10 is fully online)",
      },
      {
        component: "slider-list",
        items: [
          "shopping",
          "gambling",
          "play games",
          "watch movies",
          "dating",
          "learning or research",
          "communicating with friends",
        ]
      },
      {
        component: "checkboxForm",
        items: [
          {
            label: "I have an understanding of where I spend the most time online in my life.",
            required: true,
          }
        ],
        title: "",
        url: "/studentPortal/courses/technologyAndMentalHealth/your-mental-diet",
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
        text: "Just like your body becomes energized by the food you feed it. Your mind becomes energized by the information you feed it. WHich people or organizations have influence on your mental diet? Be careful of letting private corporations dictate what you see, think and feel."
      },
      {
        component: "description",
        text: "Influence your algorithm",
        bold: true,
      },
      {
        component: "description",
        text: "Most social media applications allow you to mute posts and creators that you don't want influencing your feed. You can curate your feed by being intentional about who you follow and allow to show you content. Usually you can select a 'not interested' option on any post."
      },
      {
        component: "description",
        text: "Reflection Questions",
        bold: true,
      },
      {
        component: "list",
        items: [
          "Is what I'm looking at real or was it generated by AI?",
          "Why did the creator of this content want me to see this?",
          "What story are they trying to tell?",
          "Is there an action the creator wants me to do?",
          "Is there a product the creator wants me to buy?",
        ]
      },
      {
        component: "checkboxForm",
        items: [
          {
            label: "I can critically think about the content that I see online",
            required: true,
          },
          {
            label: "I muted an online account that was not serving me in becoming the best version of myself",
            required: false,
          }
        ],
        title: "Completion Criteria",
        url: "/studentPortal/courses/technologyAndMentalHealth/when-does-technology-become-a-problem",
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
        component: "description",
        text: "When we are addicted to being online and we may find ourselves neglecting other important activities. But sometimes it's not about quantity of time you spend online, but what it is you're doing online that can be harmful.",
      },
      {
        component: "carousel",
        items: [
          { text: "Time online leads to neglect of other important activities (eg. eating healthy, moving your body, socializing, doing work)", image: "/images/courses/mental-health/healthy-food.jpg" },
          { text: "Physical pain in your back or neck", image: "/images/courses/mental-health/neck-pain.jpg" },
          { text: "Interfering with getting a good night's sleep (8 hours a night)", image: "/images/courses/mental-health/sleep.jpg" },
          { text: "In a 2010 study, an Ontario study reported that 25% of students who have problems with gambling reported an attempted suicide", image: "/images/courses/mental-health/gambling.jpg" },
        ]
      },
      {
        component: "checkboxForm",
        items: [
          { label: "I identified one way reducing my technology use could improve my life", required: false }
        ],
        title: "",
        url: "/studentPortal/courses/technologyAndMentalHealth/what-can-you-do"
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
        component: "description",
        text: "It can feel overwhelming when trying to cut down on your technology use. Technology is all around us and it's hard to avoid these environmental triggers. The best thing you can is to be aware of the effects and pick one small step where you can be consistent.",
      },
      {
        component: "checkboxForm",
        items: [
          { label: "I am aware of the costs of using technology and social media", required: false },
          { label: "I identified one friend or family member who I can talk to about their internet, gambling and video game use", required: false },
          { label: "I identfieid a common area where I can leave computers and media devices, like the family room", required: false },
          { label: "I have a spot to leave my cellphone that allows me to physically distance myself from it", required: false },
          { label: "I identified an online activity that I can shift to be more offline", required: false },
          { label: "I scheduled an in person interaction with a friend or family member that I usually wouldn't have", required: false },
          { label: "I am trying to be a role model for people who are younger than myself. I'm not perfect but I'm working on myself.", required: false },
        ],
        title: "Completion Criteria",
        url: "/studentPortal/courses/technologyAndMentalHealth"
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
  if (lessonId.toLocaleLowerCase() === "offline-vs-online") {
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
