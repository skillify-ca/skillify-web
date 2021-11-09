import React, { useEffect } from "react";
import Head from "next/head";
import kaboom, { KaboomCtx, KaboomOpt } from "kaboom";
import Script from "next/script";
import run from "../pages/api/kaboom/rpg";

type KaboomComponentProps = {
  k?: KaboomCtx;
  requestQuestion: () => void;
  hideQuestion: () => void;
};
const KaboomComponent = ({
  k,
  requestQuestion,
  hideQuestion,
}: KaboomComponentProps) => {
  useEffect(() => {
    if (k) {
      run(k, requestQuestion, hideQuestion);
      //k.add([k.text("oh hi there"), k.pos(80, 40)]);
    }
  }, []);

  return <div></div>;
};

export default KaboomComponent;
