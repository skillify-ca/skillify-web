import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import GameDevComponent from "../../../components/resources/jobExplorer/gameDev/GameDevComponent";

export default function GameDevPage() {
  return (
    <div>
      <GameDevComponent />
    </div>
  );
}

GameDevPage.getLayout = function getLayout(page) {
  return (
    <div className="theme-default">
      <LandingNavbar />
      {page}
    </div>
  );
};
