import React, {  } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import LandingPage from "../components/stories/LandingPage";
import LandingPagev2 from "../components/stories/LandingPagev2";



const HomePage = () => {
 
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <LandingPagev2 />
      </div>
  );
};

export default HomePage;
