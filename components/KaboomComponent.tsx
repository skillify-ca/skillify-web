import React, { useEffect } from "react";
import Head from "next/head";
import kaboom, { KaboomCtx, KaboomOpt } from "kaboom";
import Script from "next/script";

type KaboomComponentProps = {
  k?: KaboomCtx;
};
const KaboomComponent = ({ k }: KaboomComponentProps) => {
  useEffect(() => {
    // const options: KaboomOpt = {
    //   width: 320,
    //   height: 240,
    //   font: "sinko",
    //   canvas: document.getElementById("mycanvas") as HTMLCanvasElement,
    //   background: [0, 0, 255],
    // };

    if (k) {
      k.add([k.text("oh hi there"), k.pos(80, 40)]);
    }
  });

  return <div></div>;
};

export default KaboomComponent;
