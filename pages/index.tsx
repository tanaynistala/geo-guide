import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Head from "next/head"
import { Title } from "../components/typography"
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
          <Title text="Guides" />

          <WorldMap />
        </Container>
      </Layout>
    </>
  )
}
