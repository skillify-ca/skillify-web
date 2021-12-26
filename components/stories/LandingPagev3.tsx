import React from "react";
import pages from "../../pages";
import HeroHome from "../coding/landing/HeroHome";
import Navbar from "../Navbar";

const LandingPagev3 = ({ pages, title, description }) => {

  return (
    <div className=" bg-white grid grid-cols-1">
      <Navbar />
      <div className="p-4 flex flex-col w-full space-y-4">
        <HeroHome title={title} description={description} />
        <div className="bg-blue-300 p-4 space-y-4">
          <p className="text-center font-bold text-xl">Our Solutions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {pages.map((page) => (
              <a className="p-4" href={page.link}>
                <div className="p-8 flex flex-col items-center space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110 sm:h-64">
                  {page.image
                    ? <div className="w-36 overflow-hidden sm:h-72 ">
                      <img className="w-full h-16 object-scale-down" src={page.image} />
                    </div>
                    : <div className="flex w-16 h-16 rounded-full ring-2 ring-blue-300 heropattern-jupiter-yellow-500"></div>}
                  <p className="font-bold">{page.title}</p>
                  <p>{page.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev3;
