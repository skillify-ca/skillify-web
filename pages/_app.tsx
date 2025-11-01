import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Script from "next/script";
import posthog from "posthog-js";
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Provider as ReduxProvider } from "react-redux";
import MDXProvider from "../components/blog/MDXProvider";
import Layout from "../components/studentPortal/layout/Layout";
import { AuthProvider, useAuth } from "../lib/authContext";
import * as fbq from "../lib/fbPixel";
import * as ga from "../lib/googleAnalytics";
import store from "../redux/store";
import "../styles/globals.css";

/**
 * Send mix panel event
 * @param event_name
 * @param props
 */
export const event = (event_name, props) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track(event_name, props);
    }
  } catch (e) {
    console.log(e);
  }
};
function MyApp({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    if (window.gtag) {
      window.gtag("config", "G-0EEWR63W28", {
        page_path: url,
      });
      fbq.pageview();
    }
    //Send track event when new pages is loaded
    event("Page view", {
      url,
    });
  };

  useEffect(() => {
    fbq.pageview();
    ga.load();

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_ID, {
      api_host: "https://app.posthog.com",
    });

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 600;
  }

  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => <Layout isPremiumPage={Component.premium}>{page}</Layout>);

  // TODO remove setting Component.Auth
  return (
    <SessionProvider session={pageProps.session}>
      <Script src="https://unpkg.com/kaboom/dist/kaboom.js" onLoad={() => { }} />
      {typeof window != "undefined" && !(window as any).mixpanel && (
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
            for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
            MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
            mixpanel.init('${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN}', {debug: true});            
  `,
          }}
        />
      )}
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
            <MDXProvider>
              {Component.auth ||
                router.pathname.startsWith("/studentPortal") ? (
                <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
              ) : (
                getLayout(<Component {...pageProps} />)
              )}
            </MDXProvider>
          </AuthProvider>
        </ReduxProvider>
      </DndProvider>
    </SessionProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const MAX_WAIT_TIME = 100;

  React.useEffect(() => {
    if (loading) return;

    // Delay to allow user to hydrate if needed
    const timeout = setTimeout(() => {
      if (!user) {
        router.replace("/welcome");
      }
    }, MAX_WAIT_TIME);

    return () => clearTimeout(timeout);
  }, [user, loading]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
