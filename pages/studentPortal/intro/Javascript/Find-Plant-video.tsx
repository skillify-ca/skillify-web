import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import JSQuiz from "../../../../../components/coding/JSQuiz";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../../components/ui/Button";
import Navbar from "../../../../../components/ui/Navbar";

const JS_FindPlant = () => {
  return (
    <>
      <div className="m-4 mx-12">
        <ProgressBar completed={100} />
      </div>

      <div className="mx-12">
        <iframe
          width="1400"
          height="800"
          src="https://www.youtube.com/embed/zbwqA9QJaRc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex sm:justify-end mt-12 h-full">
        <a href={""}>
          <Button label="Continue" disabled={false} />
        </a>
      </div>
    </>
  );
};

export default JS_FindPlant;
