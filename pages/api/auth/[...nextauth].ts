import { ApolloClient, InMemoryCache } from "@apollo/client";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FETCH_USER_BY_EMAIL } from "../../../graphql/studentPortal/users/fetchUserByEmail";

export const authOptions: AuthOptions = {
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
    async jwt({ token, user }) {

      // FETCH user id from Hasura
      if (user) {
        const client = new ApolloClient({
          uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
          cache: new InMemoryCache(),
        });

        try {
          const { data } = await client.query({
            query: FETCH_USER_BY_EMAIL,
            variables: { email: user.email },
          });

          if (data?.users?.length > 0) {
            
            token.uid = data.users[0].id;
            console.log("User found, UID set:", token.uid);
          } else {
            console.warn("No user found for email:", user.email);
          }
        } catch (error) {
          console.error("Error fetching user from Hasura:", error);
        }
      }

      return token;   
    },

    async session({ session, token }) {
      if (token?.uid) {
        session.uid = token.uid;
        console.log("Session callback - UID attached:", session.uid);
      } else {
        console.warn("Session callback - No UID found in token");
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, 
    maxAge: 30 * 24 * 60 * 60, 
  },
  debug: true, 
};

export default NextAuth(authOptions);
