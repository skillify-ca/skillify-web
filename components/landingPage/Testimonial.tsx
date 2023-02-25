import { ReactNode, useState } from "react";
import { Skill } from "../../../pages/api/skill";

export interface TestimonialProps {
  text: string;
  img: string;
  studentName: string;
  color: number;
  completionDate: string;
}

const Testimonial = ({
  text,
  img,
  studentName,
  color,
  completionDate,
}: TestimonialProps) => {
  const getBorderColour = () => {
    if (color === 0) {
      return "border-charmander";
    } else if (color === 1) {
      return "border-rattata";
    } else if (color === 2) {
      return "border-pikachu-500";
    } else if (color === 3) {
      return "border-murkrow";
    }
  };
  return (
    <div
      className={`flex flex-col h-full p-4 bg-white border-t-8 shadow-xl w-full sm:w-96 rounded-xl ${getBorderColour()}`}
    >
      <p className="sm:h-48">{text}</p>
      <div className="flex py-3">
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
        <img src="/images/landingPage/star.svg" className="hue-rotate-45" />
      </div>
      <div className="grid grid-cols-6 py-3">
        <img src={img} alt="student" className="rounded-full" />
        <div className="flex flex-col justify-center col-span-4 ml-4">
          <p className="text-xl font-bold">{studentName}</p>
          <p>Completed in {completionDate}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {false && (
            <img
              className="w-8 h-8"
              src="/images/landingPage/linkedin.svg"
              alt="linkedin"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
