import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getAllGuides } from "../../lib/guides-api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Guide from "../../interfaces/guide";
import HeroMap from "../../components/guide/hero-map";

type Props = {
  allGuides: Guide[];
};

export default function Index({ allGuides }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
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

export const getStaticProps = async () => {
  const allGuides = getAllGuides(["title", "slug"]);

  return {
    props: { allGuides },
  };
};
