import React from "react";
import PostLayout from "../../components/coding/blog/PostLayout";
import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={"Making The Leap Into Development"}
        description={"An employees transition into programming."}
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col gap-4 p-4">
        <img
          src={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
          className="object-cover h-48"
        />
        <h1 className="text-5xl font-bold">Making The Leap Into Development</h1>
        <h2 className="text-xl font-bold"> Lakshman 'Lucky' Hariharan</h2>
        <p>
          Thinking that coding was ‘too hard’, the fear of the unknown, and
          believing that I had missed the boat left me feeling stuck in my job.
          I graduated from the University of Waterloo in 2021, and later secured
          a full-time role as an actuarial analyst. I quickly realized that even
          though it seemed like I was doing well, I was not happy in my field.{" "}
        </p>
        <p>
          {" "}
          I thought back to CS115: Introduction to Computer Science from my
          first year of university, where we used Racket to study the basics of
          programming. I remembered how I resonated with the course, and enjoyed
          working on each week’s assignment. I decided that enough was enough,
          and resolved to re-introduce the fun of programming into my life. So I
          quit my job, and enrolled in a coding academy called Skillify.
        </p>
        For me, learning to code has not only meant investing in my technical
        skills, but also my self-confidence, and my ability to embrace the
        discomfort of solving challenging problems. The process has involved
        constantly learning, and sharpening my ability to navigate uncertainty
        effectively. Learning to better manage expectations has also been key.
        Initially, I tended to rush into ambitious projects to ‘make-up’ for
        lost time. I learned that if I took a step back and broke problems down
        into bite-sized pieces, I could tackle challenges that may have felt
        insurmountable.
        <p>
          I know there is a lot left ahead of me on my journey, and I will keep
          my head down and keep learning! I cannot overstate how grateful I am
          to my family for their support, and to Skillify for their expert
          coaches and resources!
        </p>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
