import { ApolloClient, InMemoryCache } from "@apollo/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FETCH_USER_BY_EMAIL } from "../../../graphql/studentPortal/users/fetchUserByEmail";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // fetch user id from hasura
      const client = new ApolloClient({
        uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
        cache: new InMemoryCache(),
      });
      const { data } = await client.query({
        query: FETCH_USER_BY_EMAIL,
        variables: {
          email: token.email,
        },
      });

      if (data.users?.length > 0) {
        token.uid = data.users[0].id;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.uid = token.uid;
      return session;
    },
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

export default NextAuth(authOptions);
