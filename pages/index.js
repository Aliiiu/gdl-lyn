import Layout from "../components/Layout/Layout";
import Main from "../components/Pages/Main";
import Head from "next/head";

export default function Home() {
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
