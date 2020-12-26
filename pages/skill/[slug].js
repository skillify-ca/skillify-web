import { useRouter } from "next/router";
import Link from "next/link";
import apiData from "../api/data.json";
import ProgressBar from "../../components/ProgressBar";
import Navbar from "../../components/Navbar";
import React, { useState } from "react";
import YouTube from "react-youtube";

const Skill = () => {
  const router = useRouter();
  const { slug } = router.query;
  const skill = apiData["skills"][slug];

  if (skill === undefined) {
    return (
      <div>
        <Navbar />
        <div className="bg-yellow-500 p-4">Coming Soon</div>
      </div>
    );
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = () => {
    
  }

  return (
    <div>
      <Navbar />
      <div className="bg-yellow-500 p-4">
        <h1 className="text-xl text-center p-4">{skill.title}</h1>
        <h1 className="text-base text-center p-4">{skill.description}</h1>
      </div>
      <div className="bg-purple-500">
        <h1 className="text-xl text-center p-4">
          Current Mastery: <ProgressBar value={45} color={"purple"} />
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="p-4 m-4 bg-red-500 flex flex-col">
            <div className="p-4 text-xl text-center">
              <h1>Video Briefing</h1>
            </div>
            <div>
              <YouTube
                videoId={skill.sourceId}
                opts={opts}
                onReady={_onReady}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href={"/simulation/" + slug}>
              <div className="p-4 m-4 text-xl bg-green-500">Simulation</div>
            </Link>
            <Link href={"/practice/" + slug}>
              <div className="p-4 m-4 text-xl bg-blue-500">Practice</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
