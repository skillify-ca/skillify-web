import React, { useEffect, useState } from "react";
import { EMOJI_MASTERY, getEmoji, grades } from "../pages/api/skill";
import { FETCH_USER_PROFILE } from "../graphql/fetchUserProfile";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import LockedBadge from "./LockedBadge";
import { useAuth } from "../lib/authContext";

const ProfileComponent = () => {
  const { user } = useAuth();

  let { loading, data, refetch } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: user.uid,
    },
  });

  enum Stage {
    BADGES,
    SKILLS,
  }
  const [stage, setStage] = useState(Stage.BADGES);

  const progress = () => {
    if (!loading && data.user_badges.length > 0) {
      const unlockedBadges = data.user_badges.filter(
        (it) => it.locked == false
      );
      return Math.round(
        (unlockedBadges.length * 100) / data.user_badges.length
      );
    } else {
      return 0;
    }
  };

  return (
    <div className="h-screen overflow-auto bg-scroll bg-blue-50">
      <div className="flex flex-col p-8 space-y-8">
        <div className="col-span-2 p-8 bg-white shadow-lg rounded-3xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col items-center">
              <p className="text-xl">{user && user.displayName}</p>
              <p className="text-sm">{user && user.email}</p>
            </div>
            <div className="flex flex-col m-4 space-y-4">
              <p className="text-sm">Progress</p>
              <p className="flex items-center justify-center w-16 h-16 text-center bg-purple-100 rounded-full shadow-inner ring-blue-400 ring-8">
                {progress()}%
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex bg-gray-300 rounded-md tabs">
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
            <div className="grid grid-cols-2 gap-8 p-8 bg-white shadow-lg sm:grid-cols-3 md:grid-cols-4 rounded-xl">
              {data &&
                data.user_badges.map((badge) => {
                  return badge.locked ? (
                    <div className="flex items-center justify-center">
                      <LockedBadge title={badge.badge.title} />
                    </div>
                  ) : (
                    <Link href={`/badges/${badge.badge.id}`}>
                      <div className="flex items-center justify-center">
                        <img
                          src={badge.badge.image}
                          className="w-32 transition duration-500 ease-in-out transform cursor-pointer hover:scale-110"
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
          {stage == Stage.SKILLS && (
            <div className="grid grid-cols-1 gap-8 p-8">
              {data &&
                grades.map((grade) => (
                  <div>
                    <p className="text-xl font-bold">{grade.title}</p>
                    <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-3">
                      {data.user_skills
                        .filter((it) => it.skill.grade == grade.ordinal)
                        .map((skill) => (
                          <div className="flex flex-col items-center justify-center gap-8 p-8 text-center bg-white shadow-xl rounded-xl">
                            <p className="w-full text-xl">
                              {skill.skill.title}
                            </p>
                            <p className="text-3xl">{getEmoji(skill.emoji)}</p>
                          </div>
                        ))}
                    </div>
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
