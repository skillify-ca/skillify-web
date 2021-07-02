import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { userId } from "../graphql/utils/constants";
import { FETCH_USER_BADGES } from "../graphql/fetchUserBadge";
import { INIT_USER_BADGES } from "../graphql/initUserBadges";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { EMOJI_MASTERY, getEmoji } from "./api/skill";

export default function Profile(props) {
  const [session, user] = useSession();

  enum Stage {
    BADGES,
    SKILLS
  }
  const [stage, setStage] = useState(Stage.BADGES)

  let { loading, error, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: userId(session),
    },
  });

  const progress = () => {
    if (!loading && data.user_badges.length > 0 && data.user_skills.length > 0) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      const masteredSkills = data.user_skills.filter(
        (it) => it.emoji > EMOJI_MASTERY
      );
      
      return Math.round(
        ((unlockedBadges.length + masteredSkills.length) * 100) / (data.user_badges.length + data.user_skills.length)
      );
    } else {
      return 0;
    }
  };
  return (
    <div>
      <DiagnosticNavbar />
      <div className="overflow-auto bg-scroll h-screen bg-blue-50">
        <div className="flex flex-col gap-8 p-8">
          <div className="col-span-2 p-8 bg-white shadow-lg rounded-3xl">
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
          <div className="flex rounded-md bg-gray-100 relative tabs">
              <button
                className={
                  "tabs-item active relative z-10 p-4 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none " +
                  (stage == Stage.BADGES ? "bg-blue-500 text-white" : "")
                }
                onClick={() => {
                  setStage(Stage.BADGES);
                }}
              >
                Badges
              </button>
              <button
                className={
                  "transition duration-200 ease-in-out tabs-item w-full relative z-10 p-4 my-2 ml-2 text-center rounded-md  text-sm cursor-pointer select-none focus:outline-none " +
                  (stage == Stage.SKILLS ? "bg-blue-500 text-white" : "")
                }
                onClick={() => {
                  setStage(Stage.SKILLS);
                }}
              >
                Skill Inventory
              </button>
              <span className={"transition duration-200 ease-in-out tab-item-animate rounded-md bg-white"}></span>
            </div> 
          <div className="bg-white shadow-lg rounded-xl p-8">
             {stage == Stage.BADGES && <div className="grid gap-x-8 gap-y-4 grid-cols-3 md:w-1/2 m-auto p-8">
              {data &&
                data.user_badges.map((badge) => {
                  return badge.locked ? (
                    <div className="">
                      <img src="/images/lockedPic.png" className="w-32" />
                    </div>
                  ) : (
                    <Link href={`/badges/${badge.badge.id}`}>
                      <img src={badge.badge.image} className="w-32 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110" />
                    </Link>
                  );
                })}
            </div>}
            {stage == Stage.SKILLS && <div className="flex flex-col items-center gap-8 p-8">
              {data &&
                data.user_skills.map((skill) => 
                    <div className="flex gap-8">
                      <p className="text-xl">{skill.skill.title}</p>
                      <p className="text-3xl">{getEmoji(skill.emoji)}</p>
                    </div>
                )}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
