import Head from "next/head";
import React from "react";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileComponent />
    </div>
  );
};

export default Profile;

Profile.auth = true;
