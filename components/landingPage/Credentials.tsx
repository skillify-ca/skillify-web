import React from "react";

type CredentialsProps = {
  headerText: string;
};

export default function Credentials({ headerText }: CredentialsProps) {
  const images = [
    "/images/about/spotify.png",
    "/images/about/meta.png",
    "/images/about/duolingo.png",
    // "/images/about/shopify.png",
    // "/images/about/nvidia.png",
    "/images/about/samsung.jpg",
    // "/images/about/roblox.jpg",
    // "/images/about/td.png",
    // "/images/about/lumosity.png",
    // "/images/about/wordsWithFriends.png",
    // "/images/about/peloton.png",
    // "/images/about/amd.png",
    // "/images/about/faire.png",
    // "/images/about/sap.png",
    // "/images/about/box.jpg",
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-slate-200 sm:p-16">
      <p className="mb-4 text-3xl font-bold text-center">
        Your Instructor
      </p>
      <p className="max-w-xl mb-6 text-center text-gray-600">
        Vithushan Namasivayasivam is a software engineer and educator who has shipped 
        real products used by millions of people.
      </p>
      <img
        src="/images/about/vithushan.jpeg"
        className="object-contain h-48 rounded-full"
      />
      {/* linkedin icon */}
      <a href="https://www.linkedin.com/in/vithushan/" target="_blank">
        <img
          src="/images/landingPage/linkedin.svg"
          className="object-contain h-8 mt-4 transition-all transform hover:scale-110"
        />
      </a>
      <p className="mt-8 mb-4 text-sm font-semibold tracking-widest text-center text-gray-400 uppercase">
        Previously shipped products at
      </p>
      <div className="grid justify-center w-full grid-cols-2 max-w-7xl sm:flex sm:flex-wrap ">
        {images.map((image) => (
          <div className="flex justify-center p-4 m-4 bg-white shadow-lg w-36">
            <img
              src={image}
              className="object-contain h-24 transition-all transform hover:scale-110"
            />
          </div>
        ))}
      </div>
      {/* <p className="mt-16 text-3xl font-bold">{headerText}</p> */}
    </div>
  );
}
