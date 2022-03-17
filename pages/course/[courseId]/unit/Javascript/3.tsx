import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import JSQuiz from "../../../../../components/coding/JSQuiz";
import Navbar from "../../../../../components/ui/Navbar";

const JS1 = () => {
  return (
    <>
      <Navbar />
      <div className="bg-red-300 h-screen">
        <iframe
          src="https://codesandbox.io/embed/home-equity-tnwqw7?fontsize=14&hidenavigation=1&theme=dark&autoresize=1"
          className="w-full rounded-md overflow-hidden"
          title="Home Equity"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </>
  );
};

export default JS1;
