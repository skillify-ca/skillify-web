import { useQuery } from "@apollo/client";
import { session, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import { Button } from "../../components/stories/Button";
import { FETCH_USER_EMOJIS } from "../../graphql/fetchUserEmojis";
import { userId } from "../../graphql/utils/constants";
import {
  getEmoji,
  getPracticeCardForSkill,
  getSkillId,
  getSkillsForTopicGrade,
  SkillDescription,
} from "../api/skill";
import { getVideosForSkill } from "../api/videoHelper";
import Resources from "../resources";

const SkillOverviewPage = ({ slug }) => {
  const SHOULD_SHOW_PUZZLES = false;
  const [session, loading] = useSession();
  const userSkillsQuery = useQuery(FETCH_USER_EMOJIS, {
    variables: {
      userId: userId(session),
      skillId: [getSkillId(slug)],
    },
  });
  let userSkills = [];
  if (userSkillsQuery.data) {
    userSkills = userSkillsQuery.data.user_skills;
  }
  const cardStyle = (videoId) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(http://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
    };
  };
  const practiceComponent = SkillDescription(slug) && (
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

  const puzzleId = "8";
  const puzzleSection = (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl pl-4 gap-8 m-8">
        <img
          className="w-full sm:w-1/2 object-cover rounded-xl"
          alt="student-image"
          src="/images/practiceAdd.png"
        />
        <div className="flex flex-col w-full sm:w-1/2 gap-4 justify-center">
          <p className="text-4xl font-bold text-blue-900"> PUZZLES </p>
          <p className="text-xl">Solve this puzzle to learn math</p>
          <div className="flex gap-8 flex-wrap text-white text-xl border-blue-900 font-bold rounded-xl">
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 5
              </button>
            </Link>
            <Link href={`/puzzle/2`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 2
              </button>
            </Link>
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 4
              </button>
            </Link>
            <Link href={`/puzzle/8`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 8
              </button>
            </Link>
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 3
              </button>
            </Link>
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 6
              </button>
            </Link>
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 9
              </button>
            </Link>
            <Link href={`/puzzle/${puzzleId}`}>
              <button className="disabled:opacity-50 bg-gradient-to-b  border-b-4 rounded-xl active:border-b-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 ">
                Puzzle 7
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <DiagnosticNavbar />
      <div className="flex flex-row justify-between mt-8 mr-8 ml-8">
        <span className="text-6xl font-semibold text-gray-700">
          {" "}
          I can {SkillDescription(slug) &&
            SkillDescription(slug).toLowerCase()}{" "}
        </span>
        <span className="flex flex-col items-center mr-8">
          <p className="text-md font-bold text-gray-700 ">Confidence:</p>{" "}
          <p className="text-7xl">
            {" "}
            {userSkills.length !== 0 &&
              getEmoji(
                userSkills.filter((it) => it.skill_id == getSkillId(slug))[0]
                  .emoji
              )}{" "}
          </p>{" "}
        </span>
      </div>
      <div className="bg-white shadow-lg flex-col p-2 rounded-lg m-8">
        <p className="text-lg text-blue-900">Videos </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mr-8 ml-8 items-center">
          {getVideosForSkill(slug).map((resource) => (
            <iframe
              width="560"
              height="500"
              src={`https://www.youtube.com/embed/${resource.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-2xl"
            ></iframe>
          ))}
        </div>
        {/* Hide the puzzle section until it's ready to launch */}
        {SHOULD_SHOW_PUZZLES && puzzleSection}
        {practiceComponent}
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
function grade(slug: any, grade: any) {
  throw new Error("Function not implemented.");
}
