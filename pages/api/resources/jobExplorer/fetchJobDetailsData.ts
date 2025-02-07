import { AI_ENGINEER_JOB_DATA } from "./aiEngineer/data";
import { REACT_NATIVE_DEVELOPER_DATA } from "./reactNativeDeveloper";
import { BACK_END_DEVELOPER_DATA } from "./backEndDev/data";
import { FRONT_END_DEVELOPER_DATA } from "./frontEndDev/data";
import { DATA_SCIENTIST_DATA } from "./dataScientist/data";
import { FULLSTACK_DEVELOPER_DATA } from "./fullstackDev/data";
import { GAME_DEVELOPER_DATA } from "./gameDev/data";
import { ANDROID_DEVELOPER_DATA } from "./androidDev/data";
import { IOS_DEVELOPER_DATA } from "./iosDev/data";

const jobDetailsMap = {
  reactNativeDeveloper: REACT_NATIVE_DEVELOPER_DATA,
  iosDeveloper: IOS_DEVELOPER_DATA,
  androidDeveloper: ANDROID_DEVELOPER_DATA,
  backEndDev: BACK_END_DEVELOPER_DATA,
  frontEndDev: FRONT_END_DEVELOPER_DATA,
  dataScientist: DATA_SCIENTIST_DATA,
  aiEngineer: AI_ENGINEER_JOB_DATA,
  fullstackDev: FULLSTACK_DEVELOPER_DATA,
  gameDev: GAME_DEVELOPER_DATA
};

export const fetchJobDetailsData = async (jobTitle) => {
  return jobDetailsMap[jobTitle] || null;
};
