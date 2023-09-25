import Link from "next/link";
import React from "react";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import StoryCard from "../../components/successStories/StoryCard";

export default function SuccessStories() {
  return (
    <div>
      <LandingNavbar />
      <h1 className="w-full pt-10 text-5xl font-bold text-center ">
        Student Success Stories
      </h1>
      <div className="w-full ">
        <div className="grid items-center w-full grid-cols-3 gap-16 p-20 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <StoryCard
              title={"Ajevan M."}
              image={"/images/successStories/ajevan.png"}
              description={"Software Engineer at Infranova Solutions"}
              link={"/successStories/ajevan"}
            />
          </div>
          <div>
            <StoryCard
              title={"Mayu G."}
              image={"/images/successStories/mayu.png"}
              description={"Software Engineer at Hedge Labs"}
              link={"/successStories/mayu"}
            />
          </div>
        </div>
      </div>
      <div className="bg-indigo-950 w-full p-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold pb-8">
          Ready to become the next success story?
        </h1>
        <Link href={"/plans"}>
          <button
            type="button"
            className="py-3 bg-charmander hover:bg-pikachu-500 text-white px-8 font-bold rounded-lg cursor-pointer"
          >
            <p className={`text-base"`}>Apply Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

SuccessStories.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
