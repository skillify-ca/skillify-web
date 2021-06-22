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
      <Link href={`/practice/${getPracticeCardForSkill(slug)[0].link}`}>
        <Button backgroundColor="blue" textColor="white" label="Practice Now" />
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <Navbar />
      <div className="flex flex-row justify-between m-8">
        <p> I can {SkillDescription(slug)} </p>
        {getPracticeCardForSkill(slug).map((resource) => (
          <p className="text-7xl"> {resource.confidenceRating} </p>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          {getVideosForSkill(slug).map((resource) => (
            <Link href={`/${resource.link}`}>
              <div
                className="bg-white shadow-lg cursor-pointer rounded-lg w-full object-contain bg-cover bg-center flex justify-center items-center text-2xl text-white"
                style={cardStyle(resource.videoId)}
              >
                <p className="font-bold mb-4"> {resource.vidTitle} </p>
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
