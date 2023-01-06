import "../styles/globals.css";
import React from "react";
import { useEffect } from "react";
import SuperTokensReact, {
  SuperTokensWrapper,
  redirectToAuth,
} from "supertokens-auth-react";
import * as SuperTokensConfig from "../config/app-config";
import Session from "supertokens-auth-react/recipe/session";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}): JSX.Element | undefined {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          redirectToAuth();
        }
      }
    }
    doRefresh().catch((err: any) => console.error(err));
  }, [pageProps.fromSupertokens]);
  if (pageProps.fromSupertokens === "needs-refresh") {
    return;
  }

  return (
    <SuperTokensWrapper>
      <Component {...pageProps} />
    </SuperTokensWrapper>
  );
}

export default MyApp;
