import React, { useEffect, useState } from "react";
import Head from "next/head";
import kaboom, { KaboomCtx } from "kaboom";
import Script from "next/script";
// import KaboomComponent from "../components/KaboomComponent";
import dynamic from "next/dynamic";
const KaboomComponent = dynamic(() => import("../components/KaboomComponent"));

const Kaboom = () => {
  const [k, setK] = useState<KaboomCtx>();

  useEffect(() => {
    setK(
      kaboom({
        width: 320,
        height: 240,
        font: "sinko",
        canvas: document.querySelector("#mycanvas"),
        background: [0, 0, 255],
      })
    );
  }, []);
  return (
    <div className="grid ">
      <canvas id="mycanvas" className="w-full bg-red-400">
        {k && <KaboomComponent k={k} />}
      </canvas>
    </div>
  );
};

export default Kaboom;
