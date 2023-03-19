import React from "react";
import { testimonialData } from "../../pages/api/testimonial";
import Testimonial from "./Testimonial";

const TestimonialSect = () => {
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
