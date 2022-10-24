import Layout from "../components/Layout/Layout";
import Main from "../components/Pages/Main";
import Head from "next/head";
import { useEffect } from "react";
import { detect } from "detect-browser";

export default function Home() {
  const browser = detect();
  // useEffect(() => {
  //   if (browser.version < "106.0.0") alert(browser.version);
  // }, []);
  return (
    <div>
      <Head>
        <title>GDL-PR | Home</title>
        <meta name="description" content="Build Wealth Comfortably." />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
