import { Offer } from "../../../../components/resources/jobTracker/JobTrackerComponent";
import { encryptData } from "../../encrypt/encryptData";
import { JimiInterviewData } from "./JimiInterviewData";
import { LuckyInterviewData } from "./LuckyInterviewData";


const InterviewMap: { [key: string]: Offer[] } = {
  "6b4a39194caa87b5b42e2bf187551699dbd7c3184614005eea5a5d50b0c4d6b2": LuckyInterviewData,
  "2b48d463432be1cd8dab76ce09923de349dd3ab16fc97fd8052c64701beccd48": JimiInterviewData
};

export function getInterviewData(userId: string | null): Offer[] | null {

  const hashedUserId = encryptData(userId || "");
  return userId && hashedUserId in InterviewMap ? InterviewMap[hashedUserId] : null;
}