import React from "react";
import Testimonial, { TestimonialProps } from "./Testimonial";

const TestimonialSect = () => {
  const testimonialData = [
    {
      studentName: "Brian L",
      img: "/images/landingPage/brian.jpg",
      text:
        "Skillify helped me understand the fundamentals of frameworks and eng team development. As a product manager in tech, I now have a better understanding of the development process and needs of my team members! Working on a capstone project helped me walk a mile in the shoes of some of my teammates!",
      completionDate: "Aug 2022",
    },
    {
      studentName: "Winthya V",
      img: "/images/landingPage/winthya.jpg",
      text:
        "Skillify's expert coaching helped me build a fully-functioning, professional website for my business. With no prior knowledge of coding, I was able to develop a website within weeks. Most importantly, Skillify made the whole learning experience fun and enjoyable. I am now equipped to code my own websites.",
      completionDate: "May 2022",
    },
    {
      studentName: "Raveen R",
      img: "/images/landingPage/raveen.jpg",
      text:
        "I’ve always had a curiosity to build out my own product ideas. Skillify gave me the guidance and technical foundation needed to build web applications using modern frameworks. I feel confident that I can leverage these new-found skills as a technical founder or even transition into a software engineering role.",
      completionDate: "May 2022",
    },
    {
      studentName: "Ajevan M",
      img: "/images/landingPage/ajevan.png",
      text:
        "I joined Skillify and learned so much about front end web development that I was able to get interviews from big tech companies and start-ups. I feel more confident getting interviews after taking the Skillify course",
      completionDate: "March 2022",
    },

    {
      studentName: "Mithulan M",
      img: "/images/landingPage/mithulan.jpg",
      text:
        "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed in the field of coding. Thank you to Vithushan and his team for a wonderful experience.",
      completionDate: "Feb 2022",
    },
    {
      studentName: "Jacky H ",
      img: "/images/landingPage/jacky.jpg",
      text:
        "I have a degree in IT, however, I'm not working in the tech industry. In the course, I got to expand my skills with the help of professionals and was encouraged to ask plenty of questions. The demos and projects were great to showcase what I learned every week.",
      completionDate: "Feb 2022",
    },
    {
      studentName: "Mayu G",
      img: "/images/landingPage/mayu.png",
      text:
        "Skillify has been an excellent axperience! It allowed me to reskill and learn modern coding frameworks that makes me competitive to get hired in software engineering.",
      completionDate: "Nov 2021",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center p-4 bg-white sm:p-8">
        <div className="">
          <p className="text-3xl font-semibold "> Testimonials</p>
          <p className="">
            {" "}
            Read what our previous students have to say about their experience
            at Skillify.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-4 bg-white">
            {testimonialData.map((it, index) => (
              <div>
                <Testimonial
                  text={it.text}
                  img={it.img}
                  studentName={it.studentName}
                  color={index % 4}
                  completionDate={it.completionDate}
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
