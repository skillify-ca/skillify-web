import Link from "next/link";
import { useState } from "react";
import Modal from "./coding/landing/modal/Modal";
import { Button } from "./ui/Button";

export default function LandingNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full px-4 py-4 bg-white border-b-2 text-murkrow">
      {isOpen && (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full h-screen p-4 bg-black-transparent">
          <Modal handleClose={(e) => setIsOpen(false)} />
        </div>
      )}
      <Link href={"/"}>
        <img src="/images/logo.svg" className="cursor-pointer w-28 sm:w-40" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="">
          <a href={"https://www.linkedin.com/in/vithushan/"}>
            <img src="/images/landingPage/linkedin.svg" className="w-8" />
          </a>{" "}
        </div>
        <div className="">
          <a href={"https://www.instagram.com/skillify.ca/"}>
            <img src="/images/landingPage/ig.png" className="w-8" />
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
