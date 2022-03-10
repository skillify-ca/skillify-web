import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden lg:flex col-span-2">LEFT</div>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-4 bg-white shadow-lg p-8">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
