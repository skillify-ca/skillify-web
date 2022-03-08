import React, { useState } from "react";

export type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  const [sideBarStage, setSideBarStage] = useState("Dashboard");
  const onStageClick = (stage: string) => {
    setSideBarStage(stage);
  };
  const isStageActive = (stage: string) => {
    if (stage === sideBarStage) {
      return true;
    }
    return false;
  };

  return (
    //Full width then restrict in page
    <div className="grid grid-cols-5">
      <div className="">
        <div className="grid grid-rows-2 place-content-between ">
          <div className="grid grid-rows-4 gap-y-8 ">
            <div className="p-2 flex">
              <div>
                {" "}
                <img className="w-12 h-12" src="/images/logo.png" />
              </div>
              <div>
                <p className="font-bold ml-3">Hey There!</p>
                <p className="font-medium ml-3">Student</p>
              </div>
            </div>
            <div
              className={` ${
                isStageActive("Dashboard")
                  ? "border-charmander text-charmander"
                  : ""
              }`}
              onClick={() => onStageClick("Dashboard")}
            >
              <div
                className={`p-4 border-l-4 ${
                  isStageActive("Dashboard")
                    ? "border-charmander text-charmander"
                    : ""
                }`}
              >
                <div className="flex flex-wrap">
                  <img
                    className="w-8 h-8 mr-3"
                    src={
                      isStageActive("Dashboard")
                        ? "/images/dashBoardActive.svg"
                        : "/images/dashBoardInactive.svg"
                    }
                  />
                  Dashboard
                </div>
              </div>
            </div>
            <div
              className={`p-4 border-l-4 ${
                isStageActive("Classroom")
                  ? "border-charmander text-charmander"
                  : ""
              }`}
              onClick={() => onStageClick("Classroom")}
            >
              <div className="flex flex-wrap">
                <img
                  className="w-8 h-8 mr-3"
                  src={
                    isStageActive("Classroom")
                      ? "/images/classroomActive.svg"
                      : "/images/classroomInactive.svg"
                  }
                />
                Classroom
              </div>
            </div>

            <div
              className={`p-4 border-l-4 ${
                isStageActive("Profile")
                  ? "border-charmander text-charmander"
                  : ""
              }`}
              onClick={() => onStageClick("Profile")}
            >
              <div className="flex flex-wrap">
                <img
                  className="w-7 h-7 mr-3"
                  src={
                    isStageActive("Profile")
                      ? "/images/profileActive.svg"
                      : "/images/profileInactive.svg"
                  }
                />
                Profile
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end mb-18">
            <div className="flex flex-wrap ">
              <img className="w-7 h-7 mr-3" src="/images/logoutButton.svg" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
