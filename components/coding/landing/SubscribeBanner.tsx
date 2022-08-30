import Link from "next/link";
import React, { useState } from "react";
import * as fbq from "../../../lib/fbPixel";

type SubscribeBannerProps = {
  bannerText: string;
};

const SubscribeBanner = ({ bannerText }: SubscribeBannerProps) => {
  const [email, setEmail] = useState("");
  const [hasClicked, setHasClicked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClick = async () => {
    if (email.includes("@")) {
      setShowError(false);

      setHasClicked(true);
      fbq.event("Lead");
      const url =
        "https://math-app-1.herokuapp.com/notifications?product=subscribe-banner";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
        }),
      };
      await fetch(url, options);
    } else {
      setShowError(true);
    }
  };
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 p-4 lg:m-8 md:p-8 lg:rounded-md lg:grid-cols-2 bg-murkrow">
        <p className="mb-4 text-xl text-charmander">{bannerText}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
          <div className="flex flex-col items-center">
            <input
              id="bootcamper"
              type="text"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`text-left rounded-lg p-2 sm:mb-0 mb-4 border shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md text-charmander placeholder-yellow-700 sm:w-80 w-full `}
              placeholder="Email"
            />
            {showError && (
              <p className="text-moltres-200">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div
            onClick={(e) => handleClick()}
            className="flex items-center justify-center p-4 font-bold text-center text-white rounded-md shadow cursor-pointer sm:w-36 bg-charmander hover:bg-yellow-700"
          >
            <p>Learn More</p>
          </div>
        </div>
        {hasClicked && (
          <p className="w-full text-center text-bulbasaur-500">
            Thank you for your email, someone from our team will reach out
            shortly to help!
          </p>
        )}
      </div>
    </div>
  );
};

export default SubscribeBanner;
