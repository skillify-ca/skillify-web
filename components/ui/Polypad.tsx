import Script from "next/script";
import React, { ReactNode } from "react";

const Polypad = () => {
  return (
    <>
      <Script
        src="https://static.mathigon.org/api/polypad-v2.0.js"
        strategy="lazyOnload"
      />

      <Script strategy="lazyOnload">
        {`Polypad.create(document.querySelector("#polypad"), { apiKey: "test" });`}
      </Script>

      <div
        className={`flex flex-col justify-center space-y-16 items-center "}`}
      >
        <div id="polypad" style={{ width: "800px", height: "500px" }}></div>
      </div>
    </>
  );
};
export default Polypad;
