import React from "react";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const TikTok = dynamic(
  () => {
    return import("../components/stories/TikTok");
  },
  { ssr: false }
);

export default function Video(props) {

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="">
        Video
        <TikTok url="https://www.tiktok.com/@moonmath/video/6935227849557216517" />
      </div>
    </div>
  );
}
