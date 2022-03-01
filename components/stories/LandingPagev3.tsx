import Link from "next/link";
import React from "react";
import pages from "../../pages";
import HeroHome from "../coding/landing/HeroHome";
import Navbar from "../ui/Navbar";
import { Button } from "../ui/Button";

const LandingPagev3 = ({ curriculumLink, title, description, images }) => {
  return (
    <div className=" bg-white grid grid-cols-1">
      <Navbar />
      <div className="p-4 flex flex-col w-full space-y-4">
        <HeroHome title={title} description={description} />
        <div className="flex-col items-center flex justify-center">
          <p className="font-bold text-xl mb-4">What will you learn?</p>
          <Link href={curriculumLink}>
            <Button
              label="See the curriculum"
              backgroundColor="blue"
              textColor="white"
            />
          </Link>
        </div>
        <div className="p-8 flex justify-center flex-col items-center">
          <p className="font-bold text-xl mb-4">
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
