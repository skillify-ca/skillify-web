import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { withApollo } from "../libs/withApollo";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
    audience="https://vithushan.auth0.com/api/v2/"
      domain="vithushan.auth0.com"
      clientId="R8d5SngeS7x4F2P4qXe0NiyEY2w5uaJd"
      redirectUri={"http://localhost:3000/classroom"} // TODO this should be window.origin.location
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default withApollo()(MyApp);
