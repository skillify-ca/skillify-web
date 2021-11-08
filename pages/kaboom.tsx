import React, { useEffect, useState } from "react";
import Head from "next/head";
import kaboom, { KaboomCtx } from "kaboom";
import Script from "next/script";
// import KaboomComponent from "../components/KaboomComponent";
import dynamic from "next/dynamic";
const KaboomComponent = dynamic(() => import("../components/KaboomComponent"));

const Kaboom = () => {
  const [k, setK] = useState<KaboomCtx>(kaboom());

  return (
    <div className="grid grid-cols-2">
      <div className="bg-blue-300">ONE</div>
      <div className="bg-red-400">{k && <KaboomComponent k={k} />}</div>
    </div>
  );
};

export default Kaboom;
