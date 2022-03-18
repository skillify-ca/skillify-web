import React, { useState } from "react";
import Navbar from "../../ui/Navbar";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="">
      <div className="col-span-12 flex z-20 fixed w-full">
        <Navbar active={active} setActive={setActive} />
      </div>
      <div className="hidden lg:flex w-48 fixed mt-16 bg-white dark:bg-gray-900 h-full">
        <Sidebar />
      </div>

      <div
        className={`absolute z-10 mt-16 lg:hidden w-48 ${
          active ? "left-0" : "-left-48"
        } h-full bg-white dark:bg-gray-900 lg:w-0 transition-all transform duration-500 ease-in-out`}
      >
        <Sidebar />
      </div>
      <div
        className={`dark:text-white h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-800 pt-20 pb-16 lg:pl-8 px-4 lg:ml-48 ${
          active ? "" : ""
        } `}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
