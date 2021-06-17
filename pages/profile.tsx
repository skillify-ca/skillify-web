import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";
import Link from "next/link";
import { userId } from "../graphql/utils/constants";
import TopicItem from "../components/stories/TopicItem";
import { FETCH_BADGES } from "../graphql/fetchBadges";
import { FETCH_USER_BADGES } from "../graphql/fetchUserBadge";
import { INIT_USER_BADGES } from "../graphql/initUserBadges";

export default function Profile(props) {
  const [session, user] = useSession();
  const [initUserBadgeData, initUserBadgeMutation] = useMutation(
    INIT_USER_BADGES,
    {
      variables: {
        userId: userId(session),
      },
      refetchQueries: [
        {
          query: FETCH_USER_BADGES,
          variables: {
            userId: userId(session),
          },
        },
      ],
    }
  );
  let userBadgeData = useQuery(FETCH_USER_BADGES, {
    variables: {
      userId: userId(session),
    },
  });
  let userBadges = [];
  if (userBadgeData.data) {
    userBadges = userBadgeData.data.user_badges;
    if (userBadges.length == 0) {
      if (!initUserBadgeMutation.called) {
        initUserBadgeData();
      }
    }
  }
  const progress = () => {
    const unlockedBadges = userBadges.filter((it) => it.locked == false);
    if (userBadges.length > 0) {
      return Math.round((unlockedBadges.length * 100) / userBadges.length);
    } else {
      return 0;
    }
  };
  return (
    <div>
      <Navbar />
      <div className="overflow-auto bg-scroll h-screen bg-blue-50">
        <div className="">
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

          <div className="grid gap-x-8 gap-y-4 grid-cols-3 w-1/2 m-auto p-4">
            {userBadges.map((badge) => {
              return badge.locked ? (
                <div className="">
                  <img src="/images/lockedPic.png" className="w-32" />
                </div>
              ) : (
                <Link href={`/badges/${badge.badge.id}`}>
                  <img src={badge.badge.image} className="w-32" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
