import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";
import React, { CSSProperties } from "react";

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
            src="https://www.googletagmanager.com/gtag/js?id=G-FJLNTHHN4G"
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
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJLNTHHN4G', { page_path: window.location.pathname });
            `,
            }}
          />
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
