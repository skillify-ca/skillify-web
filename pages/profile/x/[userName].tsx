import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GetServerSideProps } from "next";
import React from "react";
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import Header404 from "../../../components/notFound/Header404";
import { FETCH_USER } from "../../../graphql/studentPortal/users/fetchUser";
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

    const client = new ApolloClient({
      uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
      cache: new InMemoryCache(),
    });

    const { data } = await client.query<{ users: Array<{ id: string }> }>({
      query: FETCH_USER,
      variables: {
        link: userName,
      },
    });

    if (!data.users[0]) {
      return {
        notFound: true,
      };
    } else {
      const validUserId = data.users[0].id;
      return {
        props: {
          userId: validUserId,
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
