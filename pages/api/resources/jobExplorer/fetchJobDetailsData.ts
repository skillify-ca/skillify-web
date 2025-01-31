import { ANDROID_DEVELOPER_DATA } from "./androidDeveloper";
import { IOS_DEVELOPER_DATA } from "./iosDeveloper";
import { REACT_NATIVE_DEVELOPER_DATA } from "./reactNativeDeveloper";

const jobDetailsMap = {
  reactNativeDeveloper: REACT_NATIVE_DEVELOPER_DATA,
  iosDeveloper: IOS_DEVELOPER_DATA,
  androidDeveloper: ANDROID_DEVELOPER_DATA,
};

export const fetchJobDetailsData = async (jobTitle) => {
  return jobDetailsMap[jobTitle] || null;
};
