import { getSession, useSession } from "next-auth/client";
import React from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import ProfileComponent from "../components/ProfileComponent";

export default function Profile({session}) {
  return (
    <div>
      <DiagnosticNavbar />
      <ProfileComponent session={session} />
    </div>
  );
}

Profile.auth = true;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
