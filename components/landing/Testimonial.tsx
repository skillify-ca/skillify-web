import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";

export interface TestimonialProps {
  text: string;
}

const Testimonial = ({ text }: TestimonialProps) => {
  return (
    <div className="flex flex-col w-96 bg-white">
      <p>{text}</p>
      <div className="flex">
        <img src="/images/landingPage/star.svg" className="hue-rotate-90" />
        <img src="/images/landingPage/star.svg" className="-hue-rotate-60" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-0" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-180" />
      </div>
      <div className="grid grid-cols-6">
        <img src="/images/landingPage/mayu.png" alt="student" />
        <div className="flex flex-col col-span-4 ml-4 justify-center">
          <p className="font-bold text-xl">Mayu Ganesathas</p>
          <p>Completed in January 2022</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-8 h-8"
            src="/images/landingPage/linkedin.svg"
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
