import { ANDROID_DEVELOPER_DATA } from "./androidDeveloper";
import { IOS_DEVELOPER_DATA } from "./iosDeveloper";
import { REACT_NATIVE_DEVELOPER_DATA } from "./reactNativeDeveloper";
import { BACK_END_DEVELOPER_DATA } from "./backEndDev/data";
import { FRONT_END_DEVELOPER_DATA } from "./frontEndDev/data";
import { DATA_SCIENTIST_DATA } from "./dataScientist/data";
const jobDetailsMap = {
  reactNativeDeveloper: REACT_NATIVE_DEVELOPER_DATA,
  iosDeveloper: IOS_DEVELOPER_DATA,
  androidDeveloper: ANDROID_DEVELOPER_DATA,
  backEndDev: BACK_END_DEVELOPER_DATA,
  frontEndDev: FRONT_END_DEVELOPER_DATA,
  dataScientist: DATA_SCIENTIST_DATA,
};

export const fetchJobDetailsData = async (jobTitle) => {
  return jobDetailsMap[jobTitle] || null;
};
