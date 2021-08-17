import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React, { CSSProperties } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  bodyStyle: CSSProperties = {
    backgroundColor: "#E5E7EB",
  };

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Lexend/Lexend-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Lexend/Lexend-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <script src="https://static.mathigon.org/api/polypad-v2.0.js"></script>
          <script type="text/javascript" src="/js/polypad.js"></script>
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
