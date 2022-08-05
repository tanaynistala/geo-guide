import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Head from "next/head";
import LinkCard from "../components/link-card";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>GeoGuide</title>
        </Head>
        <Container>
          <Header />
          <LinkCard
            title="Guides"
            description="Check out our guides!"
            cta="Explore"
            href="/guides"
          >
            <img src="/img/license-plate.png" />
          </LinkCard>
        </Container>
      </Layout>
    </>
  );
}
