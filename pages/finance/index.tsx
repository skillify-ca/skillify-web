import { Stage } from "@react-three/drei";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TFSA from "../../components/finance/tfsa";

import { MultipleChoiceSentence } from "../../components/questionTypes/MultipleChoiceSentence";

export default function Finance(props) {
  const units = [
    { title: "Taxes", link: "" },
    { title: "Tax-Free Savings Account (TFSA)", link: "tfsa" },
    { title: "Saving", link: "" },
    { title: "Budgeting", link: "" },
    { title: "Investing", link: "" },
    { title: "Student Loans", link: "" },
    { title: "Debt", link: "" },
    { title: "Real Estate", link: "" },
  ];

  enum STAGE {
    TFSA = "tfsa",
  }

  const [stage, setStage] = useState(STAGE.TFSA);

  return (
    <div className="flex flex-col">
      <div className={"flex items-center justify-center gap-8 p-8"}>
        {units.map((unit) => (
          <div
            className="p-8 transition-all transform bg-white shadow-lg rounded-xl hover:scale-110"
            onClick={() => setStage(unit.link as STAGE)}
          >
            {unit.title}
          </div>
        ))}
      </div>
      {stage === STAGE.TFSA && <TFSA />}
    </div>
  );
}
