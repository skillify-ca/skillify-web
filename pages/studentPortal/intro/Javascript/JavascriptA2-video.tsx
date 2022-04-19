import Link from "next/link";
import React from "react";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";

const JS_A2 = () => {
  return (
    <>
      <div className="m-4 mx-12">
        <ProgressBar completed={100} />
      </div>

      <div className="mx-12">
        <iframe
          width="1400"
          height="800"
          src="https://www.youtube.com/embed/W0foH4d3v1w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex h-full mt-12 sm:justify-end">
        <Link href={"/studentPortal/intro/Javascript/12"}>
          <Button label="Continue" disabled={false} />
        </Link>
      </div>
    </>
  );
};

export default JS_A2;
