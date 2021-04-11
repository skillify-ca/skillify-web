import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "../graphql/fetchUsers";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import Link from "next/link";

export default function Profile(props) {
  const [session, user] = useSession();
  const users = useQuery(FETCH_USERS);
  const userSkillsData = useQuery(FETCH_USER_SKILLS);
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
    <div className="flex flex-col justify-center overflow-auto bg-scroll bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300">
      <Navbar />
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
            .map((it) => (
              <li key={it.skill.title}>
                <Link href={"portfolio/" + it.skill.id}>
                  <div className="gap-4 flex justify-between rounded-full items-center h-16 w-72 bg-white p-4 text-center shadow-md m-4">
                    <img
                      src={it.skill.image}
                      alt="skill image"
                      className="w-8"
                    />
                    <p>{it.skill.title}</p>
                    <img
                      src={
                        it.stars == 3
                          ? "images/checkmark.png"
                          : "images/progress.png"
                      }
                      alt="skill image"
                      className="w-8"
                    />
                  </div>
                </Link>
              </li>
            ))}
          {skills
            .filter((it) => it.locked == true)
            .map((it) => (
              <li key={it.skill.title}>
                <div className="gap-4 flex justify-between rounded-full items-center h-16 w-72 bg-gr bg-gray-300 p-4 text-center shadow-md m-4">
                  <img
                    src="images/skills/lock.png"
                    alt="skill image"
                    className="w-8"
                  />
                  <p>{it.skill.title}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
