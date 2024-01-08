import React from "react";
import Initial from "../../components/quoteCalculator/Initial";

export default function Quote() {
  return (
    <div>
      <Initial></Initial>
    </div>
  );
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
