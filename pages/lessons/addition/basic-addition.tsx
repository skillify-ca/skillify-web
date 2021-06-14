import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function basicAddition(props) {
  return (
    <div>
      <Navbar />
      <div className="overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
        <div className="bg-white shadow-lg rounded-lg p-4 ml-auto mr-auto mt-4 max-w-6xl">
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
          <p className="border-4 border-blue-400 mt-4 p-2">
            {" "}
            In this video, your child will learn how to add single digit numbers
            presented in horizontal and vertical equations. It's a short and
            easy to follow video with clear explanations and great use of
            visuals.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
