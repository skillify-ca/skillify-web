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
    FETCH_USER_PROFILE_CARD
  );
  data &&
    data.users.length > 0 &&
    dispatch(
      setUserList({
        id: data.users[0].id,
        name: data.users[0].name,
        link: data.users[0].link,
        profile_image: data.users[0].profile_image,
        badges_earned: data.users[0].badges_earned,
        created_at: data.users[0].created_at,
      })
    );
  if (loading) {
    return <div className="flex place-content-center">"Loading..."</div>;
  }

  return (
    <div className="flex flex-col p-4 m-4 ">
      <p className="mb-8 text-3xl">Coaching Dashboard</p>
      <h2 className="mb-4">Enrolled Students</h2>
      <p>{JSON.stringify(userList)}</p>
    </div>
  );
};

export default coachingDashboard;
