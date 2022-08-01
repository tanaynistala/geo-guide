import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>GeoGuide</title>
        </Head>
        <Container>
          <Header />
        </Container>
      </Layout>
    </>
  );
}
