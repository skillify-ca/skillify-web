import React, {  } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import LandingPage from "../components/stories/LandingPage";


const HomePage = () => {
 
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      <LandingPage />
      </div>
  );
};

export default HomePage;
