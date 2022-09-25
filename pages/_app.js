import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import initializeApollo from "../lib/apollo";
import { AuthProvider, useAuth } from "../lib/authContext";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Layout from "../components/coding/studentPortal/Layout";
import * as fbq from "../lib/fbPixel"
import * as ga from "../lib/googleAnalytics"
import Hotjar from '@hotjar/browser';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();

  // HotJar setup
  const siteId = 3063697;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);

  const handleRouteChange = (url) => {
    if (window.gtag) {
      window.gtag("config", "G-0EEWR63W28", {
        page_path: url,
      });
      fbq.pageview();
    }
  };

  useEffect(() => {
    fbq.pageview()
    ga.load()

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

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  // TODO remove setting Component.Auth
  return (
    <ApolloProvider client={client}>
      <Script src="https://unpkg.com/kaboom/dist/kaboom.js" onLoad={() => {}} />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      {/* <!-- Google Tag Manager --> */}
       <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WD9273S');
          `,
        }}
      />
      {/* <!-- End Google Tag Manager --> */}

      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <ReduxProvider store={store}>
          <AuthProvider>
            {Component.auth ? (
              <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
          </AuthProvider>
        </ReduxProvider>
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
