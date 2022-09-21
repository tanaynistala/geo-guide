import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "next/head"
import LinkCard from "../components/link-card"
import WorldMap from "../components/world-map/world-map"

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>GeoGuide</title>
        </Head>
        <Container>
          <Header />
          {/* <LinkCard
            title="Guides"
            description="Check out our guides!"
            cta="Explore"
            href="/guides"
          >
            <img src="/img/license-plate.png" />
          </LinkCard> */}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Guides
          </h1>

          <WorldMap />
        </Container>
      </Layout>
    </>
  )
}
