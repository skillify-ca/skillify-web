import { Offer } from "../../../../components/resources/jobTracker/JobTrackerComponent";
import { JimiInterviewData } from "./JimiInterviewData";
import { LuckyInterviewData } from "./LuckyInterviewData";


//Todo: Think of an approach to not expose the userIds in the server code
const InterviewMap: { [key: string]: Offer[] } = {
  "R7nzMKiRewgJuLm54eQ1KdHV3g82": LuckyInterviewData,
  "q1u3HimWe4dPGeWiReAotyocQpF2": JimiInterviewData
};

export function getInterviewData(userId: string | null): Offer[] | null {
  return userId && userId in InterviewMap ? InterviewMap[userId] : null;
}