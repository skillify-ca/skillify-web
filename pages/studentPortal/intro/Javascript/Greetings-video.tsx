import React from "react";
import ProgressBar from "../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../components/ui/Button";

const JS_Greetings = () => {
  return (
    <>
      <div className="m-4 mx-12">
        <ProgressBar completed={100} />
      </div>

      <div className="mx-12">
        <iframe
          width="1400"
          height="800"
          src="https://www.youtube.com/embed/W-kkyPEAWXc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex sm:justify-end mt-12 h-full">
        <a href={"/course/coding/unit/Javascript/Temperature-video"}>
          <Button label="Continue" disabled={false} />
        </a>
      </div>
    </>
  );
};

export default JS_Greetings;
