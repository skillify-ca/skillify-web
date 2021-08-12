import { getSession, useSession } from "next-auth/client";
import React from "react";
import ProfileComponent from "../components/ProfileComponent";

const Profile = () => {
  const [session, loading] = useSession();

  return (
    <div>
      <ProfileComponent session={session} />
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
