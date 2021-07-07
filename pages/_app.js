import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import { Provider } from "next-auth/client";
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { signIn, useSession } from "next-auth/client";
import React, {useEffect } from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();
  
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 600;
  }

  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <ModalProvider>
            <ReduxProvider store={store}>
              {Component.auth
                ? <Auth><Component {...pageProps} /></Auth>
                : <Component {...pageProps} />
              }
            </ReduxProvider>
          </ModalProvider>
        </DndProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const [session, loading] = useSession()
  const isUser = !!session?.user
  const router = useRouter()

  React.useEffect(() => {
    if (loading) return // Do nothing while loading
    if (!isUser) router.push('/welcome') // If not authenticated, force log in
  }, [isUser, loading])

  if (isUser) {
    return children
  }
  
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}