import React from "react";
import Navbar from "../../ui/Navbar";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 flex lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:flex col-span-2">
        <Sidebar />
      </div>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-4 bg-gray-100 shadow-lg p-8">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
