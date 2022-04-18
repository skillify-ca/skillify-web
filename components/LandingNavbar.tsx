import Link from "next/link";

export default function LandingNavbar(props) {
  return (
    <div className="flex items-center justify-between w-full bg-white text-murkrow">
      <Link href={"/"}>
        <img src="/images/logo.svg" className="p-4 cursor-pointer w-36" />
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/studentPortal/intro"}>
          <p className="p-4 cursor-pointer hover:text-charmander">
            Student Portal
          </p>
        </Link>
        <Link href={"/blog"}>
          <p className="p-4 cursor-pointer hover:text-charmander">Blog</p>
        </Link>
      </div>
    </div>
  );
}
