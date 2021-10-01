import { getSession, useSession } from "next-auth/react";
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

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
