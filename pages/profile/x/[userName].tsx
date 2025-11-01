import { GetServerSideProps } from "next";
import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import Header404 from "../../../components/notFound/Header404";
import { supabase } from "../../../lib/supabase";
import InternalProfile from "../[userId]";

type ProfileGatewayProps = {
  userId: string;
};

function ProfileGateway({ userId }: ProfileGatewayProps) {
  if (userId) {
    return <InternalProfile userIdFromLink={userId} isExternal={true} />;
  } else {
    return (
      <div>
        <p className="font-bold">User Not Found</p>
        <Header404 />
      </div>
    );
  }
}

export default ProfileGateway;

export const getServerSideProps: GetServerSideProps<ProfileGatewayProps> =
  async (ctx) => {
    const userName = ctx.params?.userName as string;

     // Query using Supabase instead of GraphQL
    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("link", userName)
      .single();

    if (error || !data) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          userId: data.id,
        },
      };
    }
  };

// create custom nextjs layout
ProfileGateway.getLayout = function getLayout(page: any) {
  return (
    <div>
      <div className="flex flex-col min-h-screen theme-default">
        <LandingNavbar />

        <main className="flex-grow w-full mx-auto max-w-7xl">{page}</main>
      </div>
    </div>
  );
};
