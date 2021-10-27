import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MultipleChoiceSentence } from "../../components/questionTypes/MultipleChoiceSentence";

export default function Finance(props) {
  const units = [
    "Taxes",
    "TFSACalculator",
    "Tax-Free Savings Account (TFSA)",
    "Saving",
    "Budgeting",
    "Investing",
    "Student Loans",
    "Debt",
    "Real Estate",
  ];

  return (
    <div className={"flex items-center justify-center gap-8 p-8"}>
      {units.map((unit) => (
        <Link href={`/finance/${unit}`}>
          <div className="bg-white shadow-lg rounded-xl p-8 transform transition-all hover:scale-110">
            {unit}
          </div>
        </Link>
      ))}
    </div>
  );
}
