import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "../graphql/fetchUsers";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import Link from "next/link";

export default function Profile(props) {
  const userSkillsData = useQuery(FETCH_USER_SKILLS);
  let skills = [];

  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
  }

  const [session] = useSession();

  const users = useQuery(FETCH_USERS);
  return (
    <div className="flex flex-col">
      <Navbar />
      <ul>
        {skills
          .filter((it) => it.locked == false)
          .map((it) => (
            <li key={it.skill.title}>
              <Link href={"portfolio/" + it.skill.id}>
                <div className="gap-4 flex bg-gradient-to-b from-purple-400 via-purple-500 to-purple-500 p-2 m-4 items-center justify-between text-center rounded-xl">
                  <div className="flex gap-4 h-8 items-center p-2">
                    <img
                      src={it.skill.image}
                      alt="skill image"
                      className="w-8"
                    />
                    <p>{it.skill.title}</p>
                  </div>
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
              <div className="gap-4 flex bg-gray-400 p-2 m-4 items-center text-center rounded-xl">
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
  );
}
