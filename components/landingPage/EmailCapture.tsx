import { useRouter } from "next/router";
import React, { useState } from "react";
import ActiveCampaignEmailCapture from "./ActiveCampaignEmailCapture";
import { HighlightableText } from "./Hero";

type EmailCaptureProps = {
  headerText: HighlightableText[];
  description: string;
};

const EmailCapture = ({ headerText, description }: EmailCaptureProps) => {
  return (
    <div>
      <div className="grid h-full grid-cols-1 bg-no-repeat sm:p-16 sm:grid-cols-2 bg-email-capture bg-charmander bg-blend-multiply">
        <div className="grid grid-cols-1 p-4 bg-white sm:p-16">
          <h1 className="mb-4 font-extrabold tracking-tight text-gray-900">
            <p className="text-3xl text-gray-900">
              {headerText.map((line) => (
                <span className={`${line.highlight ? "text-charmander" : ""}`}>
                  {line.text}{" "}
                </span>
              ))}
            </p>{" "}
          </h1>
          <ActiveCampaignEmailCapture />
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
