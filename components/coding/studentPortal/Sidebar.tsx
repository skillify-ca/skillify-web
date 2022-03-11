import React, { useState } from "react";

export type SidebarProps = {};

export const Sidebar: React.FC<SidebarProps> = ({}: SidebarProps) => {
  return (
    //Full width then restrict in page
    <div className="">
      <div className="grid grid-rows-2 place-content-between ">
        <div className="grid grid-rows-4 gap-y-8 ">
          <div className="p-2 flex">
            <div>
              {" "}
              <img className="w-16 h-16" src="/images/logo.svg" />
            </div>
            <div>
              <p className="font-bold ml-4">Hey There!</p>
              <p className="font-medium ml-4">Student</p>
            </div>
          </div>
          <a className={``} href="/studentPortal">
            <div className={`"border-charmander text-charmander"`}>
              <div
                className={`p-4 border-l-4 border-charmander text-charmander`}
              >
                <div className="flex flex-wrap">
                  <img
                    className="w-8 h-8 mr-4"
                    src="/images/dashBoardActive.svg"
                  />
                  Dashboard
                </div>
              </div>
            </div>
          </a>
          <a className={`p-4 border-l-4`} href="/classroom">
            <div className="flex flex-wrap">
              <img
                className="w-8 h-8 mr-4"
                src="/images/classroomInactive.svg"
              />
              Classroom
            </div>
          </a>

          <a
            className={`p-4 border-l-4
            `}
            href="/math/profile"
          >
            <div className="flex flex-wrap">
              <img className="w-8 h-8 mr-4" src="/images/profileInactive.svg" />
              Profile
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-end mb-18">
          <div className="flex flex-wrap ">
            <img className="w-8 h-8 mr-4" src="/images/logoutButton.svg" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
