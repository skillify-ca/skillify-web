import Head from "next/head";
import React from "react";
import { Leaderboard } from "../../components/coding/Leaderboard";
import Layout from "../../components/coding/studentPortal/Layout";
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

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
