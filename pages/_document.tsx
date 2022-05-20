import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React, { CSSProperties } from "react";
import { FB_PIXEL_ID } from "../lib/fbPixel";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  bodyStyle: CSSProperties = {
    backgroundColor: "#f3f4f6",
  };

  render() {
    return (
      <Html>
        <Head>
          <title>{"Skillify"}</title>
          <meta
            name="description"
            content={
              "Toronto's best coding bootcamp for online learning! We teach high demand skills to help you get hired in the tech industry."
            }
          />
          <meta property="og:title" content={"Skillify"} />
          <meta
            property="og:image"
            content={"https://www.skillify.ca/images/skillify-header.jpeg"}
          />
          <meta
            property="og:description"
            content={
              "Toronto's best coding bootcamp for online learning! We teach high demand skills to help you get hired in the tech industry."
            }
          />
          <meta property="og:url" content="https://skillify.ca/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-198040313-1"
          />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/21210484.js"
          ></script>
          <script
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
fbq('init', '541031284058570');
fbq('track', 'PageView');
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=541031284058570&ev=PageView&noscript=1"
            />
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=395118125342444&ev=PageView&noscript=1"
            />
          </noscript>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-198040313-1', { page_path: window.location.pathname });
            `,
            }}
          />
          <meta
            name="facebook-domain-verification"
            content="c116vcf4jgnb5bfmzhijy6ag2kp33v"
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body style={this.bodyStyle}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
