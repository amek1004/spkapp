import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/Link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Swissport Korea BSA</title>
        <meta name="description" content="swissport korea BSA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lufthanja</h1>
    </Layout>
  );
}
