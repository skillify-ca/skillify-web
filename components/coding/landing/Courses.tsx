import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CourseProps {
  image: string;
  title: string;
  description: string;
}
const Course = ({ image, title, description }: CourseProps) => (
  <div className="flex flex-col gap-4 p-4 bg-white shadow-lg">
    <div className="w-24 h-24 bg-white rounded-full place-self-center">
      <Image src={image} width={100} height={100} objectFit="contain" />
    </div>
    <p className="text-xl font-bold text-center text-charmander">{title}</p>
    <p className="text-center ">{description}</p>
    <p className="font-bold text-center cursor-pointer text-charmander">
      Apply Now
    </p>
  </div>
);
const Courses = () => {
  return (
    <div className="p-4 sm:p-16 bg-murkrow">
      <h1 className="mb-4 text-5xl font-bold text-center text-white sm:mb-16">
        {" "}
        Courses
      </h1>
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-3">
        <Course
          image={"/images/landingPage/coding.png"}
          title="Intro to Coding"
          description="We will help you get hired with resume critiques and mock technical interviews"
        />
        <Course
          image={"/images/coding/units/react.png"}
          title="Intro to Web Development"
          description="You will build real products to add to your portfolio or resume."
        />
        <Course
          image={"/images/landingPage/android.png"}
          title="Intro to Android Development"
          description="Join a cohort-based course to learn with peers and keep each other
            accountable."
        />
        <Course
          image={"/images/coding/units/react.png"}
          title="Intro to Interviewing"
          description="Join a cohort-based course to learn with peers and keep each other
            accountable."
        />
      </div>
    </div>
  );
};

export default Courses;
