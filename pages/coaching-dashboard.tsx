import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
  Users,
} from "../graphql/fetchUserProfileCard";
import { format } from "date-fns";
import Link from "next/link";
import { userListSelector, setUserList } from "../redux/skillifyUsersSlice";
const coachingDashboard = () => {
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const { loading, data } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD,
    {
      onCompleted: () => dispatch(setUserList(data)),
    }
  );
  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }

  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl">Coaching Dashboard</p>
      <h2 className="mb-4">Enrolled Students</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <p>{JSON.stringify(userList)}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {data.users.length > 0 &&
            data.users.map((it) => (
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
                    currentFocus={""}
                    nextGoal={""}
                    link={it.link}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default coachingDashboard;
