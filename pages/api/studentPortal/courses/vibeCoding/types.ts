import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";

export type LessonPageData = {
  lessonComponents: LessonComponentData[];
  lessonId: number;
  lessonCount: number;
};