import Link from "next/link";
import { Button } from "./ui/Button";

export default function LandingNavbar(props) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-white border-b-2 text-murkrow">
      <Link href={"/"}>
        <img src="/images/logo.svg" className="cursor-pointer w-28 sm:w-40" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex">
          <Link href={"/blog"}>
            <p className="p-4 cursor-pointer hover:text-charmander">Blog</p>
          </Link>{" "}
        </div>
        <Button label="Learn More" />
      </div>
    </div>
  );
}
