import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../../ContactForms";
import Testimonial, { TestimonialProps } from "./Testimonial";
import { Button } from "../../ui/Button";

const TestimonialSect = () => {
  const testimonialData: TestimonialProps[] = [
    {
      studentName: "Mayu G",
      img: "/images/landingPage/mayu.png",
      text: "“Skillify has been an excellent axperience! It allowed me to reskill and learn modern coding frameworks that makes me competitive to get hired in software engineering.”",
    },
    {
      studentName: "Ajevan M",
      img: "/images/landingPage/ajevan.png",
      text: "“I joined Skillify and learned so much about front end web development that I was able to get interviews from big tech companies and start-ups. I feel more confident getting interviews after taking the Skillify course”",
    },
    {
      studentName: "Mithulan M",
      img: "/images/landingPage/goldMedal.svg",
      text: "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed in the field of coding. Thank you to Vithushan and his team for a wonderful experience.",
    },
    {
      studentName: "Jacky H ",
      img: "/images/landingPage/goldMedal.svg",
      text: "I have a degree in IT, however, I'm not working in the tech industry. My experience in this course was great. I got to expand my skills with the help of professionals and was encouraged to ask plenty of questions. The demos and projects were great to showcase what I learned every week. The intro course gave me the fundamental knowledge and a roadmap to work towards my goals of entering the tech job field.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center flex-col p-24">
        <div className="">
          <p className="text-3xl font-semibold "> Testimonials</p>
          <p className=" text-xl my-8">
            {" "}
            Read what our previous students have to say about their experience
            at Skillify.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonialData.map((it) => (
              <div>
                <Testimonial
                  text={it.text}
                  img={it.img}
                  studentName={it.studentName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSect;
