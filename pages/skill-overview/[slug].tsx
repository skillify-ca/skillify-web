import { useQuery } from "@apollo/client";
import { session, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { FETCH_SKILL_DESCRIPTION } from "../../graphql/fetchSkillDescription";
import { FETCH_USER_EMOJIS } from "../../graphql/fetchUserEmojis";
import { SKILLS, userId } from "../../graphql/utils/constants";
import { getEmoji, getSkillId } from "../api/skill";
import { getVideosForSkill } from "../api/videoHelper";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FETCH_SKILLS } from "../../graphql/fetchSkills";

const SkillOverviewPage = ({ slug, description, videos }) => {
  const [session] = useSession();
  const { loading, data } = useQuery(FETCH_USER_EMOJIS, {
    variables: {
      userId: userId(session),
      skillId: [getSkillId(slug)],
    },
  });
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setUserSkills(data.user_skills);
    }
  }, [data]);

  const practiceComponent = description && (
    <div>
      <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-xl pl-4 gap-8 m-8">
        <div className="flex flex-col w-full sm:w-1/2 gap-4 justify-center">
          <p className="text-4xl font-bold text-blue-900"> PRACTICE TIME </p>
          <p className="text-xl">
            Solidify your knowledge by doing the practice questions to see if
            you can {description.skills[0].description}! You can do the practice
            as many times as you wish to perfect this skill. If you're stuck on
            a question, watch the videos above or click on a hint to help you
            out.
          </p>
          <div className="flex gap-8">
            <div className="text-white text-xl border-blue-900 font-bold rounded-xl">
              <Link href={`/practice/${slug}`}>
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
          I can{" "}
          {description &&
            description.skills[0] &&
            description.skills[0].description}{" "}
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
          {videos &&
            videos.map((resource) => (
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
        {practiceComponent}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_SKILLS,
  });

  const ids = data.skills.map((element) => {
    return { params: { slug: element.id.toString() } };
  });
  return {
    paths: ids,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });

  const videos = getVideosForSkill(Number.parseInt(params.slug));

  const { data } = await client.query({
    query: FETCH_SKILL_DESCRIPTION,
    variables: {
      skillId: params.slug,
    },
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { description: data, videos: videos, slug: params.slug } };
}

export default SkillOverviewPage;
