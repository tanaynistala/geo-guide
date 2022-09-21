import Container from "../../components/container"
import Header from "../../components/header"
import Layout from "../../components/layout"
import Head from "next/head"
import { getGuides } from "../../lib/api"
import EventType from "../../interfaces/event"

type Props = {
  allEvents: EventType[]
}

export default function Index({ allEvents }: Props) {
  const heroEvent = allEvents[0]
  const moreEvents = allEvents.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Events | GeoGuide</title>
        </Head>
        <Container>
          <Header />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            Events
          </h1>

          {heroEvent && <h1>Hero: {heroEvent.title}</h1>}

          {moreEvents.length > 0 &&
            moreEvents.map((event) => <h1>{event.title}</h1>)}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allEvents = await Promise.all(getGuides("event"))
  // const allGuides = JSON.stringify(guides);

  return {
    props: {
      allEvents,
    },
  }
}
