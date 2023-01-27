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
    backgroundColor: "#ffffff",
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
            content={"https://www.skillify.ca/images/logo.png"}
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
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/21210484.js"
          ></script>

          {/* Facebook Pixel */}
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

          {/* Google Analytics */}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-235433930-1"
          ></script>
        </Head>
        <body style={this.bodyStyle}>
          <Main />
          <NextScript />
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WD9273S"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
