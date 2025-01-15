import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import GameDevProject from "../../../components/resources/jobExplorer/gameDev/GameProject";

export default function GameDevProjectPage() {
  return (
    <div>
      <GameDevProject />
    </div>
  );
}

GameDevProjectPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
