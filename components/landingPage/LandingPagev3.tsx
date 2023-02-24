import Link from "next/link";
import React from "react";
import HeroHome from "./HeroHome";
import Navbar from "../../ui/Navbar";
import { Button } from "../../ui/Button";

const LandingPagev3 = ({ curriculumLink, title, description, images }) => {
  return (
    <div className="grid grid-cols-1 bg-white ">
      <Navbar />
      <div className="flex flex-col w-full p-4 space-y-4">
        <HeroHome title={title} description={description} />
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-xl font-bold">What will you learn?</p>
          <Link href={curriculumLink}>
            <Button label="See the curriculum" backgroundColor="blue" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <p className="mb-4 text-xl font-bold">
            Our instructors have worked at
          </p>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <div className="flex justify-center">
                <img
                  src={image}
                  className="h-16 transition-all transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev3;
