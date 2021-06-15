import React from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import Link from "next/link";
import { userId } from "../graphql/utils/constants";
import TopicItem from "../components/stories/TopicItem";
import { FETCH_BADGE } from "../graphql/fetchBadges";
import { FETCH_USER_BADGES } from "../graphql/fetchUserBadge";

export default function Profile(props) {
  const [session, user] = useSession();
  const userSkillsData = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: userId(session),
    },
  });

  const userBadgeData = useQuery(FETCH_USER_BADGES, {
    variables: {
      userId: userId(session),
    },
  });
  let userBadges = [];
  if (userBadgeData.data) {
    userBadges = userBadgeData.data.user_badges;
  }

  let skills = [];
  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
  }
  const progress = () => {
    const unlockedBadges = userBadges.filter((it) => it.locked == false);
    if (userBadges.length > 0) {
      return Math.round((unlockedBadges.length * 100) / userBadges.length);
    } else {
      return 0;
    }
  };

  console.log(userBadges);
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

        <div>
          {userBadges.map((badge) => {
            return badge.locked ? (
              "locked"
            ) : (
              <Link href={`/badges/${badge.badge.id}`}>
                <img src={badge.badge.image} />
              </Link>
            );
          })}
        </div>

        {/* <div>
          {badges.map((badge) => (
            <p>{badge.title}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}
