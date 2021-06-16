import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function singleDigit(props) {
  return (
    <div>
      <Navbar />
      <div className="overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
        <div className="bg-white shadow-lg rounded-lg p-4 ml-auto mr-auto mt-4 max-w-5xl">
          <p className="font-bold mb-4">Single Digit Addition</p>
          <iframe
            width="560"
            height="500"
            src="https://www.youtube.com/embed/-ou9VvyJNOY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 ml-auto mr-auto mt-4 max-w-5xl">
          <img src="/images/addAnchorChart.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
