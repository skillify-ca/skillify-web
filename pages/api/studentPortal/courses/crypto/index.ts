import { Unit } from "../../units";
import { getBenefitsOfCryptoLesson } from "./benefits";
import { getBlockchainsLesson } from "./blockchains";
import { getDangersOfCryptoLesson } from "./dangers";
import { getIntroductionCryptoLesson } from "./introduction";

export const cryptoUnits: Unit[] = [
  {
    title: "Introduction",
    nodes: [
      {
        title: "Lesson 1",
        type: "lesson",
        description: "Introduction to Crypto",
        link: "introduction",
      },
      {
        title: "Lesson 2",
        type: "lesson",
        description: "Dangers of Crypto",
        link: "dangers",
      },
      {
        title: "Lesson 3",
        type: "lesson",
        description: "Benefits of Crypto",
        link: "benefits",
      },
      {
        title: "Lesson 4",
        type: "lesson",
        description: "Blockchains",
        link: "blockchains",
      },
    ],
  },
];

export function getLessonForCryptoCourse(lessonId: string) {
  if (lessonId === "introduction") {
    return getIntroductionCryptoLesson();
  } else if (lessonId === "dangers") {
    return getDangersOfCryptoLesson();
  } else if (lessonId === "benefits") {
    return getBenefitsOfCryptoLesson();
  } else if (lessonId === "blockchains") {
    return getBlockchainsLesson();
  }
}
