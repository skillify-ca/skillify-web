import React from "react";
import Testimonial from "./Testimonial";

const TestimonialSect = () => {
  const testimonialData = [
    {
      studentName: "Ajevan M",
      img: "/images/landingPage/ajevan.png",
      text: "I was stuck and frustrated in my old job at the bank. Skillify's program helped me get interviews from multiple companies. Now, I work as a software developer through a job that Skillify connected me to through their private job board.",
      completionDate: "March 2022",
    },
    {
      studentName: "Winthya V",
      img: "/images/landingPage/winthya.jpg",
      text: "With no prior knowledge of coding, I was able to develop my first website within weeks. Most importantly, Skillify made the whole learning experience fun and enjoyable. Now I can code websites for my own clients.",
      completionDate: "May 2022",
    },
    {
      studentName: "Raveen R",
      img: "/images/landingPage/raveen.jpg",
      text: "Skillify customized my curriculum so I could build out my own product ideas during the course. They helped me land interviews for software engineering and technical founder roles. Learning how to code has given me a flexible lifestyle that I couldn't live without.",
      completionDate: "May 2022",
    },
    {
      studentName: "Mayu G",
      img: "/images/landingPage/mayu.png",
      text: "Skillify was an excellent experience! The community is super supportive and engaged. The coaches helped me reskill and learn modern coding frameworks that got me hired as a software engineer.",
      completionDate: "Nov 2021",
    },
    {
      studentName: "Brian L",
      img: "/images/landingPage/brian.jpg",
      text: "Skillify coaching gave me better understanding of the development process which helped me land a better job as a product manager! I'm able to empathize and communicate with my engineers better.",
      completionDate: "Aug 2022",
    },
    {
      studentName: "Mithulan M",
      img: "/images/landingPage/mithulan.jpg",
      text: "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed in the field of coding. Thank you to Vithushan and his team for a wonderful experience.",
      completionDate: "Feb 2022",
    },
    {
      studentName: "Jacky H ",
      img: "/images/landingPage/jacky.jpg",
      text: "I have a degree in IT, however, I'm not working in the tech industry. In the course, I got to expand my skills with the help of professionals and was encouraged to ask plenty of questions. The demos and projects were great to showcase what I learned every week.",
      completionDate: "Feb 2022",
    },
    {
      studentName: "Lucky H ",
      img: "/images/landingPage/lakshman.jpg",
      text: "Skillify helped me transition careers with their full-stack development coaching. Six months later, I have become a capable candidate for remote frontend engineering roles. Thank you Vithushan for developing my technical skills, and helping me secure interviews!",
      completionDate: "Feb 2023",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center p-4 bg-slate-200 sm:p-8">
        <div className="">
          <p className="text-3xl font-semibold text-center"> Testimonials</p>
          <p className="text-center ">
            {" "}
            Read what our previous students have to say about their experience
            at Skillify.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
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
