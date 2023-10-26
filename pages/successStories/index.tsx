import Link from "next/link";
import React from "react";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import StoryCard from "../../components/successStories/StoryCard";

export default function SuccessStories() {
  return (
    <div>
      <LandingNavbar />

      <div className="w-full mx-auto max-w-7xl bg-slate-50">
        <h1 className="w-full pt-10 text-5xl font-bold text-center ">
          Student Success Stories
        </h1>
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
      <div className="flex flex-col items-center justify-center w-full p-20 bg-indigo-950">
        <h1 className="pb-8 text-3xl font-bold text-white">
          Ready to become the next success story?
        </h1>
        <Link href={"/plans"}>
          <button
            type="button"
            className="px-8 py-3 font-bold text-white rounded-lg cursor-pointer bg-charmander hover:bg-pikachu-500"
          >
            <p className={`text-base"`}>Apply Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

SuccessStories.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
