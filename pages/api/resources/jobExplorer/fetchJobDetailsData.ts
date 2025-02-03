import { AI_ENGINEER_JOB_DATA } from "./aiEngineer/data";
import { ANDROID_DEVELOPER_DATA } from "./androidDeveloper";
import { CYBER_SECURITY_ANALYST_DATA } from "./cyberSecurityAnalyst/data";
import { IOS_DEVELOPER_DATA } from "./iosDeveloper";
import { REACT_NATIVE_DEVELOPER_DATA } from "./reactNativeDeveloper";
import { UX_DESIGNER_DATA } from "./uxDesigner/data";

const jobDetailsMap = {
  reactNativeDeveloper: REACT_NATIVE_DEVELOPER_DATA,
  iosDeveloper: IOS_DEVELOPER_DATA,
  androidDeveloper: ANDROID_DEVELOPER_DATA,
  aiEngineer: AI_ENGINEER_JOB_DATA,
  cyberSecurityAnalyst: CYBER_SECURITY_ANALYST_DATA,
  uxDesigner: UX_DESIGNER_DATA
};

export const fetchJobDetailsData = async (jobTitle) => {
  return jobDetailsMap[jobTitle] || null;
};
