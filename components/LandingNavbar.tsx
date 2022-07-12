import Link from "next/link";
import { useState } from "react";
import Modal from "./coding/landing/modal/Modal";
import { Button } from "./ui/Button";

export default function LandingNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-white border-b-2 text-murkrow">
      {isOpen && (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full h-screen p-4 bg-black-transparent">
          <Modal handleClose={(e) => setIsOpen(false)} />
        </div>
      )}
      <Link href={"/"}>
        <img src="/images/logo.svg" className="cursor-pointer w-28 sm:w-40" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex">
          <Link href={"/blog"}>
            <p className="p-4 cursor-pointer hover:text-charmander">Blog</p>
          </Link>{" "}
        </div>
        <button
          type="button"
          onClick={(e) =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className={`py-3 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold border-b-4 rounded-lg active:border-b-2 cursor-pointer`}
          {...props}
        >
          <p className={`text-base"`}>Join Waitlist</p>
        </button>
      </div>
    </div>
  );
}
