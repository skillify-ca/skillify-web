import React from "react";
import SEO from "../../components/SEO";
import PostLayout from "../../components/blog/PostLayout";
import { LessonComponentData } from "../../components/studentPortal/lessons/LessonComponent";

interface PageProps {
  blogComponents: LessonComponentData[];
}
export default function Page({ blogComponents }: PageProps) {
  return (
    <div>
      <SEO
        title={"Coding Academy Survival Guide // Tips"}
        description={
          "Tips for aspiring software engineers in coding academies and software engineering internships"
        }
        image={"https://example.com/image.jpg"}
      />
      <h1 className="text-3xl font-bold">
        Coding Academy Survival Guide // Tips
      </h1>
      <h4 className="text-lg font-medium mt-4 FLEX mb-8">
        Like many aspiring software engineers, I turned to a coding academy as
        an alternative to traditional chooling to help develop my skills and
        establish connections in the industry. I can say from experience that it
        has been a rewarding journey, but also at times overwhelming,
        challenging and anxiety-inducing! With that in mind, I’ve curated 18
        tips to help you in your coding academy or software engineering
        internship.
      </h4>
      <h4 className="underline text-xl">Here are the tips:</h4>
      <ul className="mt-4 grid grid-cols-1 text-lg font-medium list-decimal list-inside">
        <div className="mt-4 ">
          <div className="">
            <div className="font-bold">Don't get stuck in tutorial hell.</div>{" "}
            While tutorials are helpful, true learning comes from building your
            own projects and learning from your mistakes.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Ask for help early and often.</div> Don't
            hesitate to seek assistance if you're struggling with a concept or
            need guidance on a project.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Trust your own pace.</div> Embrace your
            individuality and focus on your progress instead of comparing
            yourself to others or conforming to expectations.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Believe in yourself fully,</div>{" "}
            especially when the odds seem against you. Keep a positive mindset
            and remember that you only fail if you choose to give up.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Be honest with yourself and others.</div>{" "}
            Admitting to yourself when you're struggling or feeling stuck is the
            first step to getting the support you need.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Celebrate bite-sized progress.</div>{" "}
            Focus on making small improvements every day, and over time, they
            will add up to significant progress.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Take care of yourself.</div> Prioritize
            self-care by taking breaks, exercising, eating well, and maintaining
            your mental health.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Embrace success.</div> Regularly
            visualize what success looks like. Take some time, early in the day,
            and hold onto that feeling.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Embrace failure.</div> Don't be afraid to
            try new things or take risks, even if they result in failure.
            Failure is a valuable learning experience.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Stay organized.</div> Keep track of your
            assignments, deadlines, and notes in a way that works best for you,
            whether that be through a physical planner or a digital to-do list
            like Todoist.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Read documentation thoroughly.</div>{" "}
            Understanding how to navigate documentation is an essential skill
            for software engineers, so take the time to read and comprehend
            documentation carefully.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Follow the revision rule of 3's.</div>{" "}
            Reinforce your understanding of the new concept or material by
            reviewing it on three separate occasions.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Practice consistently.</div> Dedicate
            time every day to coding, even if it's just for a few minutes, to
            keep your skills sharp and maintain momentum.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div>
            <div className="font-bold">Collaborate with others.</div> Working
            with classmates or colleagues on projects can help you learn from
            their strengths and weaknesses, while also building your teamwork
            skills.
          </div>
        </div>
        <div className="mt-4 FLEX">
          <div className="font-bold"> Practice intentional communicating.</div>{" "}
          Clear and effective communication is critical in any professional
          field, so don’t be afraid to work on developing your communication
          skills through intentional practice and asking for feedback.
        </div>
        <div className="">
          <div className="font-bold ">
            {" "}
            Keep up with the latest industry news.{" "}
          </div>
          Use articles, podcasts, blogs, or social media to stay informed and
          relevant
        </div>
        <div>
          <div className="font-bold"> Network actively.</div> Attend meetups or
          conferences, participate in online forums or groups, and connect with
          people in the industry to expand your professional network.
        </div>
        <div>
          <div className="font-bold">Seek out mentorship.</div> Find someone
          with more experience than you to mentor you and provide guidance
          throughout your journey.
        </div>
      </ul>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
