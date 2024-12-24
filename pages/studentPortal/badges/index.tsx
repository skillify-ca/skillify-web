import { useQuery } from "@apollo/client";
import React from "react";
import {
  FETCH_BADGES,
  FetchBadgesResponse,
} from "../../../graphql/studentPortal/badges/fetchBadges";
import {
  FETCH_USER_BADGES,
  FetchUserBadgesResponse,
} from "../../../graphql/studentPortal/userBadges/fetchUserBadges";

export default function Badges() {
  const { data: badges, loading } = useQuery<FetchBadgesResponse>(FETCH_BADGES);
  const { data: userBadges, loading: userBadgesLoading } =
    useQuery<FetchUserBadgesResponse>(FETCH_USER_BADGES);

  const userBadgesIds = userBadges?.user_coding_badges.map(
    (badge) => badge.badgeId
  );

  return (
    <div className="h-screen overflow-scroll">
      <div className="p-16">
        <h1 className="text-3xl font-bold">Badges</h1>
        <p>Here are the badges you have earned:</p>
      </div>
      {loading ? <p>Loading...</p> : null}
      {badges ? (
        <div className="grid grid-cols-4 gap-16 p-16 pt-0 place-items-center">
          {badges.coding_badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center justify-center p-4 h-96 bg-backgroundSecondary w-80"
            >
              <img
                className="w-64 h-64 mb-4"
                src={
                  userBadgesIds?.includes(badge.id)
                    ? badge.image
                    : "/images/lock.png"
                }
                alt={badge.title}
              />
              <h2 className="font-bold">{badge.title}</h2>
              <p className="line-clamp-2">{badge.description}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

Badges.premium = true;
