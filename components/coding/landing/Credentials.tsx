import React from "react";

export default function Credentials() {
  const images = [
    "/images/about/duolingo.png",
    "/images/about/meta.png",
    "/images/about/spotify.png",
    "/images/about/shopify.png",
    "/images/about/nvidia.png",
    "/images/about/sap.png",
    "/images/about/td.png",
    "/images/about/lumosity.png",
    "/images/about/wordsWithFriends.png",
  ];
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white sm:p-16">
      <p className="mb-4 text-3xl font-bold">
        Our expert coaches have worked at
      </p>
      <div className="grid w-full grid-cols-2 gap-8 p-4 bg-white border-t-8 rounded-lg shadow-lg border-charmander sm:grid-cols-3">
        {images.map((image) => (
          <div className="flex justify-center">
            <img
              src={image}
              className="h-24 transition-all transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      <p className="mt-4 text-3xl font-bold">
        we've mastered how to stand out in a remote interview
      </p>
    </div>
  );
}
