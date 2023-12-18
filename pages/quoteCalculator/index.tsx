import React from "react";
const Quote = () => {
  return <div>QuoteCalculator</div>;
};

export default Quote;

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
