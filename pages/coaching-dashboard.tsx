import { useQuery } from "@apollo/client";
import React from "react";
import ProfileDetailCard from "../components/coding/studentPortal/ProfileDetailCard";
import {
  FetchUserProfileCardResponse,
  FETCH_USER_PROFILE_CARD,
} from "../graphql/fetchUserProfileCard";
import { format } from "date-fns";
import Link from "next/link";
const coachingDashboard = () => {
  const { loading, data } = useQuery<FetchUserProfileCardResponse>(
    FETCH_USER_PROFILE_CARD
  );
  if (loading)
    return <div className="flex place-content-center">"Loading..."</div>;

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <div className="mb-8 text-3xl">Coaching Dashboard</div>
        <h2 className="mb-4">Enrolled Students</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data?.users.map((it) => (
            <Link href={"profile/" + it.link}>
              <div className="rounded-md">
                <ProfileDetailCard
                  avatar={
                    it.profile_image == null
                      ? "../../images/logo-2.png"
                      : it.profile_image
                  }
                  name={it.name}
                  joinDate={format(new Date(it.created_at), "yyyy-MM-dd")}
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
