const { GraphQLServer, PubSub } = require("graphql-yoga");

var messages = [];

const typeDefs = `
type Message {
    id: ID!
    user: String!
    content: String!
}

type Query {
    messages: [Message!]
}

type Mutation {
    postMessage(user: String!, content: String!): ID!
    deleteMessage(id: ID!): String
}

type Subscription {
    messages: [Message!]
}
`;

const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      subscribers.forEach((fn) => fn());
      return id;
    },
    deleteMessage: (parent, {id}) => {
      messages.pop();
      subscribers.forEach((fn) => fn());
      return "Deleted";
    }
  },
  Subscription: {
    messages: {
      subscribe: (parents, args, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2, 15);

        // Publish messages to channel whenever messages are updated
        onMessagesUpdates(() => pubsub.publish(channel, { messages }));

        // Publish messages to channel on new subscription
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel);
      },
    },
  },
};

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(({ port }) => {
  console.log("Server on http://localhost:" + port + "/");
});
