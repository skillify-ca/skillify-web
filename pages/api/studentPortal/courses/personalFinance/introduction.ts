import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
export interface ReactResponseData {
  nextSlug: string;
  lessonComponents: LessonComponentData[];
}
export const getPersonFinanceIntroductionLesson = () => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Introduction to Personal Finance",
    },
    {
      component: "description",
      text: "Welcome to the Personal Finance course! In this course, you will learn how to manage your money effectively. You will learn how to track your spending, lower your costs, increase your income, pay down debt, build an emergency fund, save for your goals, invest tax-free, save for retirement, and live life to the fullest. Let's get started!",
    },
    {
      component: "description",
      text: "Personal finance is the management of an individual's financial decisions and activities. It involves how you spend, save, protect, and invest your money. It also addresses the financial risks and future life events that you may face. In this course, you will learn how to make informed decisions about your finances and how to achieve your financial goals.",
    },
    {
      component: "description",
      text: "Many people wonder why personal finance isn't taught in schools. Unfortuntately, in a capitalistic society, many people earn money by taking advantage of uneducated consumers. This course is designed to help you become a more informed consumer and make better financial decisions.",
    },
  ];
  const nextSlug = "react/components";

  return { lessonComponents, nextSlug };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ReactResponseData>
) => {
  const lessonData = getPersonFinanceIntroductionLesson();
  return res.status(200).json(lessonData);
};
