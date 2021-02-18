import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
query {
    messages { 
        id
        content
        user
    }
}
`;

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES);
    if (!data) {
        return null;
    }
    return JSON.stringify(data);
}

const Dash = () => {
  return <ApolloProvider client={client}>
      <div>
          <Messages user="Vithushan" />
      </div>
      </ApolloProvider>;
};

export default Dash;
