import Link from "next/link";
import React, { useState } from "react";
import * as fbq from "../../../lib/fbPixel";

type SubscribeBannerProps = {
  bannerText: string;
};

const SubscribeBanner = ({ bannerText }: SubscribeBannerProps) => {
  return (
    <div className="bg-white">
      <div className="flex justify-center p-4 lg:m-8 md:p-8 lg:rounded-md bg-murkrow">
        <p className="mb-4 text-2xl text-center max-w-7xl text-charmander">
          {bannerText}
        </p>
      </div>
    </div>
  );
};

export default SubscribeBanner;
