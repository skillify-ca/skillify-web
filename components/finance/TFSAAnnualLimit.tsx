import React, { useEffect, useState } from "react";

import { MultipleChoiceSentence } from "../questionTypes/MultipleChoiceSentence";

export default function TFSAAnnualLimit(props) {
  const contributionLimits = [
    { year: 2021, limit: 6000 },
    { year: 2020, limit: 6000 },
    { year: 2019, limit: 6000 },
    { year: 2018, limit: 5500 },
    { year: 2017, limit: 5500 },
    { year: 2016, limit: 5500 },
    { year: 2015, limit: 10000 },
    { year: 2014, limit: 5500 },
    { year: 2013, limit: 5500 },
    { year: 2012, limit: 5000 },
    { year: 2011, limit: 5000 },
    { year: 2010, limit: 5000 },
    { year: 2009, limit: 5000 },
  ];

  const [birthYear, setBirthYear] = useState(2001);

  return (
    <div className={"flex flex-col items-center justify-center"}>
      <div className={"bg-white max-w-7xl p-8 flex flex-col gap-8"}>
        <h1 className="text-xl font-bold">
          Why do they keep changing the annual limit?
        </h1>
        <div className="flex flex-col">
          <p className="text-lg">What is the annual limit?</p>
          <p>
            The annual limit is how much any Canadian can contribute to their
            TFSA accounts that year, but remember your unused limits from
            previous years carry over since the year you turned 18!
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">Who decides the annual limit?</p>
          <p>
            The federal government decides what the annual limit will be for the
            year. Governments that want to incentivize Canadians to invest more
            may increase the annual limit. This would mean that the government
            would earn less taxes, and have less money to spend on public
            services like education, healthcare and defence.
          </p>
        </div>
      </div>
    </div>
  );
}
