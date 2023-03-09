import Link from "next/link";
import React from "react";
import CountdownTimer from "./CountdownTimer";

type LandingNavbarProps = {
  showTimer?: boolean;
};
export default function LandingNavbar({ showTimer }: LandingNavbarProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-4 bg-white border-b-2 text-murkrow">
        <Link href={"/"}>
          <img
            src="/images/logo.svg"
            className="p-4 cursor-pointer w-28 sm:w-40"
          />
        </Link>
        <div className="flex gap-4">
          <Link href={"/blog"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Blog</p>
            </div>
          </Link>
          <Link href={"/guide"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Guide</p>
            </div>
          </Link>
          <Link href={"/quiz"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Quiz</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 p-4">
          <div className="">
            <a
              href={"https://www.linkedin.com/in/vithushan/"}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/landingPage/linkedin.svg" className="w-8" />
            </a>{" "}
          </div>
          <div className="">
            <a
              href={"https://www.instagram.com/skillify.ca/"}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/landingPage/ig.png" className="w-8" />
            </a>{" "}
          </div>
          <div className="">
            <a
              href={"https://www.tiktok.com/@skillify.ca"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/landingPage/tiktok.png"
                className="w-8 rounded"
              />
            </a>{" "}
          </div>
        </div>
      </div>
      {showTimer && <CountdownTimer />}
    </div>
  );
}
