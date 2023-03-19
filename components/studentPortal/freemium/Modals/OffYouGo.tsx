import React, { useEffect, useState } from "react";
import { testimonialData } from "../../../../pages/api/testimonial";
import Testimonial from "../../../landingPage/Testimonial";

const filteredTestimonials = [
  testimonialData[0],
  testimonialData[3],
  testimonialData[5],
];

export default function OffYouGo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h1 className="md:text-4xl text-lg font-bold">Off You Go!</h1>
        <p className="hidden md:block">
          We hope you have fun learning coding and building projects.
        </p>
        <p className="hidden md:block">-- The Skillify Community</p>
      </div>
      <div className="flex flex-row overflow-x-auto md:w-200 h-80 md:h-full mt-4 md:mt-8 space-x-4">
        {filteredTestimonials.map((it, index) => (
          <div key={index} className="flex-shrink-0 w-64 md:w-auto mx-auto">
            <Testimonial
              text={it.text}
              img={it.img}
              studentName={it.studentName}
              color={0}
              completionDate={it.completionDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
