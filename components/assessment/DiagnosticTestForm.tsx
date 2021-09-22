import React, { useState } from "react";
import { Button } from "../ui/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  gradeRange: string;
  setGradeRange: (gradeRange: string) => void;
};

const DiagnosticTestForm = ({
  onClick,
  email,
  setEmail,
  name,
  setName,
  gradeRange,
  setGradeRange,
}: DiagnosticTestFormProps) => {
  const onGradeChange = (e: any) => {
    setGradeRange(e.target.value);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <div className="flex flex-col">
      <div className="w-full shadow-lg bg-blue-100 p-4 border-b-4 border-blue-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="block">Discover your child's math level</span>
            <span className="block">
              with{" "}
              <span className="text-blue-700">
                {" "}
                Math Champ's Diagnostic Test{" "}
              </span>{" "}
              today.
            </span>
          </h2>
        </div>
      </div>

      <div>
        <div className="flex flex-row sm:flex-row bg-white shadow-lg rounded-xl p-8 gap-40 mt-8 items-center justify-center">
          <div className="flex flex-col gap-4 md:w-1/2">
            <p className="text-lg">
              Once your child completes the assessment, we will provide you with{" "}
              <b> personalized </b>
              resources to help your child become better at math - no matter
              what level they are at.
            </p>
            <div className="flex flex-row items-center">
              <p className="font-bold  mr-4">Grade</p>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="relative inline-flex">
                  <select
                    value={gradeRange}
                    onChange={onGradeChange}
                    className="p-4 text-sm text-blue-900 outline-none focus:outline-none border border-solid border-black rounded-xl bg-transparent flex items-center py-2"
                  >
                    <option>Primary</option>
                    <option>Junior</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <p className="font-bold mr-4">Adult's Email</p>
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`outline-none focus:outline-none border border-solid border-black text-left p-2 text-md lg:text-md rounded-xl`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center">
              <p className="font-bold mr-4">Student's Name</p>
              <input
                id="guess"
                type="text"
                autoComplete="off"
                className={`outline-none focus:outline-none border border-solid border-black text-left p-2 text-md lg:text-md rounded-xl`}
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <Button
              backgroundColor="blue"
              label="Start"
              textColor="white"
              onClick={(e) => onClick(gradeRange)}
            />
          </div>

          <div className="">
            {" "}
            <img src="/images/studyingPic.png" className="w-108" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTestForm;
