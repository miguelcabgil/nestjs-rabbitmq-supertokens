import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import {
  SessionAuth,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react";

function ProtectedPage() {
  const session = useSessionContext();

  async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut();
    redirectToAuth();
  }

  if (session.loading === true) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SuperTokens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          You are authenticated with SuperTokens!
        </p>

        <p className={styles.description}>
          UserId: {session.userId} <br /> (from SSR: nothing)
        </p>
        <p className={styles.description}>
          Access token payload: {JSON.stringify(session.accessTokenPayload)}
        </p>
        <div
          style={{
            display: "flex",
            height: "70px",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingLeft: "75px",
            paddingRight: "75px",
          }}
        >
          <div
            onClick={logoutClicked}
            style={{
              display: "flex",
              width: "116px",
              height: "42px",
              backgroundColor: "#000000",
              borderRadius: "10px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            SIGN OUT
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <SessionAuth>
      <ProtectedPage />
    </SessionAuth>
  );
}
