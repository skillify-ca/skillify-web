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
        canvas: document.querySelector("#mycanvas"),
      })
    );
  }, []);
  return (
    <canvas id="mycanvas" className="w-full bg-red-400 h-screen">
      {k && <KaboomComponent k={k} />}
    </canvas>
  );
};

export default Kaboom;
