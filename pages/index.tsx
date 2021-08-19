import React from "react";
import LandingPagev2 from "../components/stories/LandingPagev2";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <div className="p-4 flex flex-col items-center justify-center">
        <LandingPagev2 />
      </div>
    </div>
  );
};

export default HomePage;
