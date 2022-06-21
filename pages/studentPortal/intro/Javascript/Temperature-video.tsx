import Link from "next/link";
import React from "react";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";

const JS_Temperature = () => {
  return (
    <>
      <div className="m-4 mx-12">
        <ProgressBar completed={100} />
      </div>

      <div className="mx-20">
        <iframe
          className="w-full"
          height="700"
          src="https://www.youtube.com/embed/PIxT77Pf3SI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex h-full mt-12 sm:justify-end">
        <Link href={"/course/coding/unit/Javascript/Find-Plant-video"}>
          <Button label="Continue" disabled={false} />
        </Link>
      </div>
    </>
  );
};

export default JS_Temperature;