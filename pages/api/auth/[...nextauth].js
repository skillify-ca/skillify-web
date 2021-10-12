import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/practice";
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      userSync(token);
      return token;
    },
  },
});
