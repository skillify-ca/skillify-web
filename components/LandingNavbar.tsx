import Link from "next/link";
import { Button } from "./ui/Button";

export default function LandingNavbar(props) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white border-b-2 shadow-lg text-murkrow">
      <Link href={"/"}>
        <img src="/images/logo.svg" className="w-40 cursor-pointer" />
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/blog"}>
          <p className="p-4 cursor-pointer hover:text-charmander">Blog</p>
        </Link>{" "}
        <Link href={"/studentPortal/intro"}>
          <Button label="Enroll Now" />
        </Link>
      </div>
    </div>
  );
}
