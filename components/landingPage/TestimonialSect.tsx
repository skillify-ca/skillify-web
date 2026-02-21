import React from "react";
import Testimonial from "./Testimonial";

const TestimonialSect = () => {
  const testimonialData = [
    {
      studentName: "Ajevan M",
      img: "/images/landingPage/ajevan.png",
      text: "The skills that I learned from this course helped me make a bigger impact at work. I'm able to deliver more technical projects and use data to solve problems.",
      completionDate: "March 2022",
      degree: "Ontario Tech University - Computer Science",
    },
    {
      studentName: "Winthya V",
      img: "/images/landingPage/winthya.jpg",
      text: "With no prior knowledge of coding, I was able to develop my first website within weeks. Most importantly, Vithushan made the whole learning experience fun and enjoyable. Now I can code websites for my own clients.",
      completionDate: "May 2022",
      degree: "University of Waterloo - Kinesiology",
    },

    {
      studentName: "Mayu G",
      img: "/images/landingPage/mayu.png",
      text: "Skillify was an excellent experience! The student community is super supportive and engaged. Vithushan helped me reskill and learn modern coding frameworks that got me hired as a software engineer.",
      completionDate: "Nov 2021",
      degree: "York University - Mechanical Engineering",
    },
    {
      studentName: "Brian L",
      img: "/images/landingPage/brian.jpg",
      text: "This course gave me better understanding of coding and data analysis which helped me land a better job as a product manager! I'm able to empathize and communicate with my engineers better.",
      completionDate: "Aug 2022",
      degree: "McMaster University - Chemical Engineering",
    },
    {
      studentName: "Mau M",
      img: "/images/landingPage/mau.jpg",
      text: "The team at Skillify did an excellent job in this course to facilitate the fundamentals and give each student the confidence to succeed. Thank you to Vithushan for a wonderful experience.",
      completionDate: "Feb 2022",
      degree: "University of Waterloo - Kinesiology",
    },
    {
      studentName: "Lakshman H ",
      img: "/images/landingPage/lakshman.jpg",
      text: "Vithushan helped me develop my technical skills in Typescript, Kotlin, Python and SQL. Developing these skills helped me land a new job!",
      completionDate: "Feb 2023",
      degree: "University of Waterloo - Actuarial Science",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center p-4 bg-murkrow sm:p-8">
        <div className="">
          <p className="text-3xl font-semibold text-center text-white"> Testimonials</p>
          <p className="text-center text-white">
            {" "}
            Read what our previous students have to say about their experience
            at Skillify.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {testimonialData.map((it, index) => (
              <div key={index}>
                <Testimonial
                  text={it.text}
                  img={it.img}
                  studentName={it.studentName}
                  color={index % 4}
                  completionDate={it.completionDate}
                  degree={it.degree}
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
