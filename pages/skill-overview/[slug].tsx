import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { getVideosForSkill } from "../api/videoHelper";

const SkillOverviewPage = ({ slug }) => {
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center">
        <p> Learn </p>
        {getVideosForSkill(slug).map((resource) => (
          <Link href={`/${resource.link}`}>
            <div
              className="bg-white shadow-lg cursor-pointer rounded-lg w-full h-64 object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
              style={cardStyle(resource.videoId)}
            >
              <p className="font-bold mb-4"> {slug} </p>
            </div>
          </Link>
        ))}
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
