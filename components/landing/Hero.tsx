import React from "react";
import { Button } from "../ui/Button";

type HeroProps = {
  headerText: HighlightableText[];
  description: string;
};

export type HighlightableText = {
  text: string;
  highlight?: boolean;
};

export default function Hero({ headerText, description }: HeroProps) {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 lg:p-16 md:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {headerText.map((line) => (
              <span
                key={line.text}
                className={`${line.highlight ? "text-charmander" : ""}`}
              >
                {line.text}{" "}
              </span>
            ))}
          </h1>
          <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {description}
          </p>
          <a href="https://www.joinskillify.com/call">
            <button
              type="button"
              onClick={(e) =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className={`w-48 py-4 h-16 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold border-b-4 rounded-lg active:border-b-2 cursor-pointer`}
            >
              <p className={`text-base"`}>Apply Now</p>
            </button>
          </a>
        </div>
        <div className="">
          <img
            className="object-cover w-full h-full md:h-160"
            src="/images/landingPage/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
