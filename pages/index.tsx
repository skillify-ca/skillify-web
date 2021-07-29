import React, { useContext } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import LandingPagev2 from "../components/stories/LandingPagev2";

import { UserContext } from "../lib/UserContext";

const HomePage = () => {
  const [user] = useContext(UserContext);
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <DiagnosticNavbar />
      {user?.loading
        ? "Loading..."
        : user?.issuer && <div>You're logged in!</div>}
      <div className="p-4 flex flex-col items-center justify-center">
        <LandingPagev2 />
      </div>
    </div>
  );
};

export default HomePage;
