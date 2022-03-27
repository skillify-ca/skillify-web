import React from "react";
import Testimonial, { TestimonialProps } from "./Testimonial";

const TestimonialSect = () => {
  const testimonialData = [
    {
      studentName: "Mayu G",
      img: "/images/landingPage/mayu.png",
      text: "Skillify has been an excellent axperience! It allowed me to reskill and learn modern coding frameworks that makes me competitive to get hired in software engineering.",
    },
    {
      studentName: "Ajevan M",
      img: "/images/landingPage/ajevan.png",
      text: "I joined Skillify and learned so much about front end web development that I was able to get interviews from big tech companies and start-ups. I feel more confident getting interviews after taking the Skillify course",
    },
    {
      studentName: "Mithulan M",
      img: "/images/landingPage/goldMedal.svg",
      text: "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed in the field of coding. Thank you to Vithushan and his team for a wonderful experience.",
    },
    {
      studentName: "Jacky H ",
      img: "/images/landingPage/goldMedal.svg",
      text: "I have a degree in IT, however, I'm not working in the tech industry. In the course, I got to expand my skills with the help of professionals and was encouraged to ask plenty of questions. The demos and projects were great to showcase what I learned every week.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center p-4 sm:p-8">
        <div className="">
          <p className="text-3xl font-semibold "> Testimonials</p>
          <p className="">
            {" "}
            Read what our previous students have to say about their experience
            at Skillify.
          </p>
          <div className="flex flex-wrap gap-8 mt-4">
            {testimonialData.map((it, index) => (
              <div>
                <Testimonial
                  text={it.text}
                  img={it.img}
                  studentName={it.studentName}
                  color={index % 4}
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
