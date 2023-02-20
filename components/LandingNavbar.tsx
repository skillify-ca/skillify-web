import React from "react";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./NavigationMenu";

type LandingNavbarProps = {
  showTimer?: boolean;
};
export default function LandingNavbar({ showTimer }: LandingNavbarProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-4 py-4 bg-white border-b-2 text-murkrow">
        <Link href={"/"}>
          <img src="/images/logo.svg" className="cursor-pointer w-28 sm:w-40" />
        </Link>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className="text-md">Blog</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
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
