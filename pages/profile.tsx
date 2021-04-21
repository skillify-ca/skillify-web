import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import Link from "next/link";
import { userId } from "../graphql/utils/constants";
import TopicItem from "../components/stories/TopicItem";

export default function Profile(props) {
  const [session, user] = useSession();
  const userSkillsData = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: userId(session),
    },
  });
  let skills = [];
  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
  }
  const progress = () => {
    const mastered = skills.filter((it) => it.locked == false && it.stars == 3);
    if (skills.length > 0) {
      return Math.round((mastered.length * 100) / skills.length);
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gray-200">
      <Navbar />
      <div className="h-screen ">
        <div className="col-span-2 p-8 m-4 bg-white shadow-lg rounded-3xl">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-xl">{session && session.user.name}</p>
              <p className="text-sm">{session && session.user.email}</p>
            </div>
            <div className="flex flex-col gap-4 m-4">
              <p className="text-sm">Progress</p>
              <p className="flex justify-center items-center bg-purple-100 shadow-inner ring-blue-400 text-center rounded-full ring-8 w-16 h-16">
                {progress()}%
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <ul className="flex justify-center flex-wrap">
            {skills
              .filter((it) => it.locked == false)
              .map((it) => {
				  const title: string = it.skill.title
                return (
                  <li className="gap-4 m-4" key={it.skill.title}>
                    <Link href={"portfolio/" + title.toLowerCase()}>
                      <TopicItem
                        title={it.skill.title}
                        image={it.skill.image}
                        accessory={it.stars == 3 ? `completed` : `progress`}
                      />
                    </Link>
                  </li>
                );
              })}
            {skills
              .filter((it) => it.locked == true)
              .map((it) => (
                <li
                  key={it.skill.title}
                  className="gap-4 flex justify-between m-4"
                >
                  <TopicItem title={it.skill.title} disabled={true} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
