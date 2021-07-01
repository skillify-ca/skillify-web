import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.sub;
      return Promise.resolve(session);
    },
    async redirect(url, baseUrl) {
      return baseUrl + "/practice";
    },
    async jwt(token, user, account, profile, isNewUser) {
      userSync(token)
      return token;
    },
  },
});

const userSync = async (token) => {
  const userId = token.sub;
  const nickname = token.name;
  const url = "https://talented-duckling-40.hasura.app/v1/graphql";
  const upsertUserQuery = `
    mutation ($userId: String!, $name:String){
  insert_users(objects: [{ id: $userId, name:$name }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
    affected_rows
  }
}
`;
  // TODO if user was already in the user table, then update the last seen column
  // If the user was newly added to the user table, then initialize their skills, and badges
  // Then we can remove the initialization checks in the practice tracker
  const graphqlReq = {
    query: upsertUserQuery,
    variables: { userId: userId, name: nickname },
  };

  await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify(graphqlReq),
  })
};
