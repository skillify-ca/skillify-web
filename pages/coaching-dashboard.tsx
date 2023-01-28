import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
} from "../graphql/fetchUserProfileCard";
import Link from "next/link";
import { userSelector, setUserList, setEarnedBadges } from "../redux/userSlice";
import {
  FetchEarnedBadges,
  FETCH_EARNED_BADGES,
} from "../graphql/fetchEarnedBadges";
import { transformBadgesEarned } from "./api/coachingDashboard";
const coachingDashboard = () => {
  const dispatch = useDispatch();

  const { userList, earnedBadges } = useSelector(userSelector);

  const { loading, data } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: () =>
        data.users.length > 0 ? dispatch(setUserList(data.users)) : loading,
    }
  );

  const enrolledUsers = userList.map((user) => user.id);

  const {} = useQuery<FetchEarnedBadges>(FETCH_EARNED_BADGES, {
    variables: {
      enrolledIds: enrolledUsers,
    },
    onCompleted: (data) => {
      dispatch(setEarnedBadges(data.user_coding_badges));
    },
  });

  useEffect(() => {
    const aggregatedBadgeCount = earnedBadges.reduce((acc, badgeId) => {
      if (acc[badgeId.userId]) {
        acc[badgeId.userId] += 1;
      } else {
        acc[badgeId.userId] = 1;
      }
      return acc;
    }, {});
    dispatch(
      setUserList(transformBadgesEarned(userList, aggregatedBadgeCount))
    );
  }, [earnedBadges]);

  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }
  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl">Coaching Dashboard</p>
      <h2 className="mb-4">Enrolled Students</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {userList.map((it, index) => {
          return (
            <div key={index}>
              <Link href={"profile/" + it.link}>
                <div className="">
                  <ProfileDetailCard
                    avatar={
                      it.profile_image == null
                        ? "../../images/logo-2.png"
                        : it.profile_image
                    }
                    name={it.name}
                    joinDate={it.created_at}
                    badges={it.badges_earned}
                    currentBadge={it.coding_badge}
                    nextGoal={""}
                    link={it.link}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default coachingDashboard;
