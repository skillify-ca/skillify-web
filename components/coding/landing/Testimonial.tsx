import { ReactNode, useState } from "react";
import { Skill } from "../../../pages/api/skill";

export interface TestimonialProps {
  text: string;
  img: string;
  studentName: string;
}

const Testimonial = ({ text, img, studentName }: TestimonialProps) => {
  return (
    <div className="flex flex-col h-full bg-white p-4 rounded-xl border-t-8 border-charmander">
      <p>{text}</p>
      <div className="flex p-3">
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
      </div>
      <div className="grid grid-cols-6 p-3">
        <img src={img} alt="student" />
        <div className="flex flex-col col-span-4 ml-4 justify-center">
          <p className="font-bold text-xl">{studentName}</p>
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
