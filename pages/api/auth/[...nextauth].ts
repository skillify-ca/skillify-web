import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "../../../lib/supabase";



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
      if (user) {
         try {
          // Query Supabase for user by email
          const { data, error } = await supabase
            .from("users")
            .select("id")
            .eq("email", user.email)
            .single();

          if (!error && data) {
            token.uid = data.id;
          }
        } catch (error) {
          // TODO: integrate with monitoring system
          console.error("Error fetching user:", error);
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.uid) {
        session.uid = token.uid;
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
  debug: false, // default for production
};

export default NextAuth(authOptions);
