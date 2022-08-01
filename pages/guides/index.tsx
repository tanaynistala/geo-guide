import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Head from "next/head";
import HeroMap from "../../components/guide/hero-map";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Guides | GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Guides
          </h1>

          <HeroMap />
        </Container>
      </Layout>
    </>
  );
}
