import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
export interface ReactResponseData {
  nextSlug: string;
  lessonComponents: LessonComponentData[];
}
export const getPersonFinanceTrackSpendingLesson = () => {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Lesson: Track Your Spending",
    },
    {
      component: "description",
      text: "If you want to change anything in your life the first step is to start tracking it.",
    },
    {
      component: "description",
      text: "Many people that are struggling with their finances don't know where their money is going. They don't know how much they are spending on groceries, eating out, entertainment, or other expenses. They don't know how much they are spending on their credit cards, loans, or other debts. They don't know how much they are saving or investing. They don't know how much they are earning or how much they are paying in taxes.",
    },
    {
      component: "description",
      text: "The first step to improving your finances is to start tracking your spending. Just the act of tracking your spending will shine a light and help you become more aware of things you didn't notice before. You will start to see patterns and habits that you didn't realize you had. Many people feel powerless or overwhelmed with their money because they just don't know where it is going.",
    },
    {
      component: "description",
      text: "Don't overthink this step. You don't need a fancy app or software to track your spending. You can use a simple spreadsheet, a notebook, or a piece of paper. Google Sheets is an excellent starting point. The most important thing is to start tracking your spending today.",
    },
  ];
  const nextSlug = "react/components";

  return { lessonComponents, nextSlug };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ReactResponseData>
) => {
  const lessonData = getPersonFinanceTrackSpendingLesson();
  return res.status(200).json(lessonData);
};
