import React from "react";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import { Button } from "../components/ui/Button";

const TikTok = dynamic(
  () => {
    return import("../components/stories/TikTok");
  },
  { ssr: false }
);

export default function Video(props) {
  const [index, setIndex] = React.useState(0);

  const onNext = () => {
    setIndex(Math.min(3, index + 1))
  }
  const onPrevious = () => {
    setIndex(Math.max(0, index - 1))
  }

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="bg-white w-8/12">
          <h1 className="text-xl text-center font-bold">Videos</h1>
          <div className="flex justify-center items-center gap-4">
            <Button backgroundColor="yellow" textColor="white" label="Previous" onClick={onPrevious} />
            <TikTok index={index} />
            <Button backgroundColor="blue" textColor="white" label="Next" onClick={onNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
