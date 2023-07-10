import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";

export default function ProjectPairingPage() {
  return <div>Project Pairing</div>;
}

ProjectPairingPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
