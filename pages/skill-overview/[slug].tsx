import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/stories/Button";
import { getPracticeCardForSkill, SkillDescription } from "../api/skill";
import { getVideosForSkill } from "../api/videoHelper";
import Resources from "../resources";

const SkillOverviewPage = ({ slug }) => {
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const practiceComponent = getPracticeCardForSkill(slug)[0] && (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl pl-4 gap-8 m-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-4 justify-center">
          <p className="text-4xl font-bold text-blue-900"> PRACTICE TIME </p>
          <p className="text-xl">
            Solidify your knowledge by doing the practice questions to see if
            you can {SkillDescription(slug).toLowerCase()}! You can do the
            practice as many times as you wish to perfect this skill. If you're
            stuck on a question, watch the videos above or click on a hint to
            help you out.
          </p>
          <div className="flex gap-8">
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={`/practice/${getPracticeCardForSkill(slug)[0].link}`}>
                <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                  Practice Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          className="w-full sm:w-1/2 object-cover rounded-xl"
          alt="student-image"
          src="/images/practiceAdd.png"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      <div className="flex flex-row justify-between mt-8 mr-8 ml-8">
        <span className="text-6xl font-semibold text-gray-700">
          {" "}
          I can {SkillDescription(slug) &&
            SkillDescription(slug).toLowerCase()}{" "}
        </span>
        <span className="flex flex-col items-center mr-8">
          <p className="text-md font-bold text-gray-700 ">Confidence:</p>{" "}
          {getPracticeCardForSkill(slug).map((resource) => (
            <p className="text-7xl"> {resource.confidenceRating} </p>
          ))}{" "}
        </span>
      </div>
      <div className="bg-white shadow-lg flex-col p-2 rounded-lg m-8">
        <p className="text-lg text-blue-900">Videos </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mr-8 ml-8 items-center">
          {getVideosForSkill(slug).map((resource) => (
            <Link href={`/${resource.link}`}>
              <div
                className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-72 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
                style={cardStyle(resource.videoId)}
              >
                <p className="font-bold m-4"> {resource.vidTitle} </p>
              </div>
            </Link>
          ))}
        </div>

        {getPracticeCardForSkill(slug)[0] && practiceComponent}
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default SkillOverviewPage;
