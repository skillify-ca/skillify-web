import { AI_ENGINEER_JOB_DATA } from "./aiEngineer/data";
import { ANDROID_DEVELOPER_DATA } from "./androidDeveloper";
import { CYBER_SECURITY_ANALYST_DATA } from "./cyberSecurityAnalyst/data";
import { DEV_OPS_ENGINEER_DATA } from "./devOpsEngineer/data";
import { DIGITAL_MARKETER_DATA } from "./digitalMarketer/data";
import { IOS_DEVELOPER_DATA } from "./iosDeveloper";
import { PRODUCT_MANAGER_DATA } from "./productManager/data";
import { REACT_NATIVE_DEVELOPER_DATA } from "./reactNativeDeveloper";
import { UX_DESIGNER_DATA } from "./uxDesigner/data";
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
  aiEngineer: AI_ENGINEER_JOB_DATA,
  cyberSecurityAnalyst: CYBER_SECURITY_ANALYST_DATA,
  uxDesigner: UX_DESIGNER_DATA,
  devOpsEngineer: DEV_OPS_ENGINEER_DATA,
  digitalMarketer: DIGITAL_MARKETER_DATA,
  productManager: PRODUCT_MANAGER_DATA
};

export const fetchJobDetailsData = async (jobTitle) => {
  return jobDetailsMap[jobTitle] || null;
};
