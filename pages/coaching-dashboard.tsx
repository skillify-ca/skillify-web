import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
} from "../graphql/fetchUserProfileCard";
import Link from "next/link";
import { userSelector, setUserList } from "../redux/userSlice";
import { FetchUserBadgesCountResponse } from "../graphql/fetchUserBadgesCount";
import { profileSelector, setTotalBadgeCount } from "../redux/profileSlice";
import {
  FetchTotalBadgesCountResponse,
  FETCH_TOTAL_USER_BADGES_COUNT,
} from "../graphql/fetchTotalUserBadgesCount";

const coachingDashboard = () => {
  const dispatch = useDispatch();

  const { userList } = useSelector(userSelector);
  const { totalBadgeCount } = useSelector(profileSelector);

  const { loading } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: (data) => {
        if (data.users?.length > 0) {
          dispatch(setUserList(data.users));
        }
      },
    }
  );

  const { loading: totalUserBadgeCountLoading } =
    useQuery<FetchTotalBadgesCountResponse>(FETCH_TOTAL_USER_BADGES_COUNT, {
      onCompleted: (data) => {
        if (data) {
          dispatch(
            setTotalBadgeCount(data.coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }
  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl font-bold">Coaching Dashboard</p>
      <h2 className="mb-4">Enrolled Students</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {userList.map((it, index) => {
          return (
            <div key={index}>
              <Link href={"profile/v2/" + it.id}>
                <div className="">
                  <ProfileDetailCard
                    avatar={
                      it.profile_image == null
                        ? "../../images/logo-2.png"
                        : it.profile_image
                    }
                    name={it.name}
                    joinDate={it.created_at}
                    badges={it.user_coding_badges_aggregate.aggregate.count}
                    currentBadge={it.coding_badge}
                    nextGoal={""}
                    link={it.link}
                    totalBadgeCount={totalBadgeCount}
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
