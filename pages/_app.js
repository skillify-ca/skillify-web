import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { useSession, SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <ModalProvider>
            <ReduxProvider store={store}>
              <div>
                {Component.auth ? (
                  <Auth>
                    <Navbar />
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
              </div>
            </ReduxProvider>
          </ModalProvider>
        </DndProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const router = useRouter();

  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) router.push("/welcome"); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
