import Topbar from "../components/TopNav/Topbar";
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
