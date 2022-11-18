import Link from "next/link";
import React, { useState } from "react";
import * as fbq from "../../../lib/fbPixel";

type SubscribeBannerProps = {
  bannerText: string;
};

const SubscribeBanner = ({ bannerText }: SubscribeBannerProps) => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 p-4 lg:m-8 md:p-8 lg:rounded-md lg:grid-cols-2 bg-murkrow">
        <p className="mb-4 text-xl text-charmander">{bannerText}</p>
      </div>
    </div>
  );
};

export default SubscribeBanner;
