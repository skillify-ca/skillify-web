import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ModalProvider } from "react-simple-hook-modal";
import { Provider } from "next-auth/client";
import initializeApollo from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";

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
            <Component {...pageProps} />
          </ModalProvider>
        </DndProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
