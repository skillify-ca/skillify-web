import React, { useState } from "react";
import Navbar from "../../ui/Navbar";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="">
      <div className="col-span-12 flex z-10 fixed w-full">
        <Navbar active={active} setActive={setActive} />
      </div>
      <div className="hidden lg:flex w-48 fixed mt-16 bg-white h-full">
        <Sidebar />
      </div>

      <div
        className={`fixed lg:hidden mt-16 w-48 ${
          active ? "" : "-ml-48"
        } h-full bg-white lg:w-0 transition-all transform duration-500 ease-in-out`}
      >
        <Sidebar />
      </div>
      <div
        className={`transition-all transform duration-500 ease-in-out grid grid-cols-1 gap-4 bg-gray-100 shadow-lg pt-20 lg:pl-8 px-4 lg:ml-48 ${
          active ? "ml-48" : ""
        } `}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
