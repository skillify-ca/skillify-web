import React from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
export type PostLayoutProps = {
  children: React.ReactNode;
};
export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <div className="items-center bg-gray-100 md:flex md:flex-col heropattern-hideout-gray-300 theme-default">
      <LandingNavbar />
      <div className="items-center max-w-5xl gap-4 p-4 bg-white shadow-lg sm:my-8 md:flex md:flex-col md:mx-16">
        {children}
      </div>
    </div>
  );
}
