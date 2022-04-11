import React from "react";
import { CardData } from "../../../../components/coding/Card";
import ResourceRow from "../../../../components/coding/studentPortal/ResourceRow";
import { Button } from "../../../../components/ui/Button";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import Link from "next/link";

const CSS2 = () => {
  const assignments = [
    { link: "/coding/css/sujee-week-1/index.html", title: "Sujee-Week1" },
    { link: "/coding/css/mau-week-1/index.html", title: "Mau-Week1" },
    { link: "/coding/css/vinon-week-1/indexflower.html", title: "Vinon-Week1" },
    { link: "/coding/css/jacky-week-1/index.html", title: "Jacky-Week1" },
    { link: "/coding/css/mithulan-week-1/index.html", title: "Mithulan-Week1" },
  ];
  const data: CardData[] = [
    {
      title: "CSS Tricks: Flexbox",
      image: "/images/ResourceRow.svg",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "CSS Tricks: Grid",
      image: "/images/ResourceRow.svg",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
      description: "Complete all levels.",
    },
    {
      title: "Codecademy CSS Course",
      image: "/images/ResourceRow.svg",
      link: "https://www.codecademy.com/learn/learn-css",
      description: "Complete all levels.",
    },
  ];
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 bg-gray-100 dark:bg-gray-800">
          <ProgressBar completed={100} />
          <h1 className="text-5xl font-bold">Readings</h1>
          <div className="grid grid-cols-1">
            <p className="mt-4">Click the link to acess the readings</p>
            <div className="pt-4 ">
              <div className="grid grid-cols-1">
                {data.map((it) => (
                  <div className="w-full p-4">
                    <ResourceRow
                      title={it.title}
                      image={it.image}
                      description={it.description}
                      link={it.link}
                      disabled={false}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full mt-12 sm:justify-end">
              <Link href={"/studentPortal/intro/CSS/3"}>
                <Button label="Continue" disabled={false} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSS2;
