import Container from "../../components/container"
import Header from "../../components/header"
import Layout from "../../components/layout"
import Head from "next/head"

import HeroCard from "../../components/guides/guide-cards/hero-card"
import GuideCard from "../../components/guides/guide-cards/guide-card"

import { Title, Subtitle } from "../../components/typography"
import { getGuides } from "../../lib/api"
import GuideType from "../../interfaces/guide"

type Props = {
  allGuides: GuideType[]
}

export default function Index({ allGuides }: Props) {
  const heroGuide = allGuides[0]
  const moreGuides = allGuides.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Guides | GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <Title text="Guides" />

          <Subtitle
            text="Explore our guides, from bollard-guessing to
            telling Czechia and Slovakia apart."
          />

          {heroGuide && (
            <HeroCard guide={heroGuide} href={`/guides/${heroGuide.slug}`} />
          )}

          <div className="grid grid-flow-row grid-cols-2 gap-16 mb-32">
            {moreGuides.length > 0 &&
              moreGuides.map((guide) => (
                <GuideCard guide={guide} href={`/guides/${guide.slug}`} />
              ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allGuides = await Promise.all(getGuides("other"))
  // const allGuides = JSON.stringify(guides);

  return {
    props: {
      allGuides,
    },
  }
}
