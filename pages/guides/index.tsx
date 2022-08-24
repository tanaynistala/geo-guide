import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Head from "next/head";
import HeroMap from "../../components/hero-map";
import { getGuides } from "../../lib/api";
import GuideType from "../../interfaces/guide";

type Props = {
  allGuides: GuideType[];
};

export default function Index({ allGuides }: Props) {
  const heroGuide = allGuides[0];
  const moreGuides = allGuides.slice(1);
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

          {/* <HeroMap /> */}

          {heroGuide && <h1>Hero: {heroGuide.title}</h1>}

          {moreGuides.length > 0 &&
            moreGuides.map((guide) => <h1>{guide.title}</h1>)}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allGuides = await Promise.all(getGuides("other"));
  // const allGuides = JSON.stringify(guides);

  return {
    props: {
      allGuides,
    },
  };
}
