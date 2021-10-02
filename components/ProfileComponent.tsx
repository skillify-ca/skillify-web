import React, { useEffect, useState } from "react";
import { userId } from "../graphql/utils/constants";
import { EMOJI_MASTERY, getEmoji } from "../pages/api/skill";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import LockedBadge from "./LockedBadge";
import { useSession } from "next-auth/react";

const ProfileComponent = () => {
  const { data: session, status } = useSession();
  let { loading, data, refetch } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: userId(session),
    },
  });

  enum Stage {
    BADGES,
    SKILLS,
  }
  const [stage, setStage] = useState(Stage.BADGES);

  const progress = () => {
    if (
      !loading &&
      data.user_badges.length > 0 &&
      data.user_skills.length > 0
    ) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      const masteredSkills = data.user_skills.filter(
        (it) => it.emoji > EMOJI_MASTERY
      );

      return Math.round(
        ((unlockedBadges.length + masteredSkills.length) * 100) /
          (data.user_badges.length + data.user_skills.length)
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="overflow-auto bg-scroll h-screen bg-blue-50">
      <div className="flex flex-col gap-8 p-8">
        <div className="col-span-2 p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center">
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
        <div className="flex rounded-md bg-gray-300 relative tabs">
          <button
            className={
              "tabs-item active relative z-10 p-4 text-center rounded-l-md w-full text-sm cursor-pointer select-none focus:outline-none " +
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
              "transition duration-200 ease-in-out tabs-item w-full relative z-10 p-4 text-center rounded-r-md  text-sm cursor-pointer select-none focus:outline-none " +
              (stage == Stage.SKILLS ? "bg-blue-500 text-white" : "")
            }
            onClick={() => {
              setStage(Stage.SKILLS);
            }}
          >
            Skill Inventory
          </button>
          <span
            className={
              "transition duration-200 ease-in-out tab-item-animate rounded-md bg-white"
            }
          ></span>
        </div>
        <div className="">
          {stage == Stage.BADGES && (
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-8 bg-white shadow-lg rounded-xl">
              {data &&
                data.user_badges.map((badge) => {
                  return badge.locked ? (
                    <div className="flex justify-center items-center">
                      <LockedBadge title={badge.badge.title} />
                    </div>
                  ) : (
                    <Link href={`/badges/${badge.badge.id}`}>
                      <div className="flex justify-center items-center">
                        <img
                          src={badge.badge.image}
                          className="w-32 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
          {stage == Stage.SKILLS && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
              {data &&
                data.user_skills.map((skill) => (
                  <div className="flex gap-8 bg-white rounded-xl shadow-xl p-12 justify-center items-center">
                    <p className="text-xl">{skill.skill.title}</p>
                    <p className="text-3xl">{getEmoji(skill.emoji)}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
