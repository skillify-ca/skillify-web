import { LessonComponentData } from "../../../../components/studentPortal/lessons/LessonComponent";

export type LessonPageData = {
  lessonComponents: LessonComponentData[];
  lessonId: number;
  lessonCount: number;
};

export type ResponseData = {
  lessonComponents: LessonComponentData[];
  currentNode: number;
  nextNode: number;
  nextSlug: string;
};