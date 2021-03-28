import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react"

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://talented-duckling-40.hasura.app/v1/graphql",
      headers: { "Content-Type": "application/json" },
    }),
    cache: new InMemoryCache(),
  });
};

let apolloClient;

export default function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ? apolloClient : createApolloClient();

  // if initialState
  if (initialState) {
    const existingCache = _apolloClient.extract();
    // restore cache
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // if the mode is ssr
  if (typeof window === 'undefined') return _apolloClient;


  // create client once on the frontend
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    
}
