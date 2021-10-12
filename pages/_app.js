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
import Navbar from "../components/Navbar";

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
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <ModalProvider>
          <ReduxProvider store={store}>
            <AuthProvider>
              <Navbar />
              <Component {...pageProps} />
            </AuthProvider>
          </ReduxProvider>
        </ModalProvider>
      </DndProvider>
    </ApolloProvider>
  );
}

export default MyApp;
