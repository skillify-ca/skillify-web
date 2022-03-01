import Head from "next/head";
import React from "react";
import { Leaderboard } from "../../components/coding/Leaderboard";
import ProfileComponent from "../../components/ProfileComponent";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileComponent />
      {false && <Leaderboard />}
    </div>
  );
};

export default Profile;

Profile.auth = true;
