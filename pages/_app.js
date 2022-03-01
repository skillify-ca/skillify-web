import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import initializeApollo from "../lib/apollo";
import { AuthProvider, useAuth } from "../lib/authContext";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Navbar from "../components/ui/Navbar"

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "G-FJLNTHHN4G", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const client = initializeApollo();

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 600;
  }

  // TODO remove setting Component.Auth
  return (
    <ApolloProvider client={client}>
      <Script src="https://unpkg.com/kaboom/dist/kaboom.js" onLoad={() => {
      }} />
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <ModalProvider>
          <ReduxProvider store={store}>
            <AuthProvider>
              {Component.auth ? (
                <Auth>
                  <Navbar/>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </AuthProvider>
          </ReduxProvider>
        </ModalProvider>
      </DndProvider>
    </ApolloProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (!user) router.push("/welcome"); // If not authenticated, force log in
  }, [user, loading]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
