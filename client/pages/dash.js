import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
} from "@apollo/client";
import { WebSocketLink } from 'apollo-link-ws'
import Race from "./../components/Race"

const link = process.browser
  ? new WebSocketLink({
    uri: `ws://localhost:4000/`,
      options: {
        reconnect: true,
      },
    })
  : null;

const client = new ApolloClient({
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const Messages = ({ user }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }
  return JSON.stringify(data);
};

const Dash = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Race />
        <Messages user="Vithushan" />
      </div>
    </ApolloProvider>
  );
};

export default Dash;
