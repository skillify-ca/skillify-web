import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { getPracticeCardForSkill } from "../api/skill";
import { getVideosForSkill } from "../api/videoHelper";
import Resources from "../resources";

const SkillOverviewPage = ({ slug }) => {
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const practiceComponent = (
    <div>
      <div className="bg-white shadow-lg rounded-lg w-full p-4 cursor-pointer">
        {getPracticeCardForSkill(slug).map((resource) => (
          <Link href={`/practice/${resource.link}`}>
            <div className="flex flex-col justify-between h-full">
              <p className="font-bold mb-4">{resource.practiceTitle}</p>
              <img className="h-30 object-cover" src={resource.imgSrc}></img>
              <div className="flex items-center">
                Latest Confidence Rating:{" "}
                <span className="text-4xl">{resource.confidenceRating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />
      <div className="m-4">
        <p> Learn </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {getVideosForSkill(slug).map((resource) => (
            <Link href={`/${resource.link}`}>
              <div
                className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
                style={cardStyle(resource.videoId)}
              >
                <p className="font-bold mb-4"> {resource.vidTitle} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {practiceComponent}
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
