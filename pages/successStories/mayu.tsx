import React from "react";

export default function MayuSuccessStory() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="bg-indigo-950 w-full grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <p className="text-yellow-400 p-2 ml-20 mt-10">
            {" "}
            &lt; ALL SUCCESS STORIES
          </p>
          <h2 className="text-white text-3xl p-2 ml-20 mt-10 font-bold">
            Mayu G.
          </h2>
          <h4 className="text-yellow-400 p-2 ml-20 text-xl">
            Software Engineer at Hedge Labs
          </h4>
          <div className="bg-[#7678ED] rounded-md ml-20 mr-20 mb-10 mt-5 p-6">
            <h2 className="text-white p-2 text-sm font-semibold">
              COMPLETED IN
            </h2>
            <h2 className="text-white p-2 text-sm">December 2021</h2>
            <h2 className="text-white p-2 text-sm font-semibold">
              KEY SKILLS LEARNED
            </h2>
            <ul className="list-disc ml-6 p-2">
              <li className=" text-white text-sm">React Web Development</li>
              <li className=" text-white text-sm">Android App Development</li>
              <li className=" text-white text-sm">
                Node.js Backend Development
              </li>
              <li className=" text-white text-sm">GraphQL</li>
              <li className=" text-white text-sm">Postgres SQL Database</li>
            </ul>
          </div>
        </div>
        <div className="row-span-1"></div>
        <div className="bg-white row-span-2 col-span-2 m-10"></div>
      </div>
      <div className="bg-white grid gap-8 grid-cols-1 p-10">
        <h4 className="text-black text-sm font-semibold px-60">
          Can you tell me a bit about your education and career background?
        </h4>
        <p className="text-black text-sm px-60">
          I studied Mechanical Engineering at York University. Throughout my
          undergrad, I had a few different internships in robotics, mechanical
          engineering, and entrepreneurship.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          What motivated you to learn coding?
        </h4>
        <p className="text-black text-sm px-60">
          I already had some low level hardware programming skills from my
          degree and work experience, but I was motivated to join Skillify
          Coding Academy to learn more modern frameworks and switch from
          mechanical to software engineering.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          What did you like most about Skillify's coding program?
        </h4>
        <p className="text-black text-sm px-60">
          The mentorship I received from coaches helped me build confidence as a
          software engineer. Skillify’s coaches have decades of experience in
          the tech industry, so you know you can trust their guidance and
          advice.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          What are the most valuable skills you learned? How have you
          incorporated these skills in your current job?
        </h4>
        <p className="text-black text-sm px-60">
          The most valuable skill I learned was how to build products quickly
          and iterate afterwards. A key strategy I use in my current job is
          releasing minimum viable products (MVP) and optimizing them later on.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          What sets Skillify Coding Academy apart from universities/colleges?
        </h4>
        <p className="text-black text-sm px-60">
          The personalized mentorship is something you don’t typically get from
          universities/colleges, and the real world projects you get to work on
          and build are unique to Skillify.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          Why do you think so many people are intimidated by learning to code?
          What advice would you give to them?
        </h4>
        <p className="text-black text-sm px-60">
          Coding looks like a foreign language to people with no experience or
          knowledge of it. It’s kind of similar to math in the sense that it’s a
          language everyone can learn and understand.
        </p>
        <h4 className="text-black text-sm font-semibold px-60">
          Do you have any advice for people considering a career in tech?
        </h4>
        <p className="text-black text-sm px-60">
          You should work on projects that you’re genuinely interested in --
          this is the best way to stay motivated!
        </p>
      </div>
      <div className="bg-indigo-950 w-full p-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold pb-8">
          Ready to become the next success story?
        </h1>
        <button className="bg-orange-400 text-white p-2 pr-6 pl-6 rounded-md">
          Apply Now
        </button>
      </div>
    </div>
  );
}

MayuSuccessStory.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
