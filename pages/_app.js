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

import { ThemeProvider } from "@magiclabs/ui";
import React, { useEffect, useState } from "react";

import { UserContext } from "../lib/UserContext";
import Router from "next/router";
import { magic } from "../lib/magic";
import "@magiclabs/ui/dist/cjs/index.css";

function MyApp({ Component, pageProps }) {
  const client = initializeApollo();

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 600;
  }

  const [user, setUser] = useState();

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
      } else {
        Router.push("/login");
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider session={pageProps.session}>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <ModalProvider>
            <ReduxProvider store={store}>
              <ThemeProvider root>
                <UserContext.Provider value={[user, setUser]}>
                  <Component {...pageProps} />
                </UserContext.Provider>
              </ThemeProvider>
            </ReduxProvider>
          </ModalProvider>
        </DndProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
