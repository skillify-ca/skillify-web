import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/Button";

type HeroProps = {
  headerText: HighlightableText[];
  description: string;
  heroImageUrl: string;
};

export type HighlightableText = {
  text: string;
  highlight?: boolean;
  animated?: boolean;
};

export default function Hero({ headerText, description, heroImageUrl }: HeroProps) {
  const [currentlySelectedOption, setCurrentlySelectedOption] = useState<string>("");

  const handleSelectOption = (option: string) => {
    setCurrentlySelectedOption(option);
  }

  const generateDateRanges = (count = 4) => {
    const ranges = [];
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    const formatDate = (date: Date) =>
      date.toLocaleDateString("en-US", { month: "long", day: "numeric" });

    const getEndOfFirstHalf = (y: number, m: number) => new Date(y, m, 14);
    const getEndOfSecondHalf = (y: number, m: number) => new Date(y, m + 1, 0); // last day of month

    // Figure out which "slot" we're in: before 1st, before 15th, or after 15th
    const day = now.getDate();
    let startFirst = day < 15; // true = next slot is the 15th, false = next slot is next month's 1st

    if (day >= 1 && day < 15) {
      // We're in the first half — start from the 15th of this month
      startFirst = false;
    } else {
      // We're in the second half — start from the 1st of next month
      month += 1;
      if (month > 11) { month = 0; year += 1; }
      startFirst = true;
    }

    for (let i = 0; i < count; i++) {
      if (startFirst) {
        const start = new Date(year, month, 1);
        const end = getEndOfFirstHalf(year, month);
        ranges.push(`${formatDate(start)} - ${formatDate(end)}`);
        startFirst = false;
      } else {
        const start = new Date(year, month, 15);
        const end = getEndOfSecondHalf(year, month);
        ranges.push(`${formatDate(start)} - ${formatDate(end)}`);
        startFirst = true;
        month += 1;
        if (month > 11) { month = 0; year += 1; }
      }
    }

    return ranges;
  };

  // In your component:
  const dateRanges = generateDateRanges(2);

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 lg:p-16 md:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {headerText.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={`${line.highlight ? "text-charmander" : ""} ${line.animated ? "inline-block animate-slide-up" : ""
                  }`}
              >
                {line.text}{" "}
              </span>
            ))}
          </h1>
          <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>

            <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {description}
            </p>
          </motion.div>

          <div className="space-x-4">
            <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>


              <div className="flex flex-col w-80 bg-white rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold">$1700</p>
                  <div className="flex">
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 " />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 " />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 " />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 " />
                    <img src="/images/landingPage/star.svg" className="w-4 h-4 " />
                  </div>
                </div>
                <p className="text-sm text-gray-500">NEXT COURSE</p>
                <div className="flex flex-col">
                  {dateRanges.map((range, i) => (
                    <div key={i} className="flex space-x-2">
                      <input
                        type="radio"
                        name="course"
                        id={`course${i + 1}`}
                        onChange={() => handleSelectOption(range)}
                      />
                      <label htmlFor={`course${i + 1}`}>{range}</label>
                    </div>
                  ))}
                </div>

                <Link href={`mailto:vithushan19@gmail.com?subject=Enroll in Python and SQL for Beginners&body=I want to enroll in Python and SQL for Beginners. I'm interested in the course with dates: ${currentlySelectedOption}`} legacyBehavior>
                  <Button label="Enroll" backgroundColor="orange" />
                </Link>


              </div>

              <div className="flex flex-col space-y-2 mt-4">
                <div>

                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold">Covered by the Skillify Guarantee</p>
                      <p className="text-sm text-gray-500">Students can request a full refund until the first two weeks of the course</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        <div className="">
          <img
            className="object-cover w-full h-full md:h-160"
            src={heroImageUrl}
            alt=""
          />
        </div>
      </div >
    </div >
  );
}
